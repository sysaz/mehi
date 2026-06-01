import { useState } from 'react';
import { X, FlaskConical } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductShowcaseProps {
  products: Product[];
}

type FilterKey = 'all' | 'minerals' | 'chemicals';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Products' },
  { key: 'minerals', label: 'Minerals' },
  { key: 'chemicals', label: 'Chemicals' },
];

export default function ProductShowcase({ products }: ProductShowcaseProps) {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered =
    filter === 'all' ? products : products.filter((p) => p.category === filter);

  const waLink = (name: string) =>
    `https://wa.me/919830261334?text=${encodeURIComponent(
      `Hi, I'd like to request a quote for ${name}.`
    )}`;

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f.key
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600'
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto self-center text-sm text-gray-500">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Image-overlay grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filtered.map((product) => (
          <button
            key={product.id}
            onClick={() => setSelected(product)}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Permanent bottom strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/75 to-transparent px-2 pt-6 pb-2 group-hover:opacity-0 transition-opacity duration-200">
              <p className="text-white text-xs font-medium truncate leading-tight">
                {product.name}
              </p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
              <div className="px-3 pb-3 w-full">
                <p className="text-white text-sm font-semibold leading-tight">
                  {product.name}
                </p>
                <p className="text-blue-200 text-xs mt-0.5">Click for details</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Dimmed backdrop */}
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" aria-hidden="true" />

          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
          >
            {/* Image header */}
            <div className="relative h-52 rounded-t-2xl overflow-hidden flex-shrink-0">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-1.5 text-gray-700 shadow-md transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Name + formula chip */}
              <div className="flex flex-wrap items-start gap-2">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {selected.name}
                </h2>
                {selected.formula && (
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-mono px-2.5 py-1 rounded-full border border-blue-200 flex-shrink-0 mt-1">
                    <FlaskConical size={11} />
                    {selected.formula}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {selected.description}
              </p>

              {/* Applications */}
              {selected.applications.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Applications
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.applications.map((app) => (
                      <span
                        key={app}
                        className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Available grades — omit section if empty */}
              {selected.grades.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Available Grades
                  </p>
                  <ul className="list-disc list-inside space-y-0.5">
                    {selected.grades.map((grade) => (
                      <li key={grade} className="text-gray-700 text-sm">
                        {grade}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Packaging */}
              {selected.packaging.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Packaging
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.packaging.map((pkg) => (
                      <span
                        key={pkg}
                        className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-100"
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Request a quote */}
              <a
                href={waLink(selected.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

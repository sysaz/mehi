export interface Product {
  id: string;
  name: string;
  category: 'minerals' | 'chemicals';
  image: string;
  formula: string;
  description: string;
  applications: string[];
  grades: string[];
  packaging: string[];
}

export const products: Product[] = [
  // ─── MINERALS ────────────────────────────────────────────────
  {
    id: 'talc',
    name: 'Talc',
    category: 'minerals',
    image: '/images/products/talc.webp',
    formula: 'Mg₃Si₄O₁₀(OH)₂',
    description:
      'A soft phyllosilicate mineral valued for its exceptional whiteness, smoothness, and chemical inertness across cosmetics, food, and industrial applications.',
    applications: ['Cosmetics & personal care', 'Food anti-caking agent', 'Plastics & rubber', 'Paints & coatings', 'Paper making'],
    grades: ['Cosmetic grade', 'Food grade', 'Industrial grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'kaolin',
    name: 'Kaolin',
    category: 'minerals',
    image: '/images/products/kaolin.webp',
    formula: 'Al₂Si₂O₅(OH)₄',
    description:
      'A fine white clay mineral prized for its high brightness, low abrasion, and excellent coating properties across ceramics, paper, and paint industries.',
    applications: ['Ceramics & porcelain', 'Paper coating & filling', 'Paints & coatings', 'Rubber & plastics', 'Pharmaceuticals'],
    grades: ['Ceramic grade', 'Paper grade', 'Paint grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'calcined-kaolin',
    name: 'Calcined Kaolin',
    category: 'minerals',
    image: '/images/products/calcined-kaolin.webp',
    formula: 'Al₂O₃·2SiO₂',
    description:
      'Kaolin thermally processed at high temperatures to enhance brightness, hardness, and opacity for demanding technical and industrial applications.',
    applications: ['Wire & cable insulation', 'Paints & coatings', 'Ceramics', 'Rubber & plastics', 'Refractories'],
    grades: ['Standard', 'High brightness'],
    packaging: ['25 kg bags', 'Jumbo bags'],
  },
  {
    id: 'calcium-carbonate',
    name: 'Calcium Carbonate',
    category: 'minerals',
    image: '/images/products/calcium-carbonate.webp',
    formula: 'CaCO₃',
    description:
      'Available in ground (GCC) and precipitated (PCC) forms, offering excellent whiteness and compatibility across a wide range of industrial formulations.',
    applications: ['Paints & coatings', 'Plastics & polymers', 'Paper', 'Rubber', 'Construction', 'Pharmaceuticals & food'],
    grades: ['GCC fine', 'GCC coarse', 'PCC'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'feldspar',
    name: 'Feldspar',
    category: 'minerals',
    image: '/images/products/feldspar.webp',
    formula: 'KAlSi₃O₈',
    description:
      'An aluminosilicate mineral used as a flux and filler in ceramics and glass, contributing to the hardness and durability of finished products.',
    applications: ['Ceramics & tiles', 'Glass manufacturing', 'Fillers in paint', 'Sanitary ware'],
    grades: ['Ceramic grade', 'Glass grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'dolomite',
    name: 'Dolomite',
    category: 'minerals',
    image: '/images/products/dolomite.webp',
    formula: 'CaMg(CO₃)₂',
    description:
      'A calcium magnesium carbonate mineral used in construction, glass, agriculture, and as a refractory material for high-temperature industrial processes.',
    applications: ['Construction & cement', 'Glass & ceramics', 'Agriculture (soil conditioner)', 'Steel & refractories', 'Paints & fillers'],
    grades: ['Construction grade', 'Refractory grade', 'Agricultural grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'quartz',
    name: 'Quartz',
    category: 'minerals',
    image: '/images/products/quartz.webp',
    formula: 'SiO₂',
    description:
      'High-purity silicon dioxide in crystalline form, valued for its chemical resistance, hardness, and optical clarity across industrial and technical uses.',
    applications: ['Glass manufacturing', 'Semiconductor & electronics', 'Paints & coatings', 'Construction', 'Water filtration'],
    grades: ['High purity (99.5%+ SiO₂)', 'Standard industrial'],
    packaging: ['25 kg bags', 'Jumbo bags'],
  },
  {
    id: 'hydrated-lime',
    name: 'Hydrated Lime',
    category: 'minerals',
    image: '/images/products/hydrated-lime.webp',
    formula: 'Ca(OH)₂',
    description:
      'Calcium hydroxide produced by slaking quicklime with water, used widely in construction, environmental remediation, and water treatment processes.',
    applications: ['Construction & plastering', 'Water & wastewater treatment', 'Flue gas treatment', 'Paper & pulp', 'Agriculture'],
    grades: ['Construction grade', 'Chemical grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'quick-lime',
    name: 'Quick Lime',
    category: 'minerals',
    image: '/images/products/quick-lime.webp',
    formula: 'CaO',
    description:
      'Highly reactive calcium oxide obtained by calcining limestone, used as a chemical reagent and in processes requiring high-temperature alkalinity.',
    applications: ['Steel production', 'Chemical manufacturing', 'Water treatment', 'Environmental remediation', 'Mining'],
    grades: ['Lump', 'Granular', 'Powdered'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'pvd-salt',
    name: 'PVD Salt',
    category: 'minerals',
    image: '/images/products/pvd-salt.webp',
    formula: 'NaCl',
    description:
      'Ultra-pure sodium chloride produced by vacuum evaporation, ensuring minimal impurities and consistent crystal size for sensitive pharmaceutical and food applications.',
    applications: ['Pharmaceutical manufacturing', 'Food processing', 'Chemical synthesis', 'Water softening'],
    grades: ['Pharmaceutical grade', 'Food grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'sodium-chloride',
    name: 'Sodium Chloride',
    category: 'minerals',
    image: '/images/products/sodium-chloride.webp',
    formula: 'NaCl',
    description:
      'Industrial-grade sodium chloride processed for chemical and industrial applications requiring a reliable, cost-effective source of salt.',
    applications: ['Chlor-alkali production', 'Water treatment', 'Road de-icing', 'Textile & dyeing', 'Animal feed'],
    grades: ['Industrial grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'bentonite',
    name: 'Bentonite',
    category: 'minerals',
    image: '/images/products/bentonite.webp',
    formula: '',
    description:
      'A swelling clay mineral with exceptional adsorption and binding properties, widely used in drilling, sealing, purification, and foundry operations.',
    applications: ['Oil & gas drilling (drilling mud)', 'Foundry sand bonding', 'Civil engineering sealing', 'Clarification & purification', 'Animal feed binder'],
    grades: ['Sodium bentonite', 'Calcium bentonite'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'ball-clay-powder',
    name: 'Ball Clay Powder',
    category: 'minerals',
    image: '/images/products/ball-clay-powder.webp',
    formula: '',
    description:
      'A highly plastic secondary clay with excellent binding strength and fine particle size, widely used in ceramics and sanitaryware manufacturing.',
    applications: ['Ceramics & tiles', 'Sanitaryware', 'Refractories', 'Floor & wall tiles', 'Tableware'],
    grades: ['Standard grade', 'Fine grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'bauxite',
    name: 'Bauxite',
    category: 'minerals',
    image: '/images/products/bauxite.webp',
    formula: 'Al₂O₃·nH₂O',
    description:
      'The primary ore of aluminium, also used in refractory and abrasive applications for its high alumina content and thermal stability.',
    applications: ['Aluminium production', 'Refractories', 'Abrasives', 'Cement manufacturing', 'Chemical alumina'],
    grades: ['Metallurgical grade', 'Refractory grade', 'Chemical grade'],
    packaging: ['Jumbo bags', 'Bulk'],
  },
  {
    id: 'china-clay',
    name: 'China Clay',
    category: 'minerals',
    image: '/images/products/china-clay.webp',
    formula: 'Al₂Si₂O₅(OH)₄',
    description:
      'A premium white kaolin clay with high brightness and low grit content, widely used in paper, paints, ceramics, and rubber as a filler and coating pigment.',
    applications: ['Paper coating & filling', 'Paints & coatings', 'Ceramics & porcelain', 'Rubber & plastics', 'Pharmaceuticals'],
    grades: ['Coating grade', 'Filler grade', 'Ceramic grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },

  // ─── CHEMICALS ───────────────────────────────────────────────
  {
    id: 'dow-chemicals',
    name: 'Dow Chemicals',
    category: 'chemicals',
    image: '/images/products/dowchems.webp.png',
    formula: '',
    description:
      'A curated range of specialty chemicals from Dow — a global leader in materials science — including performance additives, solvents, and functional polymers for industrial use.',
    applications: ['Paints & coatings', 'Construction chemicals', 'Personal care', 'Industrial cleaning', 'Plastics & rubber'],
    grades: ['Various grades available on request'],
    packaging: ['As per Dow standard packaging'],
  },
  {
    id: 'byk-products',
    name: 'BYK Products',
    category: 'chemicals',
    image: '/images/products/BYK Products.webp.png',
    formula: '',
    description:
      'High-performance additives from BYK, a leading specialty chemicals supplier, including wetting agents, dispersants, defoamers, and rheology modifiers.',
    applications: ['Paints & coatings', 'Printing inks', 'Adhesives & sealants', 'Plastics', 'Composites'],
    grades: ['Various grades available on request'],
    packaging: ['As per BYK standard packaging'],
  },
  {
    id: 'everlight-chemicals',
    name: 'Everlight Chemicals',
    category: 'chemicals',
    image: '/images/products/everlight Chems.webp.png',
    formula: '',
    description:
      'Premium specialty chemicals from Everlight, covering dyestuffs, optical brighteners, and performance chemicals for textile, paper, and industrial applications.',
    applications: ['Textile dyeing & finishing', 'Paper & pulp', 'Leather processing', 'Detergents', 'Industrial coatings'],
    grades: ['Various grades available on request'],
    packaging: ['As per Everlight standard packaging'],
  },
];

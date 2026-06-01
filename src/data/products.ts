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
    id: 'roasted-bentonite',
    name: 'Roasted Bentonite',
    category: 'minerals',
    image: '/images/products/roasted-bentonite.webp',
    formula: '',
    description:
      'Thermally activated bentonite with enhanced surface area and adsorption capacity, used primarily for bleaching and decolorizing edible oils and fats.',
    applications: ['Edible oil bleaching & refining', 'Wax bleaching', 'Pharmaceutical purification', 'Industrial adsorption'],
    grades: ['Oil bleaching grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'mica',
    name: 'Mica',
    category: 'minerals',
    image: '/images/products/mica.webp',
    formula: 'KAl₂(AlSi₃)O₁₀(OH)₂',
    description:
      'A layered silicate mineral with a unique platelet structure providing excellent barrier properties, heat resistance, and pearlescent visual effects.',
    applications: ['Paints & coatings (barrier effect)', 'Cosmetics & pearlescent pigments', 'Plastics & rubber', 'Electrical insulation', 'Construction'],
    grades: ['Wet ground', 'Dry ground', 'Surface treated'],
    packaging: ['25 kg bags', 'Jumbo bags'],
  },
  {
    id: 'perlite',
    name: 'Perlite',
    category: 'minerals',
    image: '/images/products/perlite.webp',
    formula: '',
    description:
      'Expanded volcanic glass with a highly porous, lightweight structure offering excellent filtration performance, thermal insulation, and horticultural utility.',
    applications: ['Filtration (beer, wine, pharmaceuticals)', 'Horticulture & hydroponics', 'Construction insulation', 'Cryogenic insulation'],
    grades: ['Filter grade', 'Horticultural grade', 'Construction grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'bleaching-clay',
    name: 'Bleaching Clay',
    category: 'minerals',
    image: '/images/products/bleaching-clay.webp',
    formula: '',
    description:
      'Acid-activated clay with high surface activity and adsorption capacity, formulated specifically for removing color, odor, and impurities from edible and mineral oils.',
    applications: ['Vegetable oil refining', 'Palm oil bleaching', 'Mineral oil purification', 'Wax decolorization'],
    grades: ['Standard activity', 'High activity'],
    packaging: ['25 kg bags', '50 kg bags'],
  },

  // ─── CHEMICALS ───────────────────────────────────────────────
  {
    id: 'aluminium-sulphate',
    name: 'Aluminium Sulphate',
    category: 'chemicals',
    image: '/images/products/aluminium-sulphate.webp',
    formula: 'Al₂(SO₄)₃',
    description:
      'An effective coagulating agent used in water treatment, paper sizing, and textile dyeing for its ability to precipitate and remove suspended matter.',
    applications: ['Water & wastewater treatment', 'Paper & pulp (sizing agent)', 'Textile dyeing', 'Food processing (firming agent)', 'Soil acidification'],
    grades: ['Water treatment grade', 'Paper grade'],
    packaging: ['25 kg bags', '50 kg bags', 'Jumbo bags'],
  },
  {
    id: 'ammonium-bicarbonate',
    name: 'Ammonium Bicarbonate',
    category: 'chemicals',
    image: '/images/products/ammonium-bicarbonate.webp',
    formula: 'NH₄HCO₃',
    description:
      'A mild leavening agent and ammonia source used in baked goods, chemical synthesis, fertilizer formulations, and ceramic industry processes.',
    applications: ['Baking & confectionery (leavening)', 'Chemical synthesis', 'Fertilizer formulations', 'Fire extinguishing powder', 'Ceramic industry'],
    grades: ['Food grade', 'Technical grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'citric-acid',
    name: 'Citric Acid',
    category: 'chemicals',
    image: '/images/products/citric-acid.webp',
    formula: 'C₆H₈O₇',
    description:
      'A naturally derived tricarboxylic acid used as a flavor enhancer, preservative, and acidulant across food, beverage, pharmaceutical, and cosmetic applications.',
    applications: ['Food & beverages (acidulant, flavoring)', 'Pharmaceuticals & nutraceuticals', 'Cosmetics & personal care', 'Metal cleaning', 'Detergents'],
    grades: ['Food/pharmaceutical grade', 'Technical grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'dicalcium-phosphate',
    name: 'Dicalcium Phosphate',
    category: 'chemicals',
    image: '/images/products/dicalcium-phosphate.webp',
    formula: 'CaHPO₄',
    description:
      'A calcium and phosphorus source used in animal nutrition, dietary supplements, and as a tablet excipient in pharmaceutical manufacturing.',
    applications: ['Animal feed supplement', 'Pharmaceutical tablet excipient', 'Toothpaste (abrasive)', 'Dental care products'],
    grades: ['Feed grade', 'Pharmaceutical grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'edta',
    name: 'EDTA',
    category: 'chemicals',
    image: '/images/products/edta.webp',
    formula: 'C₁₀H₁₆N₂O₈',
    description:
      'A versatile chelating agent that binds metal ions, used across industrial cleaning, water treatment, food preservation, and pharmaceutical applications.',
    applications: ['Water treatment (metal sequestration)', 'Industrial cleaning', 'Food preservation', 'Pharmaceuticals', 'Textile & dyeing'],
    grades: ['Technical grade', 'Food grade', 'Pharmaceutical grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'hedp',
    name: 'HEDP',
    category: 'chemicals',
    image: '/images/products/hedp.webp',
    formula: 'C₂H₈O₇P₂',
    description:
      'A high-performance scale and corrosion inhibitor for industrial water systems, offering excellent stability over a wide range of temperatures and pH values.',
    applications: ['Cooling water treatment', 'Boiler water treatment', 'Oil field scale inhibition', 'Industrial cleaning', 'Metal surface treatment'],
    grades: ['60% solution', '90% solid'],
    packaging: ['25 kg bags', '200 kg drums', 'IBC tanks'],
  },
  {
    id: 'hpmc',
    name: 'HPMC',
    category: 'chemicals',
    image: '/images/products/hpmc.webp',
    formula: '',
    description:
      'A multifunctional cellulose ether providing thickening, film-forming, and binding properties used in construction chemicals, pharmaceuticals, and food.',
    applications: ['Construction (tile adhesives, mortars, renders)', 'Pharmaceutical (tablet binder, film coating)', 'Paints & coatings', 'Food (thickener, emulsifier)', 'Personal care'],
    grades: ['Construction grade', 'Pharmaceutical grade', 'Food grade'],
    packaging: ['25 kg bags'],
  },
  {
    id: 'magnesium-sulphate-heptahydrate',
    name: 'Magnesium Sulphate Heptahydrate',
    category: 'chemicals',
    image: '/images/products/magnesium-sulphate-heptahydrate.webp',
    formula: 'MgSO₄·7H₂O',
    description:
      'A water-soluble magnesium and sulfur source used in agriculture as a nutrient supplement, in pharmaceuticals as a therapeutic agent, and across various industrial processes.',
    applications: ['Agriculture (magnesium fertilizer)', 'Pharmaceuticals (laxative, anticonvulsant)', 'Personal care (bath salts)', 'Food processing', 'Textile dyeing'],
    grades: ['Agricultural grade', 'Pharmaceutical grade', 'Food grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'metallic-stearates',
    name: 'Metallic Stearates',
    category: 'chemicals',
    image: '/images/products/metallic-stearates.webp',
    formula: '',
    description:
      'Metal salts of stearic acid used as lubricants, release agents, stabilizers, and processing aids across plastics, rubber, cosmetics, and construction materials.',
    applications: ['Plastics (lubricant, release agent)', 'Rubber processing', 'PVC stabilization', 'Cosmetics', 'Construction materials'],
    grades: ['Zinc stearate', 'Calcium stearate', 'Magnesium stearate'],
    packaging: ['25 kg bags', 'Jumbo bags'],
  },
  {
    id: 'paraffin-wax',
    name: 'Paraffin Wax',
    category: 'chemicals',
    image: '/images/products/paraffin-wax.webp',
    formula: 'CₙH₂ₙ₊₂',
    description:
      'A refined petroleum-derived wax offering excellent moisture barrier, controlled release, and lubrication properties across diverse industrial and consumer applications.',
    applications: ['Candle manufacturing', 'Packaging & coatings (moisture barrier)', 'Textile finishing', 'Rubber processing', 'Cosmetics'],
    grades: ['Fully refined', 'Semi-refined', 'Slack wax'],
    packaging: ['25 kg cartons/slabs', '50 kg cartons'],
  },
  {
    id: 'petroleum-jelly',
    name: 'Petroleum Jelly',
    category: 'chemicals',
    image: '/images/products/petroleum-jelly.webp',
    formula: '',
    description:
      'A purified semi-solid hydrocarbon mixture prized for its emollient, protective, and moisture-sealing properties in cosmetics, pharmaceuticals, and industrial uses.',
    applications: ['Cosmetics & personal care', 'Pharmaceutical topicals', 'Leather care', 'Electrical insulation', 'Rust prevention'],
    grades: ['Cosmetic/pharmaceutical grade', 'Technical grade'],
    packaging: ['25 kg drums', '180 kg drums'],
  },
  {
    id: 'phosphoric-acid',
    name: 'Phosphoric Acid',
    category: 'chemicals',
    image: '/images/products/phosphoric-acid.webp',
    formula: 'H₃PO₄',
    description:
      'A mineral acid serving as a key raw material in fertilizer production, food acidification, metal surface treatment, and a wide range of chemical syntheses.',
    applications: ['Fertilizer manufacture (phosphates)', 'Food & beverage (acidulant)', 'Metal pickling & rust removal', 'Dental etching', 'Detergent formulations'],
    grades: ['Technical grade (75–85%)', 'Food grade (85%)'],
    packaging: ['30 kg carboys', '250 kg drums', 'IBC tanks'],
  },
  {
    id: 'shea-butter',
    name: 'Shea Butter',
    category: 'chemicals',
    image: '/images/products/shea-butter.webp',
    formula: '',
    description:
      'A natural fat extracted from the nuts of the shea tree, rich in fatty acids and vitamins, extensively used in cosmetics and pharmaceuticals for its skin-conditioning properties.',
    applications: ['Cosmetics & skin care (moisturizer, emollient)', 'Hair care', 'Pharmaceutical skin treatments', 'Food (cocoa butter substitute)', 'Soap making'],
    grades: ['Refined (deodorized)', 'Unrefined (raw)'],
    packaging: ['25 kg cartons', '200 kg drums'],
  },
  {
    id: 'sodium-bicarbonate',
    name: 'Sodium Bicarbonate',
    category: 'chemicals',
    image: '/images/products/sodium-bicarbonate.webp',
    formula: 'NaHCO₃',
    description:
      'A mild alkali and leavening agent with applications ranging from baking and food processing to pharmaceutical antacids and industrial cleaning.',
    applications: ['Food & baking (leavening)', 'Pharmaceuticals (antacid)', 'Animal feed', 'Flue gas desulfurization', 'Personal care & cleaning'],
    grades: ['Food/pharmaceutical grade', 'Feed grade', 'Technical grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'sodium-hydrosulphite',
    name: 'Sodium Hydrosulphite',
    category: 'chemicals',
    image: '/images/products/sodium-hydrosulphite.webp',
    formula: 'Na₂S₂O₄',
    description:
      'A powerful reducing and bleaching agent used in textile vat dyeing, paper pulp bleaching, and clay or mineral brightening applications.',
    applications: ['Textile vat dyeing', 'Paper pulp bleaching', 'Clay & kaolin brightening', 'Food bleaching (reducing sugar)'],
    grades: ['Technical grade (85%)', 'Technical grade (88%)'],
    packaging: ['25 kg drums (hermetically sealed)', '50 kg drums'],
  },
  {
    id: 'sodium-metabisulphite',
    name: 'Sodium Metabisulphite',
    category: 'chemicals',
    image: '/images/products/sodium-metabisulphite.webp',
    formula: 'Na₂S₂O₅',
    description:
      'An effective antioxidant, preservative, and reducing agent used across food preservation, water treatment, photography, and textile applications.',
    applications: ['Food preservation & antioxidant', 'Water dechlorination', 'Textile (anti-chlor)', 'Photography', 'Mining (cyanide treatment)'],
    grades: ['Food grade', 'Technical grade'],
    packaging: ['25 kg bags', '50 kg bags', '250 kg drums'],
  },
  {
    id: 'sodium-silicate',
    name: 'Sodium Silicate',
    category: 'chemicals',
    image: '/images/products/sodium-silicate.webp',
    formula: 'Na₂SiO₃',
    description:
      'An inorganic adhesive and binder used in foundry sand systems, detergent formulations, paper manufacturing, and construction applications.',
    applications: ['Foundry sand bonding', 'Detergents & soaps', 'Paper & board (sizing)', 'Construction (cement modifier, waterproofing)', 'Water treatment'],
    grades: ['Liquid (various SiO₂:Na₂O ratios)', 'Solid (anhydrous)'],
    packaging: ['30 kg containers', '250 kg drums', 'Bulk tanker'],
  },
  {
    id: 'tricalcium-phosphate',
    name: 'Tricalcium Phosphate',
    category: 'chemicals',
    image: '/images/products/tricalcium-phosphate.webp',
    formula: 'Ca₃(PO₄)₂',
    description:
      'A calcium and phosphorus source used as a nutritional supplement in animal feeds, a flow agent in food products, and an excipient in pharmaceutical tablets.',
    applications: ['Animal feed supplement', 'Food anti-caking agent', 'Pharmaceutical excipient', 'Dental care', 'Fertilizer component'],
    grades: ['Feed grade', 'Food grade', 'Pharmaceutical grade'],
    packaging: ['25 kg bags', '50 kg bags'],
  },
  {
    id: 'xanthan-gum',
    name: 'Xanthan Gum',
    category: 'chemicals',
    image: '/images/products/xanthan-gum.webp',
    formula: '',
    description:
      'A microbially produced polysaccharide with exceptional thickening and stabilizing properties used across food, personal care, oilfield, and industrial applications.',
    applications: ['Food & beverages (thickener, stabilizer)', 'Personal care (texture agent)', 'Oilfield drilling (viscosifier)', 'Pharmaceutical suspensions', 'Industrial coatings'],
    grades: ['Food grade (80 mesh)', 'Food grade (200 mesh)', 'Oilfield grade'],
    packaging: ['25 kg bags'],
  },
];

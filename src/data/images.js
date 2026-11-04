/**
 * Photos for the suite pages. The generated images (growcord/images on DigitalOcean Spaces) are the
 * ones the original site already used; the rest are Unsplash photos  the same source the original
 * About and Contact heroes use  each checked to match its product.
 */
const U = (id) => `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`;
const G = (name) => `https://ecomstorage.blr1.digitaloceanspaces.com/growcord/images/${name}.png`;

export const PRODUCT_IMAGES = {
  commerce: G("business-ecommerce"),
  retail: U("1556742049-0cfed4f6a45d"),
  trade: U("1521791136064-7986c2920216"),
  ship: U("1566576721346-d4a3b4eaeb55"),
  wms: U("1586528116311-ad8dd3c8310d"),
  make: U("1581091226825-a6a2a5aee158"),
  books: U("1554224155-6726b3ff858f"),
  finance: U("1450101499163-c8848c66ca85"),
  crm: U("1552581234-26160f608093"),
  comms: U("1577563908411-5077b6dc7624"),
  whatsapp: U("1512941937669-90a1b58e7e9c"),
  reach: U("1460925895917-afdab827c52f"),
  social: U("1611162617213-7d7a39e9b1d7"),
  links: U("1595079676339-1534801ad6cf"),
  insights: U("1551288049-bebda4e38f71"),
  "seo-insights": U("1432888498266-38ffec3eaf0a"),
  people: U("1521737604893-d14cc237f11d"),
  "growcord-id": U("1563986768609-322da13575f3"),
};

export const INDUSTRY_IMAGES = {
  manufacturers: U("1581091226825-a6a2a5aee158"),
  distributors: U("1553413077-190dd305871c"),
  "retail-stores": U("1604719312566-8912e9227c6a"),
};

export const PAGE_IMAGES = {
  products: G("home-hero"),
  pricing: G("home-stats-bg"),
  services: U("1460925895917-afdab827c52f"),
  industries: G("business-companies"),
};

export type ProductMedia = {
  hero: string;
  gallery: string[];
};

const productMedia: Record<string, ProductMedia> = {
  paybring: {
    hero: "/images/products/paybring/01.jpg",
    gallery: [
      "/images/products/paybring/02.jpg",
      "/images/products/paybring/03.jpg",
      "/images/products/paybring/04.jpg",
    ],
  },
  bringupi: {
    hero: "/images/products/bringupi/01.jpg",
    gallery: [
      "/images/products/bringupi/02.jpg",
      "/images/products/bringupi/03.jpg",
      "/images/products/bringupi/04.jpg",
      "/images/products/bringupi/05.jpg",
    ],
  },
  bringqr: {
    hero: "/images/products/bringqr/01.jpg",
    gallery: [
      "/images/products/bringqr/02.jpg",
      "/images/products/bringqr/03.jpg",
      "/images/products/bringqr/04.jpg",
      "/images/products/bringqr/05.jpg",
      "/images/products/bringqr/06.jpg",
    ],
  },
  billbring: {
    hero: "/images/products/billbring/01.jpg",
    gallery: [
      "/images/products/billbring/02.jpg",
      "/images/products/billbring/03.jpg",
      "/images/products/billbring/04.jpg",
      "/images/products/billbring/05.jpg",
    ],
  },
  bringpayout: {
    hero: "/images/products/bringpayout/01.jpg",
    gallery: ["/images/products/bringpayout/02.jpg"],
  },
  bringremit: {
    hero: "/images/products/bringremit/01.jpg",
    gallery: [
      "/images/products/bringremit/02.jpg",
      "/images/products/bringremit/03.jpg",
      "/images/products/bringremit/04.jpg",
      "/images/products/bringremit/05.jpg",
      "/images/products/bringremit/06.jpg",
      "/images/products/bringremit/07.jpg",
    ],
  },
  bringwallet: {
    hero: "/images/products/bringwallet/01.jpg",
    gallery: [
      "/images/products/bringwallet/02.jpg",
      "/images/products/bringwallet/03.jpg",
      "/images/products/bringwallet/04.jpg",
      "/images/products/bringwallet/05.jpg",
    ],
  },
  bringaeps: {
    hero: "/images/products/bringaeps/01.jpg",
    gallery: [
      "/images/products/bringaeps/02.jpg",
      "/images/products/bringaeps/03.jpg",
      "/images/products/bringaeps/04.jpg",
      "/images/products/bringaeps/05.jpg",
      "/images/products/bringaeps/06.jpg",
    ],
  },
  bringcash: {
    hero: "/images/products/bringcash/01.jpg",
    gallery: [
      "/images/products/bringcash/02.jpg",
      "/images/products/bringcash/03.jpg",
      "/images/products/bringcash/04.jpg",
      "/images/products/bringcash/05.jpg",
    ],
  },
  bringpos: {
    hero: "/images/products/bringpos/01.jpg",
    gallery: [
      "/images/products/bringpos/02.jpg",
      "/images/products/bringpos/03.jpg",
      "/images/products/bringpos/04.jpg",
      "/images/products/bringpos/05.jpg",
    ],
  },
  bringtravel: {
    hero: "/images/products/bringtravel/01.jpg",
    gallery: [
      "/images/products/bringtravel/02.jpg",
      "/images/products/bringtravel/03.jpg",
      "/images/products/bringtravel/04.jpg",
    ],
  },
  bringinsure: {
    hero: "/images/products/bringinsure/01.jpg",
    gallery: [
      "/images/products/bringinsure/02.jpg",
      "/images/products/bringinsure/03.jpg",
      "/images/products/bringinsure/04.jpg",
      "/images/products/bringinsure/05.jpg",
    ],
  },
  bringcredit: {
    hero: "/images/products/bringcredit/01.jpg",
    gallery: [
      "/images/products/bringcredit/02.jpg",
      "/images/products/bringcredit/03.jpg",
      "/images/products/bringcredit/04.jpg",
      "/images/products/bringcredit/05.jpg",
      "/images/products/bringcredit/06.jpg",
    ],
  },
};

const fallback: ProductMedia = {
  hero: "/images/home/11.png",
  gallery: [],
};

export function getProductMedia(slug: string): ProductMedia {
  return productMedia[slug] ?? fallback;
}

export function getProductImage(slug: string) {
  return getProductMedia(slug).hero;
}

export function getProductGallery(slug: string) {
  return getProductMedia(slug).gallery;
}

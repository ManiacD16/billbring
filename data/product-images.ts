export const productImages: Record<string, string> = {
  paybring: "/images/home/4.png",
  bringupi: "/images/home/15.png",
  bringqr: "/images/home/10.png",
  billbring: "/images/home/3.png",
  bringpayout: "/images/home/14.png",
  bringremit: "/images/home/13.png",
  bringwallet: "/images/home/12.png",
  bringaeps: "/images/home/9.png",
  bringcash: "/images/home/17.png",
  bringpos: "/images/home/16.png",
  bringtravel: "/images/home/11.png",
  bringinsure: "/images/home/7.png",
  bringcredit: "/images/home/19.png",
};

export function getProductImage(slug: string) {
  return productImages[slug] ?? "/images/home/11.png";
}

export const productImages: Record<string, string> = {
  paybring: "/images/home/4.png",
  "payment-gateway-collection": "/images/home/15.png",
  bringpayout: "/images/home/14.png",
  "vendor-merchant-payout": "/images/home/10.png",
  bringremit: "/images/home/13.png",
  remittance: "/images/home/12.png",
  billbring: "/images/home/3.png",
  "bbps-bill-payment-recharge": "/images/home/8.png",
  bringaeps: "/images/home/10.png",
  aeps: "/images/home/9.png",
  bringdmt: "/images/home/14.png",
  "domestic-money-transfer": "/images/home/13.png",
  bringpos: "/images/home/16.png",
  "pos-mpos": "/images/home/17.png",
  bringwallet: "/images/home/12.png",
  wallet: "/images/home/13.png",
  bringtravel: "/images/home/11.png",
  bringinsure: "/images/home/7.png",
  bringcredit: "/images/home/19.png",
};

export function getProductImage(slug: string) {
  return productImages[slug] ?? "/images/home/11.png";
}

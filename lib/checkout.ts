export type CheckoutItemType = "ticket" | "merch";
export type DeliveryMethod = "pickup" | "delivery";

export type CheckoutItem = {
  type: CheckoutItemType;
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
};

export type OrderRecord = {
  id: string;
  itemId: string;
  itemName: string;
  type: CheckoutItemType;
  customerEmail: string;
  customerName: string;
  phone: string;
  deliveryMethod: DeliveryMethod;
  address?: string;
  createdAt: string;
  status: "Paid" | "Pending" | "Processing";
  amount: number;
  deliveryFee: number;
  paymentReference: string;
};

export const deliveryFee = 2500;

export const ticketTiers = [
  {
    id: "popular",
    type: "ticket" as const,
    name: "Popular",
    category: "Matchday Ticket",
    price: 500,
    description: "General admission seating across the open stands.",
  },
  {
    id: "vip-extension",
    type: "ticket" as const,
    name: "VIP Extension",
    category: "Matchday Ticket",
    price: 2000,
    description: "Covered grandstand seating with prime elevated match perspective.",
  },
  {
    id: "vvip",
    type: "ticket" as const,
    name: "VVIP",
    category: "Matchday Ticket",
    price: 5000,
    description: "State Box prime seating in the central executive tier.",
  },
  {
    id: "season-ticket",
    type: "ticket" as const,
    name: "Season Ticket",
    category: "Season Pass",
    price: 150000,
    description: "Full season pass for all home league matches.",
  },
];

export const storeProducts = [
  {
    id: "home-kit-2627",
    type: "merch" as const,
    name: "2026/27 Official Home Jersey",
    category: "Match Kit",
    price: 25000,
    tag: "Official Matchwear",
    description: "Iconic vibrant yellow shirt with green trim, breathable aerodynamic fabric, and high-definition crest.",
    image: "https://picsum.photos/seed/bendel-home-kit/800/1000",
  },
  {
    id: "away-kit-2627",
    type: "merch" as const,
    name: "2026/27 Official Away Jersey",
    category: "Match Kit",
    price: 25000,
    tag: "Official Matchwear",
    description: "Classic green body with gold accents celebrating the heritage and forests of Edo State.",
    image: "https://picsum.photos/seed/bendel-away-kit/800/1000",
  },
  {
    id: "third-kit-2627",
    type: "merch" as const,
    name: "2026/27 Neutral Third Jersey",
    category: "Match Kit",
    price: 25000,
    tag: "Special Edition",
    description: "Pristine white jersey with gold detailing and subtle Benin bronze geometric pattern weave.",
    image: "https://picsum.photos/seed/bendel-third-kit/800/1000",
  },
  {
    id: "gk-kit-2627",
    type: "merch" as const,
    name: "2026/27 Goalkeeper Kit",
    category: "Goalkeeper",
    price: 26500,
    tag: "Goalkeeper",
    description: "Vibrant lemon & pink pro goalkeeper jersey with padded forearm protection zones.",
    image: "https://picsum.photos/seed/bendel-gk-kit/800/1000",
  },
  {
    id: "training-jacket",
    type: "merch" as const,
    name: "Benin Arsenal Training Jacket",
    category: "Apparel",
    price: 18000,
    tag: "Training",
    description: "Wind-resistant green zip-up training jacket with moisture-wicking fleece lining.",
    image: "https://picsum.photos/seed/bendel-jacket/800/1000",
  },
  {
    id: "supporter-hoodie",
    type: "merch" as const,
    name: "Benin Arsenal Crest Hoodie",
    category: "Casual",
    price: 16500,
    tag: "Fanwear",
    description: "Heavyweight premium cotton blend hoodie with embroidered 1972 heritage logo.",
    image: "https://picsum.photos/seed/bendel-hoodie/800/1000",
  },
  {
    id: "matchday-scarf",
    type: "merch" as const,
    name: "Official Jacquard Match Scarf",
    category: "Accessories",
    price: 5000,
    tag: "Accessories",
    description: "Double-sided knit scarf featuring 'The Benin Arsenal' and 1972 founded crest.",
    image: "https://picsum.photos/seed/bendel-scarf/800/1000",
  },
  {
    id: "club-cap",
    type: "merch" as const,
    name: "Classic Curved Brim Snapback",
    category: "Headwear",
    price: 4500,
    tag: "Headwear",
    description: "Deep green structured cotton snapback with 3D embroidered gold crest.",
    image: "https://picsum.photos/seed/bendel-cap/800/1000",
  },
];

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateOrderTotal(
  item: CheckoutItem,
  deliveryMethod: DeliveryMethod,
) {
  return item.price + (deliveryMethod === "delivery" ? deliveryFee : 0);
}

export function getCheckoutItem(
  type: string,
  id: string,
  fallbackName: string,
): CheckoutItem | null {
  const source =
    type === "ticket" ? ticketTiers : type === "merch" ? storeProducts : [];

  const found = source.find((item) => item.id === id);

  if (found) {
    return {
      type: found.type,
      id: found.id,
      name: found.name,
      category: found.category,
      price: found.price,
      description: found.description,
      image: "image" in found ? found.image : undefined,
    };
  }

  if (!fallbackName) {
    return null;
  }

  const fallbackPrice =
    type === "ticket"
      ? ticketTiers[0]?.price ?? 0
      : storeProducts[0]?.price ?? 0;

  const fallbackCategory =
    type === "ticket" ? "Matchday Ticket" : "Official Merchandise";

  return {
    type: type === "ticket" ? "ticket" : "merch",
    id: id || `${type}-selection`,
    name: fallbackName,
    category: fallbackCategory,
    price: fallbackPrice,
    description:
      type === "ticket"
        ? "Official Bendel Insurance FC ticket selection."
        : "Official Bendel Insurance FC merchandise selection.",
  };
}

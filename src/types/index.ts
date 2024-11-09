export type Product= {
    id: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    category: string;
    rating: number;
    stock: number;
    brand: string;
    tags: string[];
    isNew: boolean;
    isFeatured: boolean;
}
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



export type News={


    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    author: string;
    tags: string[];
    category: string;
    url: string;
    authorImage: string;

}
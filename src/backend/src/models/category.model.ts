import {Product} from './product.model';

interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    products: Product[];
}
export { Category };
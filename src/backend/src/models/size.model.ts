import { ProductSize } from './product.size.model';

interface Size {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    productSizes: ProductSize[];
}
export { Size };
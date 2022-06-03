import { Product } from './product.model';

interface ProductImage {
    id: string;
    productId: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    product: Product;
}
export { ProductImage };
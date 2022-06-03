import {Product} from './product.model';
import {Size} from './size.model';

interface ProductSize {
    id: string;
    productId: string;
    sizeId: string;
    createdAt: Date;
    updatedAt: Date;
    product: Product;
    size: Size;
}
export { ProductSize };
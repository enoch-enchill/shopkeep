import { Product } from './product.model';
import { Colour } from './colour.model';

interface ProductColour {
    id: string;
    productId: string;
    colourId: string;
    createdAt: Date;
    updatedAt: Date;
    product: Product;
    colour: Colour;
}
export { ProductColour };
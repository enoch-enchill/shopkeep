import { ProductColour } from './product.colour.model';

interface Colour {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    productColours: ProductColour[];
}
export { Colour };
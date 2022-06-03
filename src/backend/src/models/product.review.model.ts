import { Profile } from './profile.model';
import { Product } from './product.model';

interface ProductReview {
    id: string;
    productId: string;
    review: string;
    starRating: number;
    createdAt: Date;
    updatedAt: Date;
    product: Product;
    Profile?: Profile;
    profileId?: string;
}
export { ProductReview };
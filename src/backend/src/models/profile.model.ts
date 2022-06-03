import {Product} from './product.model';
import { ProductReview } from './product.review.model';

interface Profile {
    id: string;
    userId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    birthDate: Date;
    gender: string;
    photoUrl: string;
    createdAt: Date;
    updatedAt: Date;
    productReviews: ProductReview[];
    products: Product[];
}
export {Profile}
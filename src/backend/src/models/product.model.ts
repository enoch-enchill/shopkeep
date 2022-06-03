import {Category} from './category.model';
import {Profile} from './profile.model';
import {ProductImage} from './product.image.model';
import {ProductReview} from './product.review.model';
import {ProductColour} from './product.colour.model';
import {ProductSize} from './product.size.model';

interface Product {
    id:             string;
    categoryId  :   string;
    profileId    :  string ;
    name      :     string;
    code       :    string;
    sku         :   string;
    description  :  string ;
    releaseDate  :  Date;
    price     :     number;
    starRating  :   number;
    imageUrl   :    string;
    videoUrl     :  string;
    createdAt    :  Date;
    updatedAt   :   Date;
    category  :     Category;
    profile     :   Profile;
    productImages : ProductImage[];
    productSizes  : ProductSize[];
    productColours :ProductColour[];
    productReviews :ProductReview[];
  }
  export { Product };
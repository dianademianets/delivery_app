import {ICartProduct} from "../../entity/cartProduct";

export interface ICartProductsRepository {
    findProductIndex(productId: number): Promise<ICartProduct | undefined>
}

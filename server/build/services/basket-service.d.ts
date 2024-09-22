import sequelize from "sequelize";
import { BasketType } from "../types/type";
declare class BasketService {
    getBasket(id_user: number): Promise<(sequelize.Model<any, any> & BasketType)[]>;
    addToBasket({ id_equipment, id_user, count }: BasketType): Promise<sequelize.Model<any, any> & BasketType>;
    removeFromBasket({ id_equipment, id_user }: BasketType): Promise<number>;
    decreaseItemCount({ id_equipment, id_user }: BasketType): Promise<void | (sequelize.Model<any, any> & BasketType)>;
    clearBasket(id_user: number): Promise<number>;
}
declare const _default: BasketService;
export default _default;

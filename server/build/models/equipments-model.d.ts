import { Model } from "sequelize";
import { EquipmentType } from "../types/type";
declare const EquipmentsModel: import("sequelize").ModelCtor<Model<any, any> & EquipmentType>;
export default EquipmentsModel;

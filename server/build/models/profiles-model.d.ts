import { Model } from "sequelize";
import { ProfilesType } from "../types/type";
declare const ProfilesModel: import("sequelize").ModelCtor<Model<any, any> & ProfilesType>;
export default ProfilesModel;

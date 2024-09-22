import { UploadedFile } from "express-fileupload";
type QueryParams = {
    category?: string;
    price?: string;
    brand?: string;
    page?: number;
    limit?: number;
};
type Equipment = {
    type_equip: string;
    price: number;
    short_info: string;
    main_info: string;
    description: string;
};
declare class CatalogService {
    getAllEquipments(query: QueryParams): Promise<{
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        maxPrice: unknown;
        minPrice: unknown;
        data: (import("sequelize").Model<any, any> & import("../types/type").EquipmentType)[];
    }>;
    getBrandsByCategory(category: string): Promise<any[]>;
    createItem(equipment: Equipment, pathimg: UploadedFile): Promise<import("sequelize").Model<any, any> & import("../types/type").EquipmentType>;
}
declare const _default: CatalogService;
export default _default;

import { UploadedFile } from "express-fileupload";
declare class FileService {
    saveFile(file: UploadedFile): Promise<string | undefined>;
}
declare const _default: FileService;
export default _default;

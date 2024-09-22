import { ProfilesDto } from "../dtos/profile-dto";
import { ProfilesType } from "../types/type";
declare class ProfilesService {
    registration(login: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        profiles: ProfilesDto;
    }>;
    login(login: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        profiles: ProfilesDto;
    }>;
    logout(refreshToken: string): Promise<number>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        profiles: ProfilesDto;
    }>;
    getAllUsers(): Promise<ProfilesType[]>;
}
declare const _default: ProfilesService;
export default _default;

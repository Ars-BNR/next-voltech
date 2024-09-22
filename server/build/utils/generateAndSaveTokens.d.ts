import { ProfilesDto } from "../dtos/profile-dto";
export declare function generateAndSaveTokens(profilesDto: ProfilesDto): Promise<{
    accessToken: string;
    refreshToken: string;
    profiles: ProfilesDto;
}>;

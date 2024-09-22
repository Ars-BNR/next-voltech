export interface profiles {
  accessToken: string;
  profiles: dataProfiles;
  refreshToken: string;
}
export interface dataProfiles {
  login?: string;
  id?: number;
  role?: string;
}

declare class RedisService {
    getCache(name: string): Promise<string | null | undefined>;
    setCache(name: string, response: object | [] | null): Promise<void>;
}
declare const _default: RedisService;
export default _default;

export declare class ApiError extends Error {
    status: number;
    message: string;
    errors?: object[];
    constructor(status: number, message: string, errors?: object[]);
    static UnauthorizedError(): ApiError;
    static BadRequest(message: string, errors?: object[]): ApiError;
}

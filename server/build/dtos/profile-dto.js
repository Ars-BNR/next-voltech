"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesDto = void 0;
class ProfilesDto {
    constructor(model) {
        this.login = model.login;
        this.id = model.id;
        this.role = model.role;
    }
}
exports.ProfilesDto = ProfilesDto;

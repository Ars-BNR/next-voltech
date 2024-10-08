"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basket_controller_1 = __importDefault(require("../controllers/basket-controller"));
const catalog_controller_1 = __importDefault(require("../controllers/catalog-controller"));
const order_controller_1 = __importDefault(require("../controllers/order-controller"));
const personaPageEquip_controller_1 = __importDefault(require("../controllers/personaPageEquip-controller"));
const profiles_controller_1 = __importDefault(require("../controllers/profiles-controller"));
const router = (0, express_1.Router)();
const express_validator_1 = require("express-validator");
const role_middleware_1 = __importDefault(require("../middlewares/role-middleware"));
router.post("/registration", (0, express_validator_1.body)("password").isLength({ min: 3, max: 32 }), profiles_controller_1.default.registration);
router.post("/login", profiles_controller_1.default.login);
router.post("/logout", profiles_controller_1.default.logout);
router.post("/insertbasket", basket_controller_1.default.insertBasket);
router.post("/insertorders", order_controller_1.default.insertOrders);
router.post("/createEquipment", catalog_controller_1.default.createItem);
router.get("/refresh", profiles_controller_1.default.refresh);
router.get("/users", (0, role_middleware_1.default)("admin"), profiles_controller_1.default.getUsers);
router.get("/allitems", catalog_controller_1.default.allitems);
router.get("/brands", catalog_controller_1.default.getBrands);
router.get("/img/:img", catalog_controller_1.default.getImg);
router.get("/selctbasket/:id", basket_controller_1.default.selectBasket);
router.get("/equipment/:id", personaPageEquip_controller_1.default.getEquipmentsById);
router.get("/selectorders/:id", order_controller_1.default.selectOrders);
router.get("/selectAllorders", (0, role_middleware_1.default)("admin"), order_controller_1.default.selectAllOrders);
router.get("/selectinfoorder/:id_order", order_controller_1.default.selectOrderById);
router.patch("/decreaseBasket", basket_controller_1.default.decreaseBasket);
router.patch("/changestatusorder", order_controller_1.default.changeStatusOrder);
router.patch("/usercancel/:id_order", order_controller_1.default.CancelStatusUser);
router.delete("/deleteorder/:id_order", order_controller_1.default.deleteOrder);
router.delete("/deleteBasket", basket_controller_1.default.deleteBasket);
router.delete("/clearbasket/:id_user", basket_controller_1.default.clearBasket);
exports.default = router;

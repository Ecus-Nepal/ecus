"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const verifyUser_1 = require("../utils/verifyUser");
const route = express_1.default();
route.post('/update', verifyUser_1.validateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const x = yield user_1.default.find({});
        console.log(x[0]._id, req.user._id);
        const respond = yield user_1.default.updateOne({
            _id: req.user._id
        }, {
            $set: {
                newAccount: false,
                accountType: data.type,
                wantedCatogries: data.wantedCategories,
                about: data.about
            }
        });
        console.log(respond);
        res.json({ ok: true, message: "done" });
    }
    catch (e) {
        console.log(e);
        res.json({ ok: false, message: "Error!" });
    }
}));
route.get("/userAdditionInfo", verifyUser_1.validateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findById(req.user._id);
    console.log(user);
    if (user) {
        res.json({
            ok: true,
            about: user === null || user === void 0 ? void 0 : user.about,
            wantedCatogries: user === null || user === void 0 ? void 0 : user.wantedCatogries
        });
    }
    else {
        res.json({
            ok: false,
            message: "Error"
        });
    }
}));
exports.default = route;
//# sourceMappingURL=profile.js.map
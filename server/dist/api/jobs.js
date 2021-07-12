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
const jobs_1 = __importDefault(require("../models/jobs"));
const verifyUser_1 = require("../utils/verifyUser");
const route = express_1.default();
route.post("/add", verifyUser_1.validateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        yield new jobs_1.default({
            title: data.title,
            creatorId: req.user._id,
            creatorName: req.user.name,
            desc: data.desc,
            expDate: data.expDate,
            jobsCategories: data.categories,
            salary: data.salary,
            aprovedEmployee: 0,
            pendingEmployee: 0,
            rejectedEmployee: 0
        }).save();
        res.send({
            ok: true,
            message: "done"
        });
    }
    catch (e) {
        console.log(e);
        res.send({
            ok: false,
            message: "Error Saving Job"
        });
    }
}));
exports.default = route;
//# sourceMappingURL=jobs.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport_1 = __importDefault(require("passport"));
const auth_1 = __importDefault(require("./api/auth"));
require("./config/passport");
const app = express_1.default();
const PORT = process.env.port || 5000;
app.use(cors_1.default({
    origin: process.env.CLIENT_END_POINT,
    credentials: true
}));
app.use(cookie_parser_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
if (process.env.DATABASE_URI) {
    mongoose_1.default.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
        if (e) {
            console.log("Problem connecting with Database", e);
        }
        else {
            console.log("Connected with MongoDB");
        }
    });
}
else {
    console.log("ENV for DATABASE not found :(");
}
app.get("/", (_, res) => {
    res.json({
        message: "The server is running",
        death: "NO MORE CORES. JUST WHYYYYYYYYYYY"
    });
});
app.use(passport_1.default.initialize());
app.use("/auth", auth_1.default);
app.listen(PORT, () => {
    console.log("Server at PORT:", PORT);
});
//# sourceMappingURL=server.js.map
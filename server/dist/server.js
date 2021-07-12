"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const PORT = process.env.port || 5000;
app.use(cors_1.default({
    origin: process.env.CLIENT_END_POINT,
    credentials: true
}));
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
    res.send(`Server running at: PORT`);
});
app.listen(PORT, () => {
    console.log("Server at PORT:", PORT);
});
//# sourceMappingURL=server.js.map
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
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth2_1 = require("passport-google-oauth2");
const user_1 = __importDefault(require("../models/user"));
passport_1.default.use(new passport_google_oauth2_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_END_POINT}/auth/google/callback`,
    passReqToCallback: true,
}, (_, __, ___, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    const { displayName, given_name, email, picture } = profile;
    try {
        const user = new user_1.default({
            name: displayName,
            firstName: given_name,
            email,
            profilePic: picture,
            accountType: "",
            about: "",
            applied: [],
            wantedJobs: []
        });
        yield user.save();
        done(null, profile);
    }
    catch (e) {
        if (e.code === 11000) {
            return done(null, profile);
        }
        console.log(e);
    }
})));
//# sourceMappingURL=passport.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
process.env.MONGO_URL;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var food_1 = __importDefault(require("./router/food"));
var user_1 = __importDefault(require("./router/user"));
var order_1 = __importDefault(require("./router/order"));
var db_config_1 = require("./config/db.config");
var path_1 = __importDefault(require("path"));
(0, db_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"],
}));
app.use(express_1.default.json());
app.use("/api/foods", food_1.default);
app.use("/api/users", user_1.default);
app.use("/api/orders", order_1.default);
app.use(express_1.default.static('../dist/my-project'));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../dist/my-project/index.html'));
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Welcome to the http://localhost:" + port);
});

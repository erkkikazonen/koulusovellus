"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const opiskelijaRoutes_1 = __importDefault(require("./routes/opiskelijaRoutes"));
const opettajaRoutes_1 = __importDefault(require("./routes/opettajaRoutes"));
const kurssiRoutes_1 = __importDefault(require("./routes/kurssiRoutes"));
const arviointiRoutes_1 = __importDefault(require("./routes/arviointiRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api/opiskelijat', opiskelijaRoutes_1.default);
app.use('/api/opettajat', opettajaRoutes_1.default);
app.use('/api/kurssit', kurssiRoutes_1.default);
app.use('/api/arvioinnit', arviointiRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;

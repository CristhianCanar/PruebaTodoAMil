"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persons_1 = __importDefault(require("./routes/persons"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware qie transforma la req.body a un json
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone ping here!!');
    res.send('pong');
});
app.use('/api/persons', persons_1.default);
app.listen(PORT, () => {
    console.log(`Server runnign on port ${PORT}`);
});

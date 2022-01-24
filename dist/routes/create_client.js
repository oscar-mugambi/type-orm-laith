"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.createClientRouter = router;
router.post('/api/client', (req, res) => {
    res.send('hello');
});
//# sourceMappingURL=create_client.js.map
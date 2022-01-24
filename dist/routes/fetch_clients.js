"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchClientRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.fetchClientRouter = router;
router.get('/api/bankers', async (req, res) => { });
//# sourceMappingURL=fetch_clients.js.map
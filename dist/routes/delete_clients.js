"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClientRouter = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = require("../entities/Client");
const router = express_1.default.Router();
exports.deleteClientRouter = router;
router.delete('/api/client/:clientId', async (req, res) => {
    const { clientId } = req.params;
    const response = await Client_1.Client.delete(parseInt(clientId));
    return res.json(response);
});
//# sourceMappingURL=delete_clients.js.map
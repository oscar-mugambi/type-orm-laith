"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectBankerToClient = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = require("../entities/Client");
const Banker_1 = require("../entities/Banker");
const router = express_1.default.Router();
exports.connectBankerToClient = router;
router.put('/api/banker/:bankerId/client/:clientId', async (req, res) => {
    const { bankerId, clientId } = req.params;
    const client = await Client_1.Client.findOne(parseInt(clientId));
    const banker = await Banker_1.Banker.findOne(parseInt(bankerId));
    if (!banker && !client) {
        return res.json({
            msg: 'Banker or Client not found',
        });
    }
});
//# sourceMappingURL=connect_banker_to_client.js.map
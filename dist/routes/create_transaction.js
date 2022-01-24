"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionRouter = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = require("../entities/Client");
const Transaction_1 = require("../entities/Transaction");
const router = express_1.default.Router();
exports.createTransactionRouter = router;
router.post('/api/client/:clientId/transaction', async (req, res) => {
    const { clientId } = req.params;
    const { type, amount } = req.body;
    const client = await Client_1.Client.findOne(parseInt(clientId));
    if (!client) {
        return res.json({
            msg: 'client not found',
        });
    }
    const transaction = Transaction_1.Transaction.create({
        amount,
        type,
        client,
    });
    await transaction.save();
    if (type === Transaction_1.TransactionTypes.DEPOSIT) {
        client.balance = client.balance + amount;
    }
    else if (type === Transaction_1.TransactionTypes.WITHDRAWAL) {
        client.balance = client.balance - amount;
    }
    await client.save();
    return res.json({
        mag: 'added transaction',
    });
});
//# sourceMappingURL=create_transaction.js.map
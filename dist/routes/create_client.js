"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientRouter = void 0;
const express_1 = __importDefault(require("express"));
const Client_1 = require("../entities/Client");
const router = express_1.default.Router();
exports.createClientRouter = router;
router.post('/api/client', async (req, res) => {
    const { firstName, lastName, email, cardNumber, balance } = req.body;
    const client = Client_1.Client.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        balance,
    });
    await client.save();
    return res.json(client);
});
//# sourceMappingURL=create_client.js.map
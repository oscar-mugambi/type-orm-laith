"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBankerRouter = void 0;
const express_1 = __importDefault(require("express"));
const Banker_1 = require("../entities/Banker");
const router = express_1.default.Router();
exports.createBankerRouter = router;
router.post('/api/banker', async (req, res) => {
    const { firstName, lastName, email, cardNumber, employeeNumber } = req.body;
    const banker = Banker_1.Banker.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        employee_number: employeeNumber,
    });
    await banker.save();
    return res.json(banker);
});
//# sourceMappingURL=create_banker.js.map
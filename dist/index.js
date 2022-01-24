"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Banker_1 = require("./entities/Banker");
const Client_1 = require("./entities/Client");
const Transaction_1 = require("./entities/Transaction");
const create_client_1 = require("./routes/create_client");
const create_banker_1 = require("./routes/create_banker");
const app = (0, express_1.default)();
const main = async () => {
    try {
        await (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'oscar',
            password: 'password',
            database: 'oscar',
            entities: [Client_1.Client, Banker_1.Banker, Transaction_1.Transaction],
            synchronize: true,
        });
        console.log('connected to postgres');
        app.use(express_1.default.json());
        app.use(create_client_1.createClientRouter);
        app.use(create_banker_1.createBankerRouter);
        app.listen(5000, () => {
            console.log('connected on port 5000');
        });
    }
    catch (error) {
        console.log('unable to connect to postgres');
        throw new Error(error);
    }
};
main().catch((error) => console.log(error));
//# sourceMappingURL=index.js.map
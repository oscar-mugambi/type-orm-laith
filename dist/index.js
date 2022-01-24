"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Banker_1 = require("./entities/Banker");
const Client_1 = require("./entities/Client");
const Transaction_1 = require("./entities/Transaction");
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
    }
    catch (error) {
        console.log('unable to connect to postgres');
        throw new Error(error);
    }
};
main().catch((error) => console.log(error));
//# sourceMappingURL=index.js.map
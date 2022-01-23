"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Client_1 = require("./entities/Client");
const main = async () => {
    try {
        await (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'oscar',
            password: 'password',
            database: 'oscar',
            entities: [Client_1.Client],
            synchronize: true,
        });
        console.log('connected to postgres');
    }
    catch (error) {
        console.log('unable to connect to postgres');
        throw new Error(error);
    }
};
main();
//# sourceMappingURL=index.js.map
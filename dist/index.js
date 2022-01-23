"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const main = async () => {
    try {
        await (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'oscar',
            password: 'password',
            database: 'oscar',
        });
        console.log('connected to postgres');
    }
    catch (error) {
        console.log('unable to connect to postgres');
    }
};
main();
//# sourceMappingURL=index.js.map
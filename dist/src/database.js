"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const config = {
    server: 'EKI',
    database: 'Koulu',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
    authentication: {
        type: 'ntlm', // NTLM is used for Windows Authentication
        options: {
            domain: 'EKI', // Ensure the correct domain is provided
            userName: 'EKI\erkki', // Windows username
            password: '', // Leave empty for Integrated Authentication
        }
    }
};
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create a connection pool
            const pool = yield mssql_1.default.connect(config);
            console.log('Connected to the SQL Server successfully!');
            // Example query
            const result = yield pool.request().query('SELECT * FROM YourTable');
            console.log(result);
            // Close the pool connection
            yield pool.close();
        }
        catch (err) {
            console.error('Error connecting to the database:', err);
        }
    });
}
connectToDatabase();

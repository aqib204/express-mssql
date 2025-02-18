require('dotenv').config({ path: '.env.development' });

const { DataSource } = require("typeorm");
const { AdmUsers } = require("./entities/admUserEntity");

const AppDataSource = new DataSource({
    type: "mssql",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    synchronize: false,
    entities: [AdmUsers],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});

AppDataSource.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log("Error connecting to database", error));

module.exports = { AppDataSource };

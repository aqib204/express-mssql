const { DataSource } = require("typeorm");
const { AdmUsers } = require("./entities/admUserEntity");

const AppDataSource = new DataSource({
    type: "mssql",
    username: "dbadmin",
    password: "d&5atsUWQg#M$L",
    host: "hierd-infobridge-dev.c2l7libqnlvn.us-east-1.rds.amazonaws.com", // Ensure correct SQL instance name
    port: 1433,
    database: "FHWA_INFOARCHIVE",
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

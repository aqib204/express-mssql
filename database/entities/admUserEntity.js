// admUsers.ts
const { EntitySchema } = require("typeorm");

const AdmUsers = new EntitySchema({
    name: "AdmUsers",
    tableName: "ADM_USER",
    columns: {
        USER_ID: {
            primary: true,
            type: "bigint",
            generated: true
        },
        EMAIL_ADDRESS: {
            type: "varchar",
            length: 255
        },
        FIRST_NAME: {
            type: "varchar",
            length: 255
        },
        LAST_NAME: {
            type: "varchar",
            length: 255
        },
        ROLE_TYPE: {
            type: "varchar",
            length: 50
        },
        PHONE_NUMBER: {
            type: "varchar",
            length: 50
        },
        IS_ACTIVE: {
            type: "bit"
        },
        COGNITO_GUID: {
            type: "uniqueidentifier"
        },
        DATE_ADDED: {
            type: "datetime"
        },
        DATE_UPDATED: {
            type: "datetime"
        }
    }
});

module.exports = { AdmUsers };

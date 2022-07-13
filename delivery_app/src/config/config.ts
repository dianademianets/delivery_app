import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 5200,

    POSTGRESQL_DB_NAME: process.env.POSTGRESSQL_DB_NAME,
};

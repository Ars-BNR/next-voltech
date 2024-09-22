import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: String(process.env.POSTGRES_PASSWORD),
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  logging: false,
});
export default sequelize;

// import { Sequelize } from "sequelize";

// const POSTGRES_URL = process.env.POSTGRES_URL || "default_value_here";

// const sequelize = new Sequelize(POSTGRES_URL, {
//   dialect: "postgres",
//   define: {
//     timestamps: false,
//   },
//   logging: false,
// });

// export default sequelize;

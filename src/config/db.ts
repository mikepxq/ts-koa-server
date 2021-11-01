import { Sequelize } from "sequelize";

// 方法 2: 分别传递参数 (其它数据库)
const sequelize = new Sequelize("demo_koa", "root", "root", {
  host: "localhost",
  dialect: "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
export const DB = sequelize;
export default sequelize;

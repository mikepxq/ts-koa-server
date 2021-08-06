import { DB } from "@/config/db";
import { DataTypes } from "sequelize";

export default DB.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(50),
    },
    department_id: {
      type: DataTypes.INTEGER,
    },
    // createdAt: {
    //   type: DataTypes.BIGINT,
    // },
    // updatedAt: {
    //   type: DataTypes.BIGINT,
    // },
  },
  {
    // updatedAt: "",
    tableName: "users",
    // updatedAt:'updatedTime'
  }
);

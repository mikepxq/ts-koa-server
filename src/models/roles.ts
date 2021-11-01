import { DB } from "@/config/db";
import { DataTypes } from "sequelize";

export default DB.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    role_name: {
      type: DataTypes.STRING(50),
    },
    remark: {
      type: DataTypes.STRING(50),
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
    tableName: "roles",
    createdAt: "create_time",
    updatedAt: "update_time",
  }
);

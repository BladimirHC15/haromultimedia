import conx from "../database/db.js";
import { DataTypes} from "sequelize";

const loginModel = conx.define('users', {
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
});

export default loginModel;
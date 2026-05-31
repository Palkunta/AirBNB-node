import { Sequelize } from "sequelize";
import {dbconfig} from '../../config/index';

const  sequelize = new Sequelize({
    dialect : "mysql",
    host : dbconfig.DB_HOST,
    username : dbconfig.DB_USER,
    password : dbconfig.DB_PASSWORD,
    database : dbconfig.DB_NAME,
    logging : true,
})


export default sequelize;
import { Sequelize } from 'sequelize';

const conx = new Sequelize('haro_multimedia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default conx;
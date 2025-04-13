import { Sequelize } from 'sequelize';
 export const sequelize = new Sequelize('freedb_umsdatabase', 'freedb_ROOT2', 'freedb_umsdatabase', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
  export const connectDB = ()=>{
    //{force:true}
    sequelize.sync().then(()=>{
        console.log("connection established");
    }).catch((error)=>{
        console.log("error to connect to database"+error);
    });
  } 
import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";



const UserModel=sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
username:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false,
},
email:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false,
},
password:{
    type:DataTypes.STRING,
    allowNull:false
},
confirmEmail:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
},
profilepic:{
    type:DataTypes.STRING,
    allowNull:true,
},
role:{
    type:DataTypes.ENUM('user','admin'),
    defaultValue:'user',
    allowNull:false, 
},
});

export default UserModel;
import User from "../model/user";
import { OkPacket } from "mysql";
import dal from "../utils/dal_mysql";

// USER
// CREATE
async function addUser(user: User): Promise<User> {
  const sql = `
   
    INSERT INTO project3.users VALUES (DEFAULT, '${user.id}','${user.user_name}', '${user.email}', '${user.password}');
    `;
  const result: OkPacket = await dal.execute(sql);
  user.id = result.insertId;
  return user;
}

// READ
async function getAllUsers(): Promise<User[]> {
    const sql = "SELECT * FROM project3.users;";
    const users = await dal.execute(sql);
    return users;
  }
  
  async function getOneUser(id: number): Promise<User> {
    const sql = `SELECT * FROM project3.users WHERE id=${id};`;
    const user = await dal.execute(sql);
    return user;
  }
  
  
  
  
  export default {
    addUser,
    getAllUsers,
    getOneUser
  };
  
  
import mysql from 'mysql2';

let cached = global.mysql
if(!cached){
  cached = global.mysql = { promise: null }
}

export default async function getDB(){
  if(!cached.promise){
    cached.promise = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
    }).promise()
  }

  return await cached.promise
}
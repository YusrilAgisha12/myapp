const db= require('../database/db');

const store = (body,callback) => {
  db.query({
    sql: 'INSERT INTO inventory SET?',
    timeout: 4000,
    values:{...body},
  },(err,result)=>{
    return callback(err, result);

  });
}
const list = (body,callback) => {
  db.query({
    sql: 'SELECT * from inventory',
    timeout: 4000,
    values:{...body},
  },(err,result)=>{
    return callback(err, result);

  });
}
const deleteList = (body,callback) => {
  db.query({
    sql: 'DELETE from inventory WHERE `id`=?',
    timeout: 4000,
    values:[body.id],
  },(err,result)=>{
    return callback(err, result);

  });
}
module.exports = {
  store,list,deleteList
}

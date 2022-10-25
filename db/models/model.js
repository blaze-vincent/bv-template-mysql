import getDB from '../db'

export default class Model {
  constructor(table, cols){
    this.table = table;
    this.cols = cols;
  }
    
  async save(values) {
    const sql = `
      INSERT INTO ${this.table}(${this.cols.join(', ')})
      VALUES(${values.map(val => '?').join(', ')})
    `

    const [row, _] = await getDB().then(db => db.execute(sql, values));

    return row;
  } 

  static async findOne() {

  }

  static async findAll() { 

  }
}
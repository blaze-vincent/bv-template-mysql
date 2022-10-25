import Model from "./model";

export default class Account extends Model {
  constructor(values){
    super('accounts', ['username', 'hash'])
    this.save(values)
  }
}
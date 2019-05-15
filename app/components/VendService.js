
import VendMachine from "../models/vend.js";


//private

let _vend = new VendMachine();


//public
export default class VendService {
  get Change() {
    return _vend.currentTransaction
  }

  get moneyBack() {
    return _vend.moneyBack
  }

  getRandomItem() {
    let item
    if (_vend.currentTransaction >= 1) {
      let random = Math.floor(Math.random() * _vend.items.length)
      item = _vend.items.splice(random, 1)[0]
    }
    if (_vend.currentTransaction > 1) {
      _vend.moneyBack = _vend.currentTransaction - 1
    }
    return item
  }

  addChange() {
    _vend.currentTransaction += .25
  }
}
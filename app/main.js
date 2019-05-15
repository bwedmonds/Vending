import VendController from "./components/VendController.js";



//private




//public
class App {
  constructor() {
    this.controllers = {
      vendController: new VendController()
    }
  }
}

window['app'] = new App();
import VendService from "./VendService.js";



//private

let _vendService = new VendService

function drawChange() {
  document.getElementById('total').innerText = _vendService.Change
}


//public

export default class VendController {
  constructor() {

  }

  addChange() {
    _vendService.addChange()
    drawChange()
  }

  rollTheDice() {
    let message = 'You got ' + _vendService.getRandomItem() + " and \$" + _vendService.moneyBack + " change.";
    $('#alertModal').find('.modal-body p').text(message);
    $('#alertModal').modal('show');
  }


  // check to turn on button. if >= 1 turn onabort.if not leave disabled
}

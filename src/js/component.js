import Lib from './lib';
export default class {
  constructor(dom) {
    document.querySelector(dom).innerHTML = `
      <input id="inputNumber" type="number"/>
      <div id="result"></div>
    `;
    this.lib = new Lib();
    document.querySelector('#inputNumber').addEventListener('change', e => {
      this.onInputNumberChange(e);
    })
  }
  onInputNumberChange(e) {
    console.log(e);
    const value = document.querySelector('#inputNumber').value;
    console.log(value);
    document.querySelector('#result').innerHTML=this.lib.cube(value);
  }
}

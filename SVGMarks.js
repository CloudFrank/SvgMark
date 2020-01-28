export default class SVGMarks extends HTMLDivElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.render();
  }
  
  render() {
    this.shadowRoot.innerHTML = this.template();
  }
  
  template() {
    return `
      ${this.mark()}
      ${this.style()}
    `;
  }
  
  mark() {
    return ``;
  }
  
  style() {
    return `
      <style>
        :host {
          display: inline-grid;
          grid-template: auto / auto;
          align-items: center;
          justify-items: center;
          width: max-content!important;
          height: max-content!important;
        }
        ${this.divStyle()}

      </style>
    `;
  }
  
  divStyle() {
    return ``;
  }
};

//customElements.define('svg-marks', SVGMarks, { extends: "div"});

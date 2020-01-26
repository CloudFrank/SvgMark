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
          display: grid;
          grid-template: auto / auto;
          align-items: center;
          justify-items: center;
        }
        div {
          width: inherit;
          height: inherit;
          min-width: max-content;
          min-height: max-content;
          max-width: 100%;
          max-height: 100%;
        }

      </style>
    `;
  }
};

//customElements.define('svg-marks', SVGMarks, { extends: "div"});

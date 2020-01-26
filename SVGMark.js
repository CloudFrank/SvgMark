export default class SVGMark extends HTMLDivElement {
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
      <slot></slot>
      ${this.style()}
    `;
  }
  
  style() {
    return `
      <style>
        :host {
          display: grid;
          grid-template: auto / auto;
          align-items: center;
          justify-items: center;
          position: relative;
        }
        ::slotted(svg) {
          display: block;
          width: 100%;
          height: 100%;
          fill: #f9f9f9;
          position: absolute;
        }

      </style>
    `;
  }
};

//customElements.define('svg-mark', SVGMark, { extends: "div"});

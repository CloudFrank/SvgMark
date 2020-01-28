import SVGMarks from 'https://cloudfrank.github.io/SvgMark/SVGMarks.js';
 
export default class CloudFrankLogomark extends SVGMarks {
  constructor() {
    super();
  }
  
  mark() {
    return `
      <div is='svg-mark'>
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 312.23976">
          <path d="M 163.07429,-1.6235018e-5 C 112.94941,-1.6235018e-5 73.238365,14.043363 43.942845,42.129447 14.647325,70.081167 -1.3784356e-5,108.11096 -1.3784356e-5,156.22014 c 0,47.97477 14.647338784356,86.00627 43.942858784356,114.09234 29.29552,27.95168 69.006565,41.92725 119.131445,41.92725 16.79788,0 32.92295,-1.8814 48.37695,-5.64412 15.45409,-3.76271 30.30328,-9.33903 44.54792,-16.73012 14.24464,7.39109 29.09383,12.96741 44.54792,16.73012 15.45401,3.76272 31.58075,5.64412 48.37855,5.64412 50.12497,0 89.83431,-13.97557 119.12983,-41.92725 29.29557,-28.08607 43.94452,-66.11757 43.94452,-114.09234 0,-48.10918 -14.64895,-86.138973 -43.94452,-114.090693 C 438.75994,14.043363 399.0506,-1.6235018e-5 348.92563,-1.6235018e-5 332.12783,-1.6235018e-5 316.00109,1.8813175 300.54708,5.6440987 285.09299,9.4068176 270.2438,14.984838 255.99916,22.375867 241.75452,14.984838 226.90533,9.4068176 211.45124,5.6440987 195.99724,1.8813175 179.87217,-1.6235018e-5 163.07429,-1.6235018e-5 Z M 169.3218,56.238913 c 15.45409,0 30.16928,2.285123 44.14514,6.854155 13.97586,4.569034 28.15324,11.758689 42.53222,21.568641 14.37899,-9.809952 28.55637,-16.999607 42.53223,-21.568641 13.97594,-4.569032 28.69104,-6.854155 44.14513,-6.854155 27.6829,0 49.4537,8.870791 65.31095,26.60938 15.85722,17.738567 23.78486,42.194937 23.78486,73.371847 0,31.04249 -7.92764,55.43433 -23.78486,73.17293 -15.85725,17.73858 -37.62805,26.60773 -65.31095,26.60773 -15.45409,0 -30.16919,-2.28512 -44.14513,-6.85416 -13.97586,-4.56903 -28.15324,-11.75869 -42.53223,-21.56863 -14.37898,9.80994 -28.55636,16.9996 -42.53222,21.56863 -13.97586,4.56904 -28.69105,6.85416 -44.14514,6.85416 -27.68286,0 -49.45206,-8.86915 -65.30927,-26.60773 -15.857208,-17.7386 -23.786487,-42.13044 -23.786487,-73.17293 0,-31.17691 7.929279,-55.63328 23.786487,-73.371847 15.85721,-17.738589 37.62641,-26.60938 65.30927,-26.60938 z m -3.71968,40.970389 V 215.03041 h 30.38249 v -49.95362 h 48.53318 v -22.96446 h -48.53318 v -21.93856 h 51.61085 V 97.209302 Z m 98.80242,0 v 22.964468 h 51.61086 v 21.93856 h -48.53319 v 22.96446 h 48.53319 v 49.95362 h 30.38249 V 97.209302 Z">
          </path>
        </svg>
      </div>
    `;
  }
  
  divStyle() {
    return `
      div {
        width: 1em;
        height: calc(312.23976 / 512 * 1em);
      }
    `;
  }
  
};

//customElements.define('cloud-frank-logomark', CloudFrankLogomark, { extends: "div"});

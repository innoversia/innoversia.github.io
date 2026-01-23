/* -------------------------------------------------------------
WHAT : Critical System Function Library
WHY  : Enhanced Developer Experience (DX), Code Readability, and
       Code Maintainability.
------------------------------------------------------------- */

// Import Dependency
import view from './view.js'; // View Router
import api from './api.js'; // Helper Function & Data Transformation
import entrance from '../view/entrance.js';

// Library Master Object
const system = {

  // Metadata Library
  meta: {
    product: 'WØRLDS',
    edition: 'Prototype',
    version: '0.1.0',
    author: 'INNØVΞRSIΛ'
  },

  // Pre-load Function Library
  preload: () => {
    // Header Content : Insert into HTML <head> Section
    document.querySelector('head').innerHTML += `
      <title>${system.meta.product} - ${system.meta.edition} Edition v${system.meta.version}</title>
      <link rel="icon" type="image/x-icon" href="asset/icon/favicon.ico">
    `

    // Animated Background : Insert Starry Sky into HTML <body> Section
    document.querySelector('body').innerHTML += `
    <div class="starry-sky">
      <div class="star-fast"><div class="star-big"></div></div>
      <div class="star-slow"><div class="star-small"></div></div>
    </div>
    `

    // Global Event Delegation : Attach Event Listener at Viewport Level
    document.addEventListener('click', (event) => { system.router(event) });

    // [Temporary] Load Entrance View Directly
    document.addEventListener('DOMContentLoaded', () => {
      document.body.innerHTML += entrance.home;

      // Copyright Notice : Set Current Year (YYYY)
      api.getYYYY('#copy-year');
    });
  },

  // Event Delgation Router : Decision Tree for Destination
  router: (event) => {
    let target = event.target.dataset.target;
    let action = event.target.dataset.action;
    
    switch (target) {
      case 'view':
        view.router(action); // View Router
        break;
      default:
        return;
    }
  },

  // Display System Information in Browser Console
  log: {
    status: () => {
      console.log(
        'SUCCESS: ' + system.meta.product
        + ' v' + system.meta.version + ' '
        + system.meta.edition + ' Edition is running correctly.'
      )
    }
  },

  // Functional Execution during System Start
  start: () => {
    system.preload(); // Load Critical System Function
    system.log.status(); // Confirmation that the System is Running Correctly
  }
};

export default system;
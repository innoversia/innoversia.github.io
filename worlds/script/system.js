/* -------------------------------------------------------------
WHAT : Critical System Function Library
WHY  : Enhanced Developer Experience (DX), Code Readability, and
       Code Maintainability.
------------------------------------------------------------- */

// Import Dependency
import meta from './meta.js'; // Metadata API
import ui from './ui.js'; // User Interface (UI) API

// Library Master Object
const system = {

  // Display System Information in Browser Console
  log: {
    status: () => {
      console.log(
        'SUCCESS: ' + meta.product
        + ' v' + meta.version + ' '
        + meta.edition + ' Edition is running correctly.'
      )
    }
  },

  // System Start-up Instruction
  start: () => {
    ui.loadHead(); // Load Head Element : Title & Favicon
    ui.loadBG(); // Load Animated Background : Starry Sky
    ui.delegate(); // Activate Global Event Delegation
    ui.router('view', 'entrance-home'); // [Temporary] Load Entrance Home View
    system.log.status(); // Confirmation that the System is Running Correctly
  }
};

export default system;
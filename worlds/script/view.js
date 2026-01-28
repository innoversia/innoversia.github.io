/* -------------------------------------------------------------
WHAT : View API Library
WHY  : Handling of Navigation Request originating from Global
       Event Delegation Router.
------------------------------------------------------------- */

// Import Dependency
import entrance from '../view/entrance.js';

// Library Master Object
const view = {

  // View Router : Navigate based on Action Parameter from Global Event Delegation
  router: (newAction) => {
    let destiny = newAction.split('-')

    switch (destiny[0]) {

      // Entrance View
      case 'entrance':
        switch (destiny[1]) {

          // General Information Group
          case 'home': // Home Screen
            view.load(entrance.home.content);
            entrance.home.script();
            break;
          case 'notice': // Notice Screen
            view.load(entrance.notice.content);
            break;

          // Access Management Group
          case 'createAccount': // Create Account Screen
            view.load(entrance.createAccount.content);
            break;
          case 'signIn': // Sign In Screen
            view.load(entrance.signIn.content);
            break;

          // Legal Information Group
          case 'privacy': // Privacy Policy Screen
            view.load(entrance.privacy.content);
            break;
          case 'terms': // Terms of Use Screen
            view.load(entrance.terms.content);
            break;
          case 'license': // License Screen
            view.load(entrance.license.content);
            break;

          // Error Handling Group
          default: // Error Handler
            console.log(`View Router: ${destiny[1]} is not a valid Screen Name.`);
        }
        break;

      // Error Handler
      default:
        console.log(`View Router: ${destiny[0]} is not a valid View Name.`);
    }
  },

  // View Loader : Load the Specified Content onto the View
  load: (input) => { document.body.querySelector('.view').innerHTML = input; }
}

export default view;
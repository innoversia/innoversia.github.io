/* -----------------------------------------
WHAT : Application Start-up Script Execution
WHY  : Automated Detection of Brand New
       OR Existing User Session
       AND Reset User Interface
----------------------------------------- */

function runApp() {
  // Sidebar State : Reset to "Closed"
  toggleSidebar('sidebar-left');
  toggleSidebar('sidebar-right');

  // Copyright Notice : Set Current Year (YYY)
  getCurrYear('ft-year');
}
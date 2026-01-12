/* ------------------------------------------
WHAT : Functions for Responsive User Interface
WHY  : Some Placeholder Text
------------------------------------------ */

// Sidebar : Open the Panel Only
function openSidebar(i) {
  i.dataset.state = 'open';
  i.querySelector('.sb-label').style.display = '';
  i.querySelector('.sb-button').textContent = '×';
  i.querySelector('.sb-button').setAttribute('title', 'Close Menu');
}

// Sidebar : Toggle (Show/Hide)
function toggleSidebar(i) {
  let sidebar = document.getElementById(i);
  let openState = (sidebar.dataset.state === 'open');
  let leftSide = (sidebar.dataset.side === 'left');
  let newSide = (leftSide) ? '≡' : '⁝';
  let newTitle = (leftSide) ? 'Navigation Menu' : 'Option Menu';

  if (!openState) {
    openSidebar(sidebar);
    sidebar.querySelectorAll('.menu-header').forEach(item => item.className = 'menu-header');
    sidebar.querySelectorAll('.menu-group').forEach(item => item.dataset.state = 'open');
    sidebar.querySelectorAll('.menu-item').forEach(item => item.style.display = '');
  } else {
    sidebar.dataset.state = 'closed';
    sidebar.querySelector('.sb-label').style.display = 'none';
    sidebar.querySelector('.sb-button').textContent = newSide;
    sidebar.querySelector('.sb-button').setAttribute('title', newTitle);
    sidebar.querySelectorAll('.menu-item').forEach(item => item.style.display = 'none');
    sidebar.querySelectorAll('.menu-group').forEach(item => item.dataset.state = 'closed');
    sidebar.querySelectorAll('.menu-header').forEach(item => item.className = 'menu-header mh-x');
  }
}

// Menu Group : Toggle (Show/Hide)
function toggleMenuGroup(i) {
  let groupObj = document.getElementById(i);
  let sidebarId = groupObj.parentElement?.id;
  let sidebarObj = document.getElementById(sidebarId);
  let sidebarState = sidebarObj.dataset.state;

  if (sidebarState == 'closed') {
    openSidebar(sidebarObj);
    sidebarObj.querySelectorAll('.menu-item').forEach(item => item.style.display = 'none');
    sidebarObj.querySelectorAll('.menu-group').forEach(item => item.dataset.state = 'closed');
    sidebarObj.querySelectorAll('.menu-header').forEach(item => item.className = 'menu-header mh-c');
    groupObj.dataset.state = 'open';
    groupObj.querySelector('.menu-header').className = 'menu-header';
    groupObj.querySelectorAll('.menu-item').forEach(item => item.style.display = '');
  } else {
    switch (groupObj.dataset.state) {
      case 'closed':
        groupObj.dataset.state = 'open';
        groupObj.querySelector('.menu-header').className = 'menu-header';
        groupObj.querySelectorAll('.menu-item').forEach(item => item.style.display = '');
        break;
      case 'open':
        groupObj.dataset.state = 'closed';
        groupObj.querySelectorAll('.menu-item').forEach(item => item.style.display = 'none');
        groupObj.querySelector('.menu-header').className = 'menu-header mh-c';
        break;
    }
  }
}

// Generate Current Calendar Year (YYYY)
function getCurrYear(i) {
  document.getElementById(i).textContent = new Date().getFullYear();
}
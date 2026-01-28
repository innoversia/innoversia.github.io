/* -------------------------------------------------------------
WHAT : Functions for Responsive User Interface (UI)
WHY  : Requirements cannot be met by using Plain
       HTML & CSS.
------------------------------------------------------------- */

// Import Dependencies
import meta from './meta.js'; // Metadata API
import api from './api.js'; // Helper Function & Data Transformation
import view from './view.js' // View API

const ui = {

  // Head Content : Insert Title & Favicon
  loadHead: () => {
    document.querySelector('head').innerHTML += `
      <title>${meta.product} - ${meta.edition} Edition v${meta.version}</title>
      <link rel="icon" type="image/x-icon" href="asset/icon/favicon.ico">
    `
  },

  // Animated Background : Insert Starry Sky into HTML <body> Section
  loadBG: () => {
    document.querySelector('body').innerHTML += `
      <div class="starry-sky">
        <div class="star-fast"><div class="star-big"></div></div>
        <div class="star-slow"><div class="star-small"></div></div>
      </div>
    `
  },

  // Global Event Delegation : Attach Event Listener at Viewport Level
  delegate: () => {
    document.addEventListener('click', (event) => {
      try {
        let newTarget = event.target.closest('[data-target]').dataset.target;
        let newAction = event.target.closest('[data-target]').dataset.action;
        ui.router(newTarget, newAction);
      } catch (error) { '' }
    })
  },

  // Event Delegation Router : Decision Tree for Destination
  router: (newTarget, newAction) => {
    switch (newTarget) {
      case 'view':
        view.router(newAction); // View Router
        break;
      default:
        console.log(`Delegate Router: ${newTarget} is not a valid API Name.`);
    }
  },

  // [Deprecate] Event Router : Execute Function based on Target ID
  eventRouter: (e) => {
    let targetType = e.target.getAttribute('data-type');
    let targetID = e.target.id;

    switch (targetType) {
      case 'sb-button':
        switch(targetID) {
          case 'btn-navigation':
            ui.toggleSidebar('navigation-menu');
            break;
          case 'btn-option':
            ui.toggleSidebar('option-menu');
            break;
          default:
            return;
        }
        break;
      case 'menu-header':
        console.log(targetType);
        ui.toggleMenuGroup(`group-` + targetID.slice(7));
        break;
      default:
        return;
    }
  },

  // Sidebar Toggle : Show/Hide Interface based on State & Side
  toggleSidebar: (targetID) => {
    let sidebar = document.getElementById(targetID);
    let openState = (sidebar.dataset.state === 'open');
    let leftSide = (sidebar.dataset.side === 'left');
    let openIcon = (leftSide) ? 'fa-solid fa-bars' : 'fa-solid fa-ellipsis-vertical';
    let closeIcon = (leftSide) ? 'fa-solid fa-arrow-right-from-bracket fa-flip-horizontal' : 'fa-solid fa-arrow-right-from-bracket';

    if (!openState) {
      sidebar.dataset.state = 'open';
      sidebar.querySelector('.sb-label').style.display = '';
      sidebar.querySelector('[data-type="fa-icon"]').setAttribute('class', closeIcon);
      sidebar.querySelectorAll('.menu-header').forEach(item => item.className = 'menu-header');
      sidebar.querySelectorAll('.menu-group').forEach(item => item.dataset.state = 'open');
      sidebar.querySelectorAll('.menu-item').forEach(item => item.style.display = '');
    } else {
      sidebar.dataset.state = 'closed';
      sidebar.querySelector('.sb-label').style.display = 'none';
      sidebar.querySelector('[data-type="fa-icon"]').setAttribute('class', openIcon);
      sidebar.querySelectorAll('.menu-item').forEach(item => item.style.display = 'none');
      sidebar.querySelectorAll('.menu-group').forEach(item => item.dataset.state = 'closed');
      sidebar.querySelectorAll('.menu-header').forEach(item => item.className = 'menu-header mh-x');
    }
  },

  // Menu Group Toggle : (Show/Hide)
  toggleMenuGroup: (i) => {
    let groupObj = document.getElementById(i);
    let sidebarId = groupObj.parentElement?.id;
    let sidebar = document.getElementById(sidebarId);
    let openState = (sidebar.dataset.state === 'open');
    let leftSide = (sidebar.dataset.side === 'left');
    let openIcon = (leftSide) ? 'fa-solid fa-bars' : 'fa-solid fa-ellipsis-vertical';
    let closeIcon = (leftSide) ? 'fa-solid fa-arrow-right-from-bracket fa-flip-horizontal' : 'fa-solid fa-arrow-right-from-bracket';

    if (!openState) {
      sidebar.dataset.state = 'open';
      sidebar.querySelector('.sb-label').style.display = '';
      sidebar.querySelector('[data-type="fa-icon"]').setAttribute('class', closeIcon);
      sidebar.querySelectorAll('.menu-item').forEach(item => item.style.display = 'none');
      sidebar.querySelectorAll('.menu-group').forEach(item => item.dataset.state = 'closed');
      sidebar.querySelectorAll('.menu-header').forEach(item => item.className = 'menu-header mh-c');
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
  },

  // Latest Update : Generate List of Article Links
  getLatestUpdate: async(limit) => {
    let getData = await api.getData(api.data.blog);
    let blogData = getData.blogData;
  
    // Cap Display Limit at 30
    limit = (limit > 30) ? 30 : limit;

    // Sort Records by Date Descending & Defined Limit
    blogData = blogData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    ).slice(0, limit);

    let output = `
      <thead>
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>`;

    blogData.forEach(item => {
      let fDate = api.formatDate(item.date);
      output += `
        <tr>
          <td>${fDate}</td>
          <td><span>${item.category}</span></td>
          <td><a href="#" data-blog-id="${item.id}">${item.title}</a></td>
        </tr>`;
    })
    
    output += `</tbody>`;
    document.getElementById('latest-update').innerHTML = output;
  }
}

export default ui;
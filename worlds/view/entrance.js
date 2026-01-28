/* -------------------------------------------------------------
WHAT : Entrance View - Structure & Content
WHY  : On-demand Structure & Content Loading into the
       Application Viewport only when required.
------------------------------------------------------------- */

// Import Dependency
import api from '../script/api.js';

const entrance = {
  // Home Screen
  home: {
    content: `
    <div class="limiter">
      <div class="group">
        <div class="flex">
          <div class="logo"><img src="asset/image/logo.png"></div>
          <div class="tagline">Role-Playing in a Futuristic Science Fantasy Universe</div>
          <div class="widget">
            <h2><i class="fa-solid fa-triangle-exclamation"></i> Important Notice</h2>
            <p>
              This is an early stage Product Prototype that is currently Under Development.
              Some features may not work as intended and All Users are advised to manage
              their expectations amicably.
            </p>
            <div class="center">
              <span class="button" data-target="view" data-action="entrance-notice">
                Learn More</span>
            </div>
          </div>
          <div class="widget">
            <h2><i class="fa-solid fa-globe"></i> Journey Across WØRLDS</h2>
            <p>Start a New Journey by creating a FREE Account or continue your Journey by
              signing in to an Existing Account.</p>
            <div class="center">
              <span class="button" data-target="view" data-action="entrance-createAccount">Create Account</span>
              <span class="button" data-target="view" data-action="entrance-signIn">Sign In</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div>
          &copy; Copyright <span id="copy-year">YYYY</span>
          <a href="https://innoversia.github.io" target="_blank">INNØVΞRSIΛ</a>.
          All rights reserved.
        </div>
        <div class="legal">
          <span><a href="#" data-target="view" data-action="entrance-privacy">Privacy Policy</a></span>
          <span class="right"><a href="#" data-target="view" data-action="entrance-terms">Terms of Use</a></span>
          <span class="right"><a href="#" data-target="view" data-action="entrance-license">License</a></span>
        </div>
      </div>
    </div>
    `,
    script: () => {
      api.getYYYY('#copy-year'); // Footer Copyright Notice : Set Current Year (YYYY)
    }
  },

  // Notice Screen
  notice: {
    content: `
    <div class="limiter">
      <div class="group">
        <div class="header">
          <h1><i class="fa-solid fa-triangle-exclamation"></i> Important Notice</h1>
          <span class="control" data-target="view" data-action="entrance-home">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div class="content">
          <h2><i class="fa-solid fa-flask"></i> Product Prototype</h2>
          <p>This is an early stage Product Prototype that is currently Under Development.</p>
          <p>Some features may not work as intended and All Users are advised to manage
            their expectations amicably.</p>
          <p>Refer to the <a href="#available-features">Available Features</a> and
            <a href="#unavailable-features">Unavailable Features</a> sections as shown below
            for information about <b>Feature Availability</b>.</p>
          <hr>
          <h2><i class="fa-solid fa-circle-check"></i> Available Features</h2>
          <ol>
            <li><b>Entrance</b></li>
              <ol type="a">
                <li>Home Screen</li>
                <li>Important Notice</li>
              </ol>
          </ol>
          <hr>
          <h2><i class="fa-solid fa-ban"></i> Unavailable Features</h2>
          <ol>
            <li><b>Entrance</b></li>
              <ol type="a">
                <li>Access Management</li>
                <li>Legal Information</li>
              </ol>
            <li><b>Gateway</b></li>
              <ol type="a">
                <li>Character Management</li>
                <li>Account Management</li>
                <li>System Control Panel</li>
              </ol>
            <li><b>Gameplay</b></li>
            <ol type="a">
              <li>Home</li>
              <li>Adventure</li>
              <li>Career</li>
              <li>Economy</li>
              <li>Organization</li>
              <li>Sovereignty</li>
            </ol>
            <li><b>Other</b></li>
            <ol type="a">
              <li>Community</li>
              <li>Support</li>
            </ol>
          </ol>
        </div>
      </div>
    </div>
  `
  },

  // Create Account Screen
  createAccount: {
    content: `
    <div class="limiter">
      <div class="group">
        <div class="header">
          <h1><i class="fa-solid fa-square-plus"></i> Create Account</h1>
          <span class="control" data-target="view" data-action="entrance-home">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div class="content">
          <div class="under-construction">
            <div class="symbol"><i class="fa-solid fa-road-barrier"></i></div>
            <div><b>Under Construction</b><br>Come back at a later Date &amp; Time</div>
          </div>
        </div>
      </div>
    </div>
  `
  },

  // Sign In Screen
  signIn: {
    content: `
    <div class="limiter">
      <div class="group">
        <div class="header">
          <h1><i class="fa-solid fa-right-to-bracket"></i> Sign In</h1>
          <span class="control" data-target="view" data-action="entrance-home">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div class="content">
          <div class="under-construction">
            <div class="symbol"><i class="fa-solid fa-road-barrier"></i></div>
            <div><b>Under Construction</b><br>Come back at a later Date &amp; Time</div>
          </div>
        </div>
      </div>
    </div>
  `
  },

  // Privacy Policy Screen
  privacy: {
    content: `
    <div class="limiter">
      <div class="group">
        <div class="header">
          <h1><i class="fa-solid fa-file-lines"></i> Privacy Policy</h1>
          <span class="control" data-target="view" data-action="entrance-home">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div class="content">
          <div>
            <h2>Introduction</h2>
            <p>Find out how Your Data is handled on this Product and acquire information
              relating to Your Privacy.</p>
            <p>By using Our Product, You have Accepted Our Privacy Policy.</p>
            <p>Should You disagree with any part of Our Privacy Policy, You may opt to stop
              using Our Product immediately.</p>
          </div>
          <hr>
          <div>
            <h2>Definition</h2>
            <p>"You", "Your" -- Refers to the User of Our Product.</p>
            <p>"We", "Us", "Our" -- Refers to the Team of People that worked on this Product.</p>
            <p>"Product" -- Refers to "WØRLDS", the Browser Role-Playing Game (<b>RPG</b>) Prototype
              that is Under Development and what You are currently accessing.</p>
          </div>
          <hr>
          <div>
            <h2>Data Collection</h2>
            <p>The Product collects Data that are provided by You in various ways.</p>
            <p>Shown below is a Non-exhaustive List of Features with Data Collection capability:</p>
            <ul>
              <li>Account Creation</li>
              <li>Character Creation</li>
              <li>Organization Registration</li>
              <li>Sovereignty Formation</li>
            </ul>
          </div>
          <hr>
          <div>
            <h2>Data Storage</h2>
            <p>Your Data that are collected by the Product are stored locally within the
              Web Browser Application that You are using to access this Product.</p>
            <p>We do <b><u>NOT</u></b> have access to any Data stored on Your Web Browser Application.</p>
            <p><b>IMPORTANT:</b> Be mindful <b><u>NOT</u></b> to provide any Confidential or
            Sensitive Data while using Our Product.</p>
          </div>
          <hr>
          <div>
            <h2>Data Usage</h2>
            <p>Your Data that are collected by the Product are used for various purposes.</p>
            <p>Shown below is a Non-exhaustive List of Features with Data Usage capability:</p>
            <ul>
              <li>Player Profile</li>
              <li>Character Profile</li>
              <li>Organization Profile</li>
              <li>Sovereignty Profile</li>
            </ul>
          </div>
          <hr>
          <div>
            <h2>Data Disclosure</h2>
            <p>We are unable to disclose any of the Data that is stored on your Web Browser Application.</p>
            <p>You are solely Responsible and Accountable for the Safety &amp; Security of both
              Your Web Browser Application <b><u>AND</u></b> Stored Data.</p>
          </div>
          <hr>
          <div>
            <h2>Change</h2>
            <p>We reserve the Full Legal Right to change any part of this Privacy Policy
              at any point in time without any liability to You.</p>
          </div>
          <hr>
          <p><b>Last Update:</b> Tue, 27 Jan 2026</p>
        </div>
      </div>
    </div>
  `
  },

  // Terms of Use Screen
  terms: {
    content: `
    <div class="limiter">
      <div class="group">
        <div class="header">
          <h1><i class="fa-solid fa-file-lines"></i> Terms of Use</h1>
          <span class="control" data-target="view" data-action="entrance-home">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div class="content">
          <div>
            <h2>Introduction</h2>
            <p>Find out what You should or should not be doing when using Our Product.</p>
            <p>By using Our Product, You have Accepted Our Terms of Use.</p>
            <p>Should You disagree with any part of Our Terms of Use, You may opt to stop
              using Our Product immediately.</p>
          </div>
          <hr>
          <div>
            <h2>Definition</h2>
            <p>"You", "Your" -- Refers to the User of Our Product.</p>
            <p>"We", "Us", "Our" -- Refers to the Team of People that worked on this Product.</p>
            <p>"Product" -- Refers to "WØRLDS", the Browser Role-Playing Game (<b>RPG</b>) Prototype
              that is Under Development and what You are currently accessing.</p>
          </div>
          <hr>
          <div>
            <h2>Permission</h2>
            <p>You are hereby granted unlimited permission to use Our Product in the ways that
              it is designed to be used, for the purpose of evaluating how the Product works,
              and sharing constructive feedback with Us on how it could be improved.</p>
          </div>
          <hr>
          <div>
            <h2>Restriction</h2>
            <p>You may not engage in any of the following activities relating to Our Product:</p>
            <ul>
              <li>Copy, Download, or Transmit Our Product's Source Code to any other Person,
                Organization, or Data Storage / Retrieval System in any format.</li>
              <li>Inspect, Modify, Reverse Engineer, or Create Derivatives of Our Product's
              Source Code for any purpose.</li>
            </ul>
          </div>
          <hr>
          <div>
            <h2>Indemnity</h2>
            <p>You shall indemnify Us of any Damage or Loss arising from the use of Our Product,
              including matters relating to Your Health and/or Devices used to access Our Product.</p>
          </div>
          <hr>
          <div>
            <h2>Change</h2>
            <p>We reserve the Full Legal Right to change any part of this Privacy Policy
              at any point in time without any liability to You.</p>
          </div>
          <hr>
          <p><b>Last Update:</b> Wed, 28 Jan 2026</p>
        </div>
      </div>
    </div>
  `
  },
  license: {
    content: `
    <div class="limiter">
      <div class="group">
        <div class="header">
          <h1><i class="fa-solid fa-file-lines"></i> License</h1>
          <span class="control" data-target="view" data-action="entrance-home">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div class="content">
          <div>
            <a href="https://fonts.google.com/specimen/Roboto+Slab/license" target="_blank">
              <h3>Roboto Slab</h3></a>
            Copyright 2015 Google Inc. All Rights Reserved.
            <br>Licensed under the
            <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">
              Apache License</a>, Version 2.0
          </div>
          <hr>
          <div>
            <a href="https://fontawesome.com/license/free" target="_blank">
              <h3>Font Awesome Free</h3></a>
            Copyright 2025 Fonticons, Inc.
            <br><b>Font License:</b>
            <a href="https://scripts.sil.org/OFL" target="_blank">SIL OFL 1.1</a>
          </div>
        </div>
      </div>
    </div>
  `
  }
}

export default entrance;
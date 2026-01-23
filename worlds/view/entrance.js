/* -------------------------------------------------------------
WHAT : Entrance View - Structure & Content
WHY  : On-demand Structure & Content Loading into the
       Application Viewport only when required.
------------------------------------------------------------- */

const entrance = {
  // Home Screen
  home: `
    <div class="entrance">
      <div class="entrance-content">
        <div class="logo"><img src="asset/image/logo.png"></div>
        <h1 class="tagline">Role-Playing in a Futuristic Science Fantasy Universe</h1>
        <div class="content">
          <div class="widget">
            <h2>Advisory Note</h2>
            <p>
              This is an early stage Product Prototype that is currently Under Development.
              Some features may not work as intended and All Users are advised to manage
              their expectations amicably.
            </p>
            <div class="center"><span class="button" data-target="view" data-action="view-notice">Learn More</span></div>
          </div>
          <div class="widget">
            <h2>Journey Across WØRLDS</h2>
            <p>Start a New Journey by creating a FREE Account or continue your Journey by
              signing in to an Existing Account.</p>
            <div class="center">
              <span class="button" data-target="view" data-action="create-account">Create Account</span>
              <span class="button" data-target="view" data-action="sign-in">Sign In</span>
            </div>
          </div>
        </div>
        <div class="footer">
          <div>
            &copy; Copyright
            <span id="copy-year">YYYY</span>
            <a href="https://innoversia.github.io" target="_blank">INNØVΞRSIΛ</a>
          </div>
          <div class="legal">
            <span><a href="#">Privacy Policy</a></span>
            <span class="right"><a href="#">Terms of Use</a></span>
            <span class="right"><a href="#">Legal</a></span>
          </div>
        </div>
      </div>
    </div>
  `,

  // Advisory Note Screen
  notice: ``
}

export default entrance;
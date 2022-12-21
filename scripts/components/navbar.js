function navbar() {
  return `
  
        <div class="logo">
            <a href="index.html">
            <img src="images/Kayak_Logo.svg" alt="Kaya Logo">
            </a>
        </div>
        <div class="content">
            <div class="navItems"><a href="#">Business</a></div>
            <div class="navItems"><a href="./pages/trips.html">Trips</a></div>
            <span class="vr"></span>
            <div class="favorites"><i class="bx bxs-heart"></i></div>
             <div id="car_navbar_login_name" class="userLogIn"></div>
            <div id="car_navbar_login_button" class="userLogIn">
              <button type="button" class="btn btn-light border border-dark px-4 py-2 " data-bs-toggle="modal" data-bs-target="#mainmodal">
                <span class="sign-in-icon">
                    <svg class="auth-account-icon" role="img" style="width:inherit;height:inherit;line-height:inherit;color:inherit;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M100 20c-44.183 0-80 35.817-80 80s35.817 80 80 80s80-35.817 80-80s-35.817-80-80-80zm0 15c56.025 0 85.793 66.777 48.312 108.431c-30.872-11.58-65.745-11.582-96.624 0C14.211 101.784 43.965 35 100 35zM76 97.151v-24.2c0-32.042 48-31.996 48 0v24.201c0 32.041-48 31.995-48-.001z"></path></svg>
                </span>
                <strong>Sign in</strong> 
              </button>
            </div>
        </div>
  
  `
}

export default navbar;

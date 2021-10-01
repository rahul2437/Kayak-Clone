
function navbar() {
  return `
  
  <div class="logo">
            <a href="index.html">
            <img src="images/Kayak_Logo.svg" alt="">
            </a>
        </div>
        <div class="content">
            <div class="navItems"><a href="#">Business</a></div>
            <div class="navItems"><a href="#">Trips</a></div>
            <span class="vr"></span>
            <div class="favorites"><i class="bx bxs-heart"></i></div>
            <div class="userLogIn">Log in</div>
        </div>
  
  `
}

export default navbar;
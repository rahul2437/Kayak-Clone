function sidebar() {
    return `
  
  <div class="logo_content">
            <i id="menubtn" class="bx bx-menu"></i>
        </div>
        <ul class="nav_list">
            <li>
                <a href="#">
                    <i class="bx bxs-plane-alt"></i>
                    <span class="sidebar-list">Flights</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="bx bxs-bed"></i>
                    <span class="sidebar-list">Stays</span>
                </a>
            </li>
            <li>
                <a href="pages/cars.html">
                    <i class="bx bxs-car"></i>
                    <span class="sidebar-list">Car Rental</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="bx bxs-directions"></i>
                    <span class="sidebar-list">Things to do</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="bx bxs-hotel"></i>
                    <span class="sidebar-list">Flight+Hotel</span>
                </a>
            </li>
            <hr/>
            <li>
                <a href="#">
                    <i class="bx bx-globe"></i>
                    <span class="sidebar-list">Explore</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="bx bxs-purchase-tag"></i>
                    <span class="sidebar-list">Deals</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="bx bxs-map-alt"></i>
                    <span class="sidebar-list">Routes</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="bx bxs-book"></i>
                    <span class="sidebar-list">Direct</span>
                </a>
            </li>
            <hr/>
            <li>
                <a href="#">
                    <i class="bx bxs-book-heart"></i>
                    <span class="sidebar-list">Trips</span>
                </a>
            </li>
        </ul>
  
  `
}
export default sidebar;
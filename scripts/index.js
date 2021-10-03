

setTimeout(function () {
    document.getElementById("footer_img").src = "./images/footer.JPG";
    document.getElementById("modal_fb_logo").src = "./images/fb logo.png"
    document.getElementById("modal_booking_logo").src = "./images/Booking.Com-logo.png"
    document.getElementById("modal_google_logo").src = "./images/google logo.png"

}, 1000);

function create_local_stg() {
    let input_calendar = document.getElementById("input_calendar").value;
    var date1 = new Date(input_calendar.slice(0, 11));
    var date2 = new Date(input_calendar.slice(22, 33));
    var days = number_of_day();
    var lcl_stg = {
        num_days: days,

        city: obj_city,
        pickup: date1,
        drop: date2
    }


    localStorage.setItem('search_car', JSON.stringify(lcl_stg));

}


function number_of_day() {


    let input_calendar = document.getElementById("input_calendar").value;

    var date1 = new Date(input_calendar.slice(0, 11));
    var date2 = new Date(input_calendar.slice(22, 33));

    var Difference_In_Time = date2.getTime() - date1.getTime();


    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
}


function Showdropdown() {

    let x = document.querySelector("#pop_div_search_bar_drop_off");
    if (x.className === "d-block") {
        x.className = "d-none";

    }
    else {
        x.className = "d-block";
        document.body.setAttribute('onclick', close_all);

    }
}
function show_drop_dn() {
    let x = document.querySelector("#pop_div_search_bar_age");
    if (x.className === "d-block") {
        x.className = "d-none";

    }
    else {

        x.className = "d-block";

        document.body.setAttribute('onclick', close_all);

    }

}

function driver_age() {

    document.getElementById("driver_age").innerText = "26-65";

    document.getElementById("pop_div_search_bar_age").className = "d-none";
}

function custom_driver_age() {
    let val = document.getElementById("others").value;

    document.getElementById("driver_age").innerText = val;
}


function select(e) {

    let x = document.getElementById("change_drop-off");
    x.innerText = e.target.innerText;
    document.querySelector("#pop_div_search_bar_drop_off").className = "d-none";
}

function close_all() {



    document.querySelector("#pop_div_search_bar_drop_off").className = "d-none";
    document.getElementById("pop_div_search_bar_age").className = "d-none";
}

var obj_city;
function display_val(el) {

    obj_city = el;
    document.getElementById("index_input_city").value = el.city + " " + el.state;
    let div_cont = document.querySelector('.container_search');

    div_cont.innerHTML = "";

}

$(function () {
    $('.datetimerange').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        }
    });
});



var timerId;
function debounce() {

    if (timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
        search();
    }, 700);
}



async function search() {
    let input = document.getElementById("index_input_city").value;

    if (input !== "") {
        let data = await get_cities(input);

        display(data);
    }
    else {
        let div_cont = document.querySelector('.container_search');

        div_cont.innerHTML = "";
    }
}



async function get_cities(input) {
    let res = await fetch(`https://kayaak-clone-backend.herokuapp.com/cities?name=${input}`);
    let data = await res.json();

    return data;
}






function display(data) {

    let div_cont = document.querySelector('.container_search');

    div_cont.innerHTML = "";
    data.forEach((el) => {


        let a = document.createElement('a');
        a.href = "#";
        a.addEventListener("click", () => {
            display_val(el);
        });

        a.setAttribute("class", "anchor_none");

        let icon = document.createElement('i')
        icon.setAttribute("class", "fas fa-city float-start display-7 m-3");

        let h3 = document.createElement('h3')
        h3.innerText = el.city;
        let p = document.createElement('p');
        p.innerText = el.state;
        p.setAttribute("class", "ms-5");
        let hr = document.createElement("hr");
        hr.setAttribute("class", "mb-0");

        a.append(icon, h3, p, hr);

        div_cont.append(a);

    });

}

function register_email() {
    let input = document.getElementById("register_email_input").value;

    if (input === "") {
        alert("enter email !")
    } else {
        let load_icon = document.getElementById("loading_display");
        load_icon.className = "d-block";
        setTimeout(() => {
            load_icon.className = "d-none";
            document.getElementById("completed_loading").className = "d-block";
        }, 1500);
    }
}


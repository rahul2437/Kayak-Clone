

setTimeout(function(){
    document.getElementById("footer_img").src = "./images/footer.JPG";
    document.getElementById("modal_fb_logo").src ="./images/fb logo.png"
    document.getElementById("modal_booking_logo").src ="./images/Booking.Com-logo.png"
    document.getElementById("modal_google_logo").src ="./images/google logo.png"
    // document.getElementById("footer_img").src =
    // document.getElementById("footer_img").src =
},1000);

function create_local_stg() {
    var days = number_of_day();
    var lcl_stg = {
        num_days: days,
        city: obj_city
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
        console.log("hi att2");
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
        console.log("hi att1");
    }

}

function driver_age() {
    //console.log(e.target.labels[0].innerText);
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

    console.log("hi closed");
    
    document.querySelector("#pop_div_search_bar_drop_off").className = "d-none";
    document.getElementById("pop_div_search_bar_age").className = "d-none";
}
var obj_city;
function display_val(el) {
    obj_city = el;
    console.log(el);
    document.getElementById("index_input_city").value = el.city + " " + el.state;
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





async function search() {
    let input = document.getElementById("index_input_city").value;
    let data = await get_cities(input);
    
    display(data);
}



async function get_cities(input) {
    let res = await fetch(`https://kayaak-clone-backend.herokuapp.com/cities?name=${input}`);
    let data = await res.json();
    console.log(data);
    return data;
}






function display(data) {
//console.groupCollapsed(div_cont);
var div_cont = document.querySelector('.container_search');
console.log(div_cont);
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

        a.append(icon, h3, p, hr);

        div_cont.append(a);

    });
   
}


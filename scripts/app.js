const getcity = JSON.parse(localStorage.getItem('search_car'));
console.log(getcity.city);
if (getcity.city == undefined) {
  document.getElementById('standardfilter').style.display = 'none';
  document.getElementById('NoCarsFound').style.display = 'block';
}
else {
  document.getElementById('NoCarsFound').style.display = 'none';
  getData();
}
async function getData() {
  let city = getcity.city.city;
  let res = await fetch(`https://kayaak-clone-backend.herokuapp.com/cities?name=${city}`);
  let data = await res.json();
  cityid = getcity.city._id;
  let rescar = await fetch(`https://kayaak-clone-backend.herokuapp.com/cars/city/${cityid}`);
  let cardata = await rescar.json();
  localStorage.setItem('cardata', JSON.stringify(cardata));
  let loc = data[0].pickup_address;
  showData(loc.slice(0, 24));
}

function showData(loc) {
  let data = JSON.parse(localStorage.getItem('cardata'));
  let carddiv = document.querySelector('#putCarData');
  carddiv.innerHTML = '';
  let rule = document.createElement('hr');
  for (let index = 0; index < 10; index++) {
    const e = data[index];
    let carcard = document.createElement('div');
    carcard.setAttribute('class', 'carCard')

    let carimage = document.createElement('div');
    carimage.setAttribute('id', 'carPic');

    let imgcar = document.createElement('img');
    let imgcomp = document.createElement('img');

    imgcar.src = e.car_image;
    imgcomp.src = e.traveller_img;


    let cardetails = document.createElement('div');
    cardetails.setAttribute('id', 'carDetails')

    let name = document.createElement('h2');
    name.setAttribute('id', 'carName');
    name.innerText = e.car_name;

    let carstats = document.createElement('ul');
    carstats.setAttribute('id', 'carStats');

    let seats = document.createElement('li');
    seats.setAttribute('id', 'Nseater');
    seats.innerHTML = `<i class="bx bxs-face"></i>` + e.passangers;

    let fuel = document.createElement('li');
    fuel.setAttribute('id', 'fueltype');
    if (e.diesel == true) {
      fuel.innerHTML = 'Diesel';
    }
    else {
      fuel.innerHTML = 'Petrol';
    }


    let luguage = document.createElement('li');
    luguage.setAttribute('id', 'Nluguage');
    luguage.innerHTML = '<i class="bx bxs-briefcase-alt"></i>' + e.large_bags;

    let doors = document.createElement('li');
    doors.setAttribute('id', 'Ndoor');
    doors.innerHTML = '<i class="bx bxs-door-open"></i>' + e.doors;

    let gears = document.createElement('li');
    gears.setAttribute('id', 'transmission');
    gears.innerHTML = '<i class="bx bx-sitemap"></i>' + e.transmission;

    let ac = document.createElement('li');
    if (e.air_conditioner == true) {
      ac.setAttribute('id', 'ACstatus');
      ac.innerHTML = '<span class="material-icons">ac_unit</span>'
    }
    else {
      ac.setAttribute('id', 'ACstatus');
    }


    let pickup = document.createElement('p');
    pickup.setAttribute('id', 'pickup');
    pickup.innerHTML = '<i class="bx bxs-plane-alt"></i> ' + loc;

    let terms = document.createElement('ul');
    terms.setAttribute('id', 'carTAC');
    terms.innerHTML = `
    
    <li>Fuel Policy: same to same</li>
    <li>Unlimited Mileage included</li>
    <li></li>
    <li>Collision damage waiver</li>
    <li>Theft Protection waiver</li>
    <li>Third party coverage</li>
    
    `;


    let carprice = document.createElement('div');
    carprice.setAttribute('id', 'carPrice');

    let cost = document.createElement('h2');
    cost.setAttribute('id', 'price');
    cost.innerHTML = '&#8377; ' + e.price.toLocaleString("hi-IN");

    let butt = document.createElement('button');
    butt.setAttribute('id', 'bookacar');
    let carid = e._id;
    butt.addEventListener('click', () => {
      // localStorage.setItem('bookedCar',JSON.stringify(carid));
      redirect(carid);
    });
    butt.innerText = `Book car`;


    carimage.append(imgcar, imgcomp);
    cardetails.append(name, rule, carstats, pickup, rule, terms);
    carstats.append(seats, luguage, doors, gears, ac, fuel);
    carprice.append(cost, butt);
    carcard.append(carimage, cardetails, carprice);
    carddiv.append(carcard);
  }
}

function redirect(x) {
  console.log('redirect:', x);
  localStorage.setItem('bookedCar', JSON.stringify(x));
  let loginstatus = JSON.parse(localStorage.getItem('loginStatus'));
  console.log(loginstatus);
  window.location.assign("booking.html");
}

const carid = JSON.parse(localStorage.getItem('bookedCar'));
let cardata = JSON.parse(localStorage.getItem('cardata'));
cardata.forEach(e => {
  if (carid == e._id) {
    carData = e;
  }
});


const loginStatus = JSON.parse(localStorage.getItem('loginStatus'));
if (loginStatus == null || loginStatus.isLogged == false) {
  document.getElementById('storeInfo').style.display = 'none';
  document.getElementById('loginBFS').style.display = 'block';
  document.getElementById('hirerDetails').style.display = 'none';
  document.getElementById('paymentDetails').style.display = 'none';
}
else {
  document.getElementById('storeInfo').style.display = 'block';
  document.getElementById('loginBFS').style.display = 'none';
  document.getElementById('firstName').value = loginStatus.first_name;
  document.getElementById('firstName').setAttribute('disabled', '');
  document.getElementById('lastName').value = loginStatus.last_name;
  document.getElementById('lastName').setAttribute('disabled', '');
  document.getElementById('eMail').value = loginStatus.user_email;
  document.getElementById('eMail').setAttribute('disabled', '');
  document.getElementById('userPhone').value = loginStatus.phone_num;
  document.getElementById('userPhone').setAttribute('disabled', '')

}

function showData() {
  let cardiv = document.createElement('div');
  cardiv.setAttribute('id', 'bookedcardetails');
  let HirerDetails = document.createElement('div');
  HirerDetails.setAttribute('id', 'hirerdetails');
  let paymentDetails = document.createElement('div');
  paymentDetails.setAttribute('id', 'paymentdetails');
  let TotalPrice = document.createElement('div');
  TotalPrice.setAttribute('id', 'totalprice');
  let Summary = document.createElement('div');
  Summary.setAttribute('id', 'summary');

  // Car Details
  document.getElementById('carname').innerText = carData.car_name;
  document.getElementById('passengers').innerText += carData.passangers;
  document.getElementById('lugauge').innerText += carData.large_bags;
  document.getElementById('Ndoors').innerText += carData.doors;
  if (carData.air_conditioner == true) {
    document.getElementById('ACstatus').innerText += 'AC';
  }
  else {
    document.getElementById('ACstatus').innerText += 'Non AC';
  }
  document.getElementById('transmission').innerText += carData.transmission;
  if (carData.diesel == true) {
    document.getElementById('fuelType').innerText += 'Diesel';
  }
  else {
    document.getElementById('fuelType').innerText += 'Petrol';
  }
  document.getElementById('carImage').src = carData.car_image;
  document.getElementById('travellerimg').src = carData.traveller_img;
  document.getElementById('pickup').innerText += carData.city.pickup_address;
  document.getElementById('location').innerText += carData.city.city;
  document.getElementById('location').style.fontSize = '20px';
  document.getElementById('Price').innerText += carData.price;

  let days = JSON.parse(localStorage.getItem('search_car')).num_days;
  if (days != 0) {
    document.getElementById('totalcarPrice').innerText += carData.price * days;
  }
  else {
    document.getElementById('totalcarPrice').innerText += carData.price;
  }


}
showData();

let TripData = JSON.parse(localStorage.getItem('search_car'));
console.log(TripData);

document.getElementById('storeInfo').addEventListener('click', async () => {
  let response = await fetch("https://kayaak-clone-backend.herokuapp.com/trips", {
    method: "POST",
    body: JSON.stringify({
      car: carid,
      user: loginStatus.user_id,
      pick_up_date: TripData.pickup,
      drop_off_date: TripData.drop
    }),
    headers: { "Content-Type": "application/json" }
  });
  setTimeout(() => {
    alert("Booking Successfull");
    window.location.assign("../index.html")
  }, 1000);
});
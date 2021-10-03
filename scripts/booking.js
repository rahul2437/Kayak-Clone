
const carid = JSON.parse(localStorage.getItem('bookedCar'));
let cardata = JSON.parse(localStorage.getItem('cardata'));
cardata.forEach(e => {
  if (carid==e._id) {
    carData = e;
  }
});


function showData() {
  let cardiv = document.createElement('div');
  cardiv.setAttribute('id','bookedcardetails');
  let HirerDetails = document.createElement('div');
  HirerDetails.setAttribute('id','hirerdetails');
  let paymentDetails = document.createElement('div');
  paymentDetails.setAttribute('id','paymentdetails');
  let TotalPrice = document.createElement('div');
  TotalPrice.setAttribute('id','totalprice');
  let Summary = document.createElement('div');
  Summary.setAttribute('id','summary');

  // Car Details
  document.getElementById('carname').innerText = carData.car_name;
  document.getElementById('passengers').innerText += carData.passangers;
  document.getElementById('lugauge').innerText += carData.large_bags;
  document.getElementById('Ndoors').innerText += carData.doors;
  if(carData.air_conditioner==true){
    document.getElementById('ACstatus').innerText += 'AC';
  }
  else{
    document.getElementById('ACstatus').innerText += 'Non AC';
  }
  document.getElementById('transmission').innerText += carData.transmission;
  if(carData.diesel==true){
    document.getElementById('fuelType').innerText += 'Diesel';
  }
  else{
    document.getElementById('fuelType').innerText += 'Petrol';
  }
  document.getElementById('carImage').src = carData.car_image;
  document.getElementById('travellerimg').src = carData.traveller_img;
  document.getElementById('pickup').innerText += carData.city.pickup_address;
  document.getElementById('location').innerText += carData.city.city;
  document.getElementById('location').style.fontSize = '20px';
  document.getElementById('Price').innerText += carData.price;
  
  let days = JSON.parse(localStorage.getItem('search_car')).num_days;
  if(days!=0){
    document.getElementById('totalcarPrice').innerText += carData.price*days;
  }
  else{
    document.getElementById('totalcarPrice').innerText += carData.price;
  }
  

}
showData();

document.getElementById('storeInfo').addEventListener('click',()=>{
  Store();
});

function Store(){
  class storeUser {
    constructor(Fname, Lname, email, phone) {
      this.Fname = Fname,
        this.Lname = Lname,
        this.email = email,
        this.phone = phone;
    }
  }
  class storeCard {
    constructor(cardName, cardNum,CVV,BillAdd) {
      this.cardname = cardName,
      this.cardnumber = cardNum,
      this.cvv = CVV,
      this.address = BillAdd
    }
  }
  let Fname = document.getElementById('firstName').value;
  let Lname = document.getElementById('lastName').value;
  let email = document.getElementById('eMail').value;
  let phone = document.getElementById('userPhone').value;
  let userInfo = new storeUser(Fname,Lname,email,phone);
  localStorage.setItem('CurrentUser',JSON.stringify(userInfo));
  
  
  let Cardname = document.getElementById('firstName').value;
  let Cardnum = document.getElementById('lastName').value;
  let cvv = document.getElementById('eMail').value;
  let Billadd = document.getElementById('userPhone').value;
  let cardInfo = new storeCard(Cardname,Cardnum,cvv,Billadd);
  localStorage.setItem('CurrentCard',JSON.stringify(cardInfo));



}
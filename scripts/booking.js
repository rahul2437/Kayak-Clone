const carid = JSON.parse(localStorage.getItem('bookedCar'));

let data = JSON.parse(localStorage.getItem('cardata',carid));

function searchData(data) {
  data.forEach(e => {
    if(e._id==carid) localStorage.setItem('showbookedCar',JSON.stringify(e));
  });
}

let carData = JSON.parse(localStorage.getItem('showbookedCar'));
console.log(carData);

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

  cardetailsdiv = document.createElement('');
}
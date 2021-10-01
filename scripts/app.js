async function getData() {
  let city = document.getElementById('cityName').value;
  let res = await fetch(`https://kayaak-clone-backend.herokuapp.com/cities?name=${city}`);
  let data = await res.json();
  cityid = data[0]._id;
  let rescar = await fetch(`https://kayaak-clone-backend.herokuapp.com/cars/city/${cityid}`);
  let cardata = await rescar.json();
  let loc = data[0].pickup_address;
  showData(cardata,loc.slice(0,24));
}

function showData(array,loc) {
  let carddiv = document.querySelector('#putCarData');
  let rule = document.createElement('hr');
  array.forEach(e => {
    let carcard = document.createElement('div');
    carcard.setAttribute('class','carCard')

    let carimage = document.createElement('div');
    carimage.setAttribute('id','carPic');

    let imgcar = document.createElement('img');
    let imgcomp = document.createElement('img');

    imgcar.src = e.car_image;
    imgcomp.src = e.traveller_img;

    
    let cardetails = document.createElement('div');
    cardetails.setAttribute('id','carDetails')
    
    let name = document.createElement('h2');
    name.setAttribute('id','carName');
    name.innerText = e.car_name;
    
    let carstats = document.createElement('ul');
    carstats.setAttribute('id','carStats');
    
    let seats = document.createElement('li');
    seats.setAttribute('id','Nseater');
    seats.innerHTML = `<i class="bx bxs-face"></i>`+e.passangers;
    
    let luguage = document.createElement('li');
    luguage.setAttribute('id','Nluguage');
    luguage.innerHTML = '<i class="bx bxs-briefcase-alt"></i>'+e.large_bags;
    
    let doors = document.createElement('li');
    doors.setAttribute('id','Ndoor');
    doors.innerHTML = '<i class="bx bxs-door-open"></i>'+e.doors;
    
    let gears = document.createElement('li');
    gears.setAttribute('id','transmission');
    gears.innerHTML = '<i class="bx bx-sitemap"></i>'+e.transmission;
    
    let ac = document.createElement('li');
    if(e.air_conditioner){
      ac.setAttribute('id','ACstatus');
      ac.innerHTML = '<span class="material-icons">ac_unit</span>'
    }
    else{
      ac.setAttribute('id','ACstatus');
    }
    
    
    let pickup = document.createElement('p');
    pickup.setAttribute('id','pickup');
    pickup.innerHTML = '<i class="bx bxs-plane-alt"></i> '+ loc;
    
    let terms = document.createElement('ul');
    terms.setAttribute('id','carTAC');
    terms.innerHTML = `
    
    <li>Fuel Policy: same to same</li>
    <li>Unlimited Mileage included</li>
    <li></li>
    <li>Collision damage waiver</li>
    <li>Theft Protection waiver</li>
    <li>Third party coverage</li>
    
    `;
    
    
    let carprice = document.createElement('div');
    carprice.setAttribute('id','carPrice');
    
    let cost = document.createElement('h2');
    cost.setAttribute('id','price');
    cost.innerHTML = '&#8377; ' + e.price.toLocaleString("hi-IN");
    
    let butt = document.createElement('button');
    butt.setAttribute('id','bookacar');
    butt.innerText = `Book car`;
    
    
    carimage.append(imgcar,imgcomp);
    cardetails.append(name,rule,carstats,pickup,rule,terms);
    carstats.append(seats,luguage,doors,gears,ac);
    carprice.append(cost,butt);
    carcard.append(carimage,cardetails,carprice);
    carddiv.append(carcard);
  });
}
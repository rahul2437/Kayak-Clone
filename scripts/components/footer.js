function footer() {
  return `

  <div class="holders">
  <div class="footerTitle">Company</div>
  <div class="footerContent">About</div>
  <div class="footerContent">Careers</div>
  <div class="footerContent">Mobile</div>
  <div class="footerContent">Blog</div>
  <div class="footerContent">How we work</div>
</div>
<div class="holders">
  <div class="footerTitle">Contact</div>
  <div class="footerContent">Help/FAQ</div>
  <div class="footerContent">Press</div>
  <div class="footerContent">Affiliates</div>
  <div class="footerContent">Hotel Owners</div>
  <div class="footerContent">Partners</div>
  <div class="footerContent">Advertise with us</div>
</div>
<div class="holders">
  <div class="footerTitle">More</div>
  <div class="footerContent">Airline fees</div>
  <div class="footerContent">Airlines</div>
  <div class="footerContent">Low fare tips</div>
</div>
<div class="holders">
  <div class="footerTitle">Site / Currency</div>
  <div class="select">
      <select name="country" id="">
          <option value="IN">India</option>
          <option value="AU">Australia</option>
      </select>
      <select name="currency" id="">
          <option value="inr">Indian Rupees</option>
          <option value="aud">Australian Dollar</option>
      </select>
  </div>
  <div class="select"></div>
</div>

  `
}
export default footer;
function Showdropdown(ele){
    let x=document.querySelector("#pop_div_search_bar_drop_off");
    if(x.className==="width-10 d-block")
      x.className="width-10 d-none";
      else
      x.className="width-10 d-block"
}


$(function() {   
    $('.datetimerange').daterangepicker({
         timePicker: true,
         timePickerIncrement: 30,
         locale: {
             format: 'MM/DD/YYYY h:mm A'
         }
     });
 });

 
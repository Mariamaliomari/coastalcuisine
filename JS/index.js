




const API = ("https://miriam-db-production.up.railway.app/menus")
document.addEventListener('DOMContentLoaded', () =>{


    const enroll = document.getElementById('enroll');
    enroll.addEventListener('click', clickAlert);
    
    function clickAlert() {
      alert('Join us now!');
    }

function emailSubmit(event){
  log.Content = `Email submitted Time Stamp: ${event.timeStamp}`;
  event.preventDefault();
}
const email=
document.getElementsByClassName("btn");
email.addEventListener(`submit, emailSubmit`)  
emailSubmit()  
})







  
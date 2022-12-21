fetch("https://miriam-db-production.up.railway.app/menus")
.then(response =>{
  return response.json()

  
}).then(data => {
  let ids= ["cake","drinks","fish","Seafood"]
  data.forEach(element => {
    let classes =ids.find(cl=> cl=== element.dish)
    let image= document.querySelector(`#${classes}`)
    image.src= element.image
  });

})




const API = ("https://miriam-db-production.up.railway.app/menus")
document.addEventListener('DOMContentLoaded', () =>{

// enroll
    const enroll = document.querySelector('#enroll');
    enroll.addEventListener('click', clickAlert);
    
    function clickAlert() {
      alert('Join us now!');
    }

    function emailSubmit(event){
      console.log(`Email submitted Time Stamp: ${event.timeStamp}`) ;
      event.preventDefault();
    }
    const email=
    document.getElementById("btn");
    email.addEventListener(`click`, emailSubmit)  
     
    })
    
    





  
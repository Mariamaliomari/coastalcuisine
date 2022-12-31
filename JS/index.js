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

document.addEventListener('DOMContentLoaded', () =>{

// enroll
    const enroll = document.querySelector('#enroll');
    enroll.addEventListener('click', clickAlert1);
    
    function clickAlert1() {
      alert('Join us now!');
    }
    // Subscribe
    const signUp = document.querySelector('#btn');
    console.log(signUp)
    signUp.addEventListener('click', clickAlert);
    
    function clickAlert() {
      alert('you subscribed for our menus!');
    }

    function emailSubmit(event){
      console.log(`Email submitted Time Stamp: ${event.timeStamp}`) ;
      event.preventDefault();
    }
   signUp.addEventListener(`click`, emailSubmit)  
     
    })
    const form = document.getElementById('form')
    form.addEventListener('submit', function(event){
      event.preventDefault();
      
      const username= document.getElementById('username').value 
      // console.log(username);

      const email= document.getElementById('email').value 
      // console.log(email);
;
      const  phone= document.getElementById('phone').value 
      // console.log(phone);

      const data ={ 
        name: username,
        email: email,
        phone : phone
        
      }

fetch ("http://localhost:3000/users", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
  },
  body: JSON.stringify(data),
}).then(response => {
  return response.json()
}).then(data=> {
  console.log(data)
  
})
    })
    





  
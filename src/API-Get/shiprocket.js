const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function shiprocket(){

    

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "ashish.kataria+hackathon@shiprocket.com",
  "password": "hackathon@2022"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://apiv2.shiprocket.in/v1/external/auth/login", requestOptions)
  .then(response => response.text())
  .then(result  => {
      
    console.log(result);
    result = JSON.parse(result);
    console.log(result['token']);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + result.token);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://apiv2.shiprocket.in/v1/external/courier/track/shipment/191686343", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


     })
  .catch(error => console.log('error', error));
  

  


}


console.log(localStorage.getItem("token"));



export default shiprocket;
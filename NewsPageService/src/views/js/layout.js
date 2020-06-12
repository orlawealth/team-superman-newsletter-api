$(document).ready(function(){
    $("#button").click(function(){
      var subEmail = document.querySelector("#email").value;
      let subLabel=document.querySelector("#subId");
      let endpoint ="http://localhost:11003/sendsubscription";
      fetch(endpoint,{
        method:"POST",
        body:JSON.stringify({email:subEmail}),
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(res=>{
        subLabel.innerText=res.message;
        console.log(res);
      }).catch(err=>{
        console.log(err);
        subLabel.innerText=res.message;
        console.log(res);
      })
    });
  });


  const form = document.getElementById('form');
  const contentDiv = document.getElementById('content-div');
  const input=document.getElementById("input");

  form.addEventListener('submit', logSubmit);

  function logSubmit(event) {
    contentDiv.innerHTML=`<p>${input.innerText}<br></br>${event.timeStamp}</p>`;

    // Save content to db.
    // Call Email sending service to send out new emails to subscribers
  }
  
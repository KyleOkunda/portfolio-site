window.onload = () => {
  let name = document.getElementById("demo-name");
  let email = document.getElementById("demo-email");
  let textarea = document.getElementById("demo-message");
  let sendBtn = document.getElementById("sendemail");
  let reset = document.getElementById("resetemail");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let emailtext = textarea.value;
    let namevalue = name.value;
    let emailvalue = email.value;

    if (emailtext == "" || emailtext.trim() == "") {
      alert("Please enter the message you wish to send.");
      return;
    } else if (namevalue == "" || namevalue.trim() == "") {
      alert("Please enter your name");
      return;
    } else if (emailvalue == "" || emailvalue.trim() == "") {
      alert("Please enter email.");
      return;
    } else if (!emailvalue.includes("@")) {
      alert("Please enter valid email.");
      return;
    }
    sendBtn.setAttribute("value", "Sending...");

    let params = {
      namevalue,
      emailvalue,
      emailtext,
    };
    emailjs
      .send("service_r20egd4", "template_jyxuyxd", params)
      .then((Response) => {
        sendBtn.setAttribute("value", "Send Message");
        textarea.value = "";
        name.value = "";
        email.value = "";
        alert("Thanks for reaching out. Email sent.");
      });
  });

  reset.addEventListener("click", () => {
    textarea.value = "";
    name.value = "";
    email.value = "";
  });
};

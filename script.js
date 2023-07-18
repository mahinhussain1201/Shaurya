var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let c = 0;

function showDetails() {
  alert("Thank you for registering");
  console.log("Name:" + document.getElementById("name").value);
  console.log("Email:" + document.getElementById("email").value);
  console.log("Password:" + document.getElementById("password").value);
  console.log("Mob. No.:" + document.getElementById("mob_No").value);
  console.log( "Gender:" + document.querySelector("input[type = radio]:checked").value);
  console.log("Sports:" + document.querySelector("input[type = checkbox]:checked").value);
  localStorage.setItem("count",c);
  c=localStorage.getItem("count");
  console.log("Users registered="+ ++c);
  print();
}

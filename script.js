function changeProfilePicture() {
  const input = document.getElementById("image-input");
  const preview = document.getElementById("image-preview");
  
  input.onchange = function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    reader.onload = function() {
      preview.src = reader.result;
    }
  }
  
  input.click();
}


function okbut(){
  document.getElementById("p1").innerHTML = document.getElementById("bio").value;
}

function gogo() {

  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value

  if (password === "123456" && name === "Ashot") {

    window.location.href = "ashbook.html";
  } else {
    alert("Incorrect password or username. Please try again.");
  }
};
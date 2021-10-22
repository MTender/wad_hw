function dropFunction() {
    console.log("test")
    let dropdown = document.getElementById('myDropdown');
    if (dropdown.style.display == "block"){
        dropdown.style.display="none";
    }
    else {
        dropdown.style.display="block";
    }
  }
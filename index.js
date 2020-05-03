var controller = (()=>{

  eventHandler = () => {
    document.addEventListener("load",generateNewPerson());
    document.getElementById("person").addEventListener("click",generateNewPerson);
  }

    generateNewPerson = () => {
      fetch("https://randomuser.me/api/")
      .then(result => {
        return result.json();
      })
      .then(data=> {
        console.log(data.results);
        displayPerson(data);
      })
    };

    displayPerson = (info) => {
      document.getElementById("image").src= `${info.results[0].picture.large}`
      document.getElementById("name").innerHTML = "NAME: " + info.results[0].name.first;
      document.getElementById("email").innerHTML = "EMAIL: " + info.results[0].email;
      document.getElementById("location").innerHTML = "LOCATION: " + info.results[0].location.country;

    }

  return {
    init: () => {
      console.log("App started");
      eventHandler();
    }
  }

})();

controller.init();

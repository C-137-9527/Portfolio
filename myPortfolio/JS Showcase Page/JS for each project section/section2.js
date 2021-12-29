// SECTION 2 WEATHER API

const city = document.querySelector(".city");
const degree = document.querySelector(".degree span");
const hum = document.querySelector(".humidity span");
const tempDescription = document.querySelector(".tempDescription");
const updateTime = document.querySelector(".updateTime");

// FETCH FUNCTION
const fetchData = () => {
  const api =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Vancouver%2C%20BC%2C%20CA?unitGroup=us&key=FA4AHGLAFEAMYZS7R7GRTSDJW";

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      const location = data.address;
      const { datetime, conditions, temp, humidity } = data.currentConditions;
      // SET HTML CONTENT
      updateTime.textContent = datetime;
      city.textContent = location;
      degree.textContent = temp;
      hum.textContent = humidity;
      tempDescription.textContent = conditions;
    })
    .catch((err) => alert(err.message))
    .finally();
};

// FETCH WEATHER DATA ON PAGE LOAD
window.addEventListener("load", fetchData);

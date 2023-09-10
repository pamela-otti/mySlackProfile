  // Get the current date and display it
  const currentDate = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const currentDateElement = document.querySelector('.todaysDate');
  currentDateElement.innerText = `Todays date is: ${dayOfWeek}`;


  const currentTime = Date.now();
  const currentTimeElement = document.querySelector('.currentTime');
  currentTimeElement.innerHTML = `The time is: ${currentTime} (in milliseconds)`;
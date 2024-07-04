function demeritPoints(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  let result;

  if (speed < speedLimit) {
    result = "Ok";
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
      result = "License suspended";
    } else {
      result = `Points: ${points}`;
    }
  }

  document.getElementById("result").textContent = result;
}

const carSpeed = parseFloat(prompt("Enter the car speed (km/h):"));
demeritPoints(carSpeed);

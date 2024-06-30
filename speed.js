function demeritPoints(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${points}`);
  }
}

const carSpeed = parseFloat(prompt("Enter the car speed (km/h):"));
demeritPoints(carSpeed);

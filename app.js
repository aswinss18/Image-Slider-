(function () {
  const images = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

  const buttons = document.querySelectorAll(".btn");
  const image = document.querySelector(".image");

  let counter = 0;
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        counter--;

        if (counter < 1) {
          counter = images.length;
        }
        image.src = `/img/${counter}.jpeg`;
      }
      if (button.classList.contains("btn-right")) {
        counter++;

        if (counter > images.length) {
          counter = 1;
        }
        image.src = `/img/${counter}.jpeg`;
      }
      console.log(counter);
    });
  });
})();

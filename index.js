const form = document.querySelector("form");
const button = document.querySelector("#btn");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const checkInputValues = () => {
  if (height.value.trim() !== "" && weight.value.trim() !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

height.addEventListener("change", checkInputValues);
weight.addEventListener("change", checkInputValues);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heightValue = Number(height.value);
  const weightValue = Number(weight.value);

  const BMI = (weightValue / (heightValue * heightValue)).toFixed(2);

  if (isNaN(heightValue) || heightValue === 0) {
    alert(`Please enter a valid height`);
  } else if (isNaN(weightValue) || weightValue === 0) {
    alert(`Please enter a valid weight`);
  } else {
    document.querySelector("#results").textContent = `${BMI}`;
  }
});

// height.addEventListener("change", () => {
//   if (height.value === "" && weight.value === "") {
//     button.disabled = true;
//   } else {
//     button.disabled = false;
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();

//       const heightValue = Number(height.value);
//       const weightValue = Number(weight.value);

//       const BMI = (weightValue / (heightValue * heightValue)).toFixed(2);

//       if (isNaN(heightValue) || heightValue === 0) {
//         alert(`please enter valid height`);
//       } else if (isNaN(weightValue) || weightValue === 0) {
//         alert(`please enter valid weight`);
//       } else {
//         document.querySelector("#results").textContent = `${BMI}`;
//       }
//     });
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const heightValue = Number(height.value);
//   const weightValue = Number(weight.value);

//   const BMI = (weightValue / (heightValue * heightValue)).toFixed(2);

//   if (isNaN(heightValue) || heightValue === 0) {
//     alert(`please enter valid height`);
//   } else if (isNaN(weightValue) || weightValue === 0) {
//     alert(`please enter valid weight`);
//   } else {
//     document.querySelector("#results").textContent = `${BMI}`;
//   }
// });

const bmiForm = document.querySelector("#bmi-calculator form");
const pulseForm = document.querySelector("#pulse-tracker form");
const bpForm = document.querySelector("#bp-tracker form");

const bmiResult = document.querySelector("#bmi-calculator .result");
const pulseResult = document.querySelector("#pulse-tracker .result");
const bpResult = document.querySelector("#bp-tracker .result");

bmiForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const weight = parseFloat(bmiForm.weight.value);
  const height = parseFloat(bmiForm.height.value);
  const bmi = weight / (height / 100 * height / 100);

  bmiResult.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;

  bmiForm.style.transform = "rotateY(180deg)";
});

pulseForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const pulse = parseFloat(pulseForm.pulse.value);

  pulseResult.innerHTML = `Your pulse is ${pulse} bpm`;

  pulseForm.style.transform = "rotateY(180deg)";
});

bpForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const systolic = parseFloat(bpForm.systolic.value);
  const diastolic = parseFloat(bpForm.diastolic.value);

  bpResult.innerHTML = `Your blood pressure is ${systolic}/${diastolic} mmHg`;

  bpForm.style.transform = "rotateY(180deg)";
});

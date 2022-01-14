const exp_table_phase_one = 1000000;
const exp_table_phase_two = 2000000;
let overlimit = "";

function get_percent_diff(current_percentage, target_percentage) {
  let current_per = current_percentage;
  let target_per = target_percentage;

  // if both are empty for whatever reason, return null
  if (current_per === null || target_per === null) return null;

  // if out of range, return a string
  if (current_per < 0 || target_per > 100 || target_per < current_per)
    return overlimit;
  // otherwise, return the percent difference
  else return target_per - current_per;
}

function calculate_experience() {
  const current_percentage = document.getElementById("curr-percent").value;
  const target_percentage = document.getElementById("tar-percent").value;
  const phase_select = document.getElementById("phase-table").value;
  const exp_needed_txt = document.getElementById("exp-needed");
  const runs_needed_txt = document.getElementById("runs-needed");

  switch (phase_select) {
    case "":
    case "phase-one":
      table = exp_table_phase_one;
      break;
    case "phase-two":
      table = exp_table_phase_two;
      break;
    default:
      exp_needed_txt.textContent = "The selected phase doesn't exist!";
      return;
  }

  const percent_diff = get_percent_diff(current_percentage, target_percentage);

  // exp diff = ((total) x (p% / 100))
  let exp_diff = table * (percent_diff / 100);

  if (percent_diff === null)
    exp_needed_txt.textContent = "An error has occurred. Please try again.";
  else if (percent_diff === overlimit)
    exp_needed_txt.textContent =
      "A limit has been overexceeded. Please try again.";
  // otherwise, display the text that is assigned to percent_diff
  else exp_needed_txt.textContent = exp_diff.toLocaleString();

  // runs needed
  let runs_needed = Math.floor(Math.random() * 100);
  runs_needed_txt.textContent = runs_needed.toLocaleString();
}

function ready() {
  document
    .getElementById("phase-table")
    .addEventListener("change", calculate_experience);
  calculate_experience();
}

document.addEventListener("DOMContentLoaded", ready);

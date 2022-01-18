for (let i = 0; i < research_list.ships.length; i++) {
  console.log(research_list.ships[i].type);
}

/* get the difference of the target percentage and current percentage */
function get_percent_diff(current_percentage, target_percentage) {
  let current_per = current_percentage;
  let target_per = target_percentage;

  // if one of them or both are empty for whatever reason, return null
  if (current_per === null || target_per === null) return null;

  // if out of range, return a empty string
  if (current_per < 0 || target_per > 100) return overlimit_txt;
  // otherwise, return the percent difference
  else return target_per - current_per;
}

/* calculates runs needed based on stage */
function get_runs_needed() {}

/* main function */
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
      // not likely to ever output unless something bad happens
      exp_needed_txt.textContent = "The selected phase doesn't exist!";
      return;
  }

  const percent_diff = get_percent_diff(current_percentage, target_percentage);

  // exp diff = ((total) x (p% / 100))
  let exp_diff = table * (percent_diff / 100);

  if (percent_diff === null)
    exp_needed_txt.textContent = "An error has occurred. Please try again.";
  else if (percent_diff === overlimit_txt)
    exp_needed_txt.textContent =
      "A limit has been overexceeded. Please try again.";
  // otherwise, display the text that is assigned to exp_diff
  else exp_needed_txt.textContent = exp_diff.toLocaleString();

  // runs needed
  let runs_needed = get_runs_needed();
  runs_needed_txt.textContent = runs_needed.toLocaleString();
}

/* when button is clicked, calls calculate_experience() */
function ready() {
  document
    .getElementById("phase-table")
    .addEventListener("change", calculate_experience);
  calculate_experience();
}

document.addEventListener("DOMContentLoaded", ready);

const exp_table_phase_one = [];

const exp_table_phase_two = [];

function get_total_exp(table, percentage) {
  if (percentage > 0 && percentage <= 100) {
    return table[percentage - 1];
  } else {
    return null;
  }
}

function get_exp_diff(table, current_percentage, target_percentage) {
  let current_exp = get_total_exp(table, current_percentage);
  let target_exp = get_total_exp(table, target_percentage);
  let percentage_diff = target_exp - current_exp;
  if (percentage_diff === null) return null;
  else return percentage_diff;
}

function calculate_experience() {
  const current_percentage = document.getElementById("curr-percent").value;
  const target_percentage = document.getElementById("tar-percent").value;
  const exp_needed_txt = document.getElementById("exp-needed");
  const phase_select = document.getElementById("phase_table");

  let table;
  switch (phase_select) {
    case "":
    case "phase_one":
      table = exp_table_phase_one;
      break;
    case "phase_two":
      table = exp_table_phase_two;
      break;
    default:
      exp_needed_txt.textContent = "Doesn't exist!";
      return;
  }

  const exp_diff = get_exp_diff(table, current_percentage, target_percentage);
  if (exp_diff === null) {
    exp_needed_txt.textContent = "Some Error Occurred :(";
  } else {
    exp_needed_txt.textContent = exp_diff.toLocaleString();
  }
}

function ready() {
  document
    .getElementById("phase_table")
    .addEventListener("change", calculate_experience);
  calculate_experience();
}

document.addEventListener("DOMContentLoaded", ready);

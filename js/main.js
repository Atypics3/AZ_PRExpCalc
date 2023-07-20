/**  get the difference of the target percentage and current percentage  **/
function get_percent_diff(current_percentage, target_percentage) {
	let current_per = current_percentage;
	let target_per = target_percentage;

	// if one of the inputs or both are empty, return null
	if (current_per === null || target_per === null) return null;

	// if out of range, return a empty string
	if (current_per > target_per || current_per > 100 || target_per < 0 || target_per > 100)
		return overlimit_txt;
		
	// otherwise, return the percent difference
	else return target_per - current_per;
}

/* main function */
function calculate_experience() {
	const current_percentage = document.getElementById("curr_percent").value;
	const target_percentage = document.getElementById("tar_percent").value;
	const phase_select = document.getElementById("phase_table").value;
	const exp_needed_txt = document.getElementById("exp_needed");
	const total_exp_collected_txt = document.getElementById(
		"total_exp_collected"
	);
	const runs_needed_txt = document.getElementById("runs_needed");

	switch (phase_select) {
		case "phase_one_PR":
			table = exp_table_phase_one_PR;
			break;

		case "phase_two_PR":
			table = exp_table_phase_two_PR;
			break;

		case "phase_one_DE":
			table = exp_table_phase_one_DE;
			break;

		case "phase_two_DE":
			table = exp_table_phase_two_DE;
			break;
		default:
			// not likely to ever output unless something is tampered with
			exp_needed_txt.textContent = "The selected phase doesn't exist!";
			return;
	}

	// percent_diff gets the percent difference of the current percentage and the target percentage
	const percent_diff = get_percent_diff(current_percentage, target_percentage);

	// formula: exp diff = ((total) x (p% / 100))
	let exp_diff = table * (percent_diff / 100);

	if (percent_diff === null)
		exp_needed_txt.textContent = "An error has occurred. Please try again.";
	else if (percent_diff === overlimit_txt)
		exp_needed_txt.textContent =
			"A limit has been overexceeded. Please try again.";
	// otherwise, display the text that is assigned to exp_diff
	else exp_needed_txt.textContent = exp_diff.toLocaleString();

	// runs needed
	let total_exp_per_run = get_exp_per_run();
	// approximate to at most, one decimal place
	let runs_needed = (exp_diff / total_exp_per_run).toFixed(1);

	// if high efficiency plan is checked or not
	const high_eff_plan_check = document.querySelector("#high_eff_plan");
	if (high_eff_plan_check.checked === true) runs_needed /= 2;

	runs_needed_txt.textContent = runs_needed.toLocaleString();

	// total exp collected per run
	if (high_eff_plan_check.checked === true) total_exp_per_run *= 2;

	total_exp_collected_txt.textContent = total_exp_per_run.toLocaleString();
}

/* when button is clicked, calls calculate_experience() */
function ready() {
	document
		.getElementById("phase_table")
		.addEventListener("change", calculate_experience);
	calculate_experience();
}

document.addEventListener("DOMContentLoaded", ready);

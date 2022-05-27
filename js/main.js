/**  get the difference of the target percentage and current percentage  **/
function get_percent_diff(current_percentage, target_percentage) {
	let current_per = current_percentage;
	let target_per = target_percentage;

	// if one of the inputs or both are empty, return null
	if (current_per === null || target_per === null) return null;

	// if out of range, return a empty string
	if (current_per < 0 || target_per > 100) return overlimit_txt;
	// otherwise, return the percent difference
	else return target_per - current_per;
}

/** calculates the EXP obtained per run based on stage 12-1,
  may overhaul at one point or another **/
function get_exp_per_run() {
	// needs 6 battles in order for boss node to spawn in
	let node_requirement = 6,
		total_exp = 0;

	// assuming optimal outcome for the average run
	const happy_exp_bonus = 1.2;
	const num_of_ships = document.getElementById("num-of-ships").value;

	// accounts for getting a S rank for all battles
	const nodeList = [900, 990, 1080];
	const BF_exp = 1315.2;
	const exp_mode_selection = document.getElementById("exp-mode-select").value;

	switch (exp_mode_selection) {
		case "random-mode":
			// randomized method, good enough in terms of how nodes behave on the map (set by default)
			for (let i = 0; i < node_requirement; ++i) {
				let randomNode = Math.floor(Math.random() * 3);
				total_exp += nodeList[randomNode] * happy_exp_bonus * num_of_ships;
			}
			break;

		case "optimal-mode":
			// exp obtained for battling 3 small fleet enemy nodes
			total_exp = nodeList[0] * 3 * happy_exp_bonus * num_of_ships;

			// exp obtained for battling 2 medium fleet enemy nodes
			total_exp += nodeList[1] * 2 * happy_exp_bonus * num_of_ships;

			// exp obtained for battling 1 heavy fleet enemy node
			total_exp += nodeList[2] * happy_exp_bonus * num_of_ships;
			break;
	}

	// exp obtained for battling 1 boss fleet enemy node
	total_exp += BF_exp * happy_exp_bonus * num_of_ships;

	return total_exp;
}

/* main function */
function calculate_experience() {
	const current_percentage = document.getElementById("curr-percent").value;
	const target_percentage = document.getElementById("tar-percent").value;
	const phase_select = document.getElementById("phase-table").value;
	const exp_needed_txt = document.getElementById("exp-needed");
	const runs_needed_txt = document.getElementById("runs-needed");

	switch (phase_select) {
		case "":

		case "phase-one-PR":
			table = exp_table_phase_one;
			break;

		case "phase-two-PR":
			table = exp_table_phase_two;
			break;

		case "phase-one-DE":
			table = exp_table_phase_one_decisive;
			break;

		case "phase-two-DE":
			table = exp_table_phase_two_decisive;
			break;
		default:
			// not likely to ever output unless something bad happens
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
	const high_eff_plan_check = document.querySelector("#high-eff-plan");
	if (high_eff_plan_check.checked === true) runs_needed /= 2;

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

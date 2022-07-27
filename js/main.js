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
		total_exp = 0,
		nodeList = [];

	// bonuses for each stage clear
	const flagship_bonus = 1.5; // only applies to main fleet
	const mvp_bonus = 2;
	const s_rank_bonus = 1.2;
	const num_of_ships = document.getElementById("num_of_ships").value;

	// getting node EXP array for chosen stage
	// goes from small fleet, medium fleet, heavy fleet, boss fleet
	const world_table_selection = document.getElementById("world_table").value;
	switch (world_table_selection) {
		case "eleven_one":
			nodeList = Array.from(world_data.eleven_one);
			break;

		case "twelve_one":
			nodeList = Array.from(world_data.twelve_one);
			break;
	}

	const exp_mode_selection = document.getElementById("exp_mode_select").value;
	switch (exp_mode_selection) {
		case "random_mode":
			// randomized method, good enough in terms of how nodes behave on the map (set by default)
			for (let i = 0; i < node_requirement; ++i) {
				let randomNode = Math.floor(Math.random() * 3);
				// total exp includes number of ships + MVP + S rank bonus for each ship
				let MVP = nodeList[randomNode] * 2;
				total_exp +=
					nodeList[randomNode] * (num_of_ships - 1) + MVP * s_rank_bonus;
			}

			// exp obtained for battling 1 boss fleet enemy node
			total_exp +=
				nodeList[3] * (num_of_ships - 1) +
				nodeList[3] * mvp_bonus * s_rank_bonus;
			break;

		case "optimal_mode":
			// exp obtained for battling 3 small fleet enemy nodes
			total_exp += nodeList[0] * 3 * (num_of_ships - 1) * s_rank_bonus; // for normal exp
			total_exp += nodeList[0] * mvp_bonus * s_rank_bonus; // for mvp exp

			// exp obtained for battling 2 medium fleet enemy nodes
			total_exp += nodeList[1] * 2 * (num_of_ships - 1) * s_rank_bonus;
			total_exp += nodeList[1] * mvp_bonus * s_rank_bonus;

			// exp obtained for battling 1 heavy fleet enemy node
			total_exp += nodeList[2] * (num_of_ships - 1) * s_rank_bonus;
			total_exp += nodeList[2] * mvp_bonus * s_rank_bonus;

			// exp obtained for battling 1 boss fleet enemy node
			total_exp += nodeList[3] * (num_of_ships - 1) * s_rank_bonus;
			total_exp += nodeList[3] * mvp_bonus * s_rank_bonus;
			break;
	}
	console.log(total_exp);
	return total_exp;
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
			table = exp_table_phase_one;
			break;

		case "phase_two_PR":
			table = exp_table_phase_two;
			break;

		case "phase_one_DE":
			table = exp_table_phase_one_decisive;
			break;

		case "phase_two_DE":
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

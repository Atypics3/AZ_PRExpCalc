/** calculates the EXP obtained per run,
  may overhaul at one point or another **/
  function get_exp_per_run() {
	// bonuses for each stage clear
	const flagship_bonus = 1.5; // only applies to main fleet sleep in flagship (middle slot with a flag icon) position
	const mvp_bonus = 2;
	const very_happy_bonus = 1.2;
	const s_rank_bonus = 1.2;

	let num_of_ships = document.getElementById("num_of_ships").value;
	const very_happy_bonus_check = document.querySelector("#very_happy_bonus");

	// getting node EXP array for chosen stage
	// table format goes from small fleet, medium fleet, heavy fleet, boss fleet
    let node_list = [];
	const world_table_selection = document.getElementById("world_table").value;
	switch (world_table_selection) {
		case "eleven_one":
			node_list = Array.from(world_data.eleven_one.stage_exp);
			break;

		case "eleven_four":
			node_list = Array.from(world_data.eleven_four.stage_exp);
			break;

		case "twelve_one":
			node_list = Array.from(world_data.twelve_one.stage_exp);
			break;

		case "twelve_four":
			node_list = Array.from(world_data.twelve_four.stage_exp);
			break;

		case "thirteen_four":
			node_list = Array.from(world_data.thirteen_four.stage_exp);
			break;
	}

	/* behavior of exp calculations:
	 https://docs.google.com/spreadsheets/d/1nODpn5RiumyiEYKXVzUh3DGbget0bT715Bsd27vfyfo/edit?usp=sharing
	 tldr; ~1% for SF, ~47% for MF, ~52% for LF
	*/

	// determines conditions in which exp is rewarded
	const fleet_type = document.getElementById("fleet_type").value;

	if (num_of_ships > 1) 
		nums_of_ships = num_of_ships - 1; // MVP calculated separately

	let pos = 0, times_run = 6, mvp_exp = 0, total_exp = 0;

	if (fleet_type === "frontline") {
		for (let i = 0; i < times_run; i++) {
            pos = random_pick(values, weight_table);
			 total_exp += node_list[pos] * num_of_ships * s_rank_bonus;
             mvp_exp += node_list[pos] * mvp_bonus * s_rank_bonus;
		}

		// exp obtained for battling 1 boss fleet enemy node
		total_exp += node_list[3] * num_of_ships * s_rank_bonus;
		total_exp += node_list[3] * mvp_bonus * s_rank_bonus;

	} else if (fleet_type === "backline") {
		for (let i = 0; i < 6; i++) {
            pos = random_pick(values, weight_table);
			total_exp += node_list[pos] * num_of_ships * s_rank_bonus;
			mvp_exp += node_list[pos] * mvp_bonus * s_rank_bonus * flagship_bonus;
		}

		// exp obtained for battling 1 boss fleet enemy node
		total_exp += node_list[3] * num_of_ships * s_rank_bonus;
		total_exp += node_list[3] * mvp_bonus * s_rank_bonus * flagship_bonus;
	}


    // exp obtained if ships' morale is very happy (1.2x exp)
	if (very_happy_bonus_check.checked === true) {
		total_exp *= very_happy_bonus;
	}

    // adding up the total amount of exp earned at the end of the run (7 battles total)
    total_exp += mvp_exp;

	return total_exp;
}
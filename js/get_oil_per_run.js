function get_oil_per_run() {
    let oil_cost = 0;
    // from get_exp_per_run.js
    const world_table_selection = document.getElementById("world_table").value;
    switch(world_table_selection){
        case "eleven_one":
            oil_cost = world_data.eleven_one.oil_per_run;
            break;
        
        case "eleven_four":
            oil_cost = world_data.eleven_four.oil_per_run;
            break;

        case "twelve_one":
            oil_cost = world_data.twelve_one.oil_per_run;
            break;

        case "twelve_four":
            oil_cost = world_data.twelve_four.oil_per_run;
             break;

        case "thirteen_four":
            oil_cost = world_data.thirteen_four.oil_per_run;
            break;
    }
    return oil_cost;
}

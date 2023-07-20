// a bit janky but it'll work for now.

const exp_table_phase_one_PR = 1000000;
const exp_table_phase_two_PR = 2000000;
const exp_table_phase_one_DE = 1200000;
const exp_table_phase_two_DE = 2400000;

let overlimit_txt = "";

// abbreviations are as follows:
// Types:
// PR = Priority
// DE = Decisive
//
// Factions (alphabetical list):
// DGE = Dragon Empery
// EU = Eagle Union
// IL = Iris Libre
// IB = Iron Blood
// NP = Northern Parliament
// RN = Royal Navy
// SE = Sakura Empire
// SDE = Sardegna Empire
// VD = Vichya Dominion

const research_list = {
	series_one: [
		{
			name: "Neptune",
			type: "PR",
			faction: "RN",
		},

		{
			name: "Monarch",
			type: "PR",
			faction: "RN",
		},

		{
			name: "Ibuki",
			type: "PR",
			faction: "SE",
		},

		{
			name: "Izumo",
			type: "PR",
			faction: "SE",
		},

		{
			name: "Roon",
			type: "PR",
			faction: "IB",
		},

		{
			name: "Saint Louis",
			type: "PR",
			faction: "IL",
		},
	],

	series_two: [
		{
			name: "Seattle",
			type: "PR",
			faction: "EU",
		},

		{
			name: "Georgia",
			type: "PR",
			faction: "EU",
		},

		{
			name: "Kitakaze",
			type: "PR",
			faction: "SE",
		},

		{
			name: "Azuma",
			type: "DE",
			faction: "SE",
		},

		{
			name: "Friedrich der Große",
			type: "DE",
			faction: "IB",
		},

		{
			name: "Gascogne",
			type: "PR",
			faction: "VD",
		},
	],

	series_three: [
		{
			name: "Chesire",
			type: "PR",
			faction: "RN",
		},

		{
			name: "Drake",
			type: "DE",
			faction: "RN",
		},

		{
			name: "Mainz",
			type: "PR",
			faction: "IB",
		},

		{
			name: "Odin",
			type: "PR",
			faction: "IB",
		},

		{
			name: "Champagne",
			type: "PR",
			faction: "IL",
		},
	],

	series_four: [
		{
			name: "Anchorage",
			type: "PR",
			faction: "EU",
		},

		{
			name: "Hakuryuu",
			type: "DE",
			faction: "SE",
		},

		{
			name: "Ägir",
			type: "DE",
			faction: "IB",
		},

		{
			name: "August von Parseval",
			type: "PR",
			faction: "IB",
		},

		{
			name: "Marco Polo",
			type: "PR",
			faction: "SDE",
		},
	],

	series_five: [
		{
			name: "Plymouth",
			type: "DE",
			faction: "RN",
		},

		{
			name: "Prinz Rupprecht",
			type: "PR",
			faction: "IB",
		},

		{
			name: "Harbin",
			type: "DE",
			faction: "DGE",
		},

		{
			name: "Chkalov",
			type: "DE",
			faction: "NP",
		},

		{
			name: "Brest",
			type: "PR",
			faction: "RN",
		},
	],

	series_six: [
		{
			name: "Kearsarge",
			type: "PR",
			faction: "EU",
		},

		{
			name: "Shimanto",
			type: "DE",
			faction: "SE",
		},

		{
			name: "Felix Schultz",
			type: "DE",
			faction: "IB",
		},

		{
			name: "Hindenburg",
			type: "PR",
			faction: "IB",
		},

		{
			name: "Flandre",
			type: "DE",
			faction: "VD",
		},
	],
};

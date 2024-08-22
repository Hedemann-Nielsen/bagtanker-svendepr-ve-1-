import { convertLetters } from "../Utils/convertLetters.jsx";

export const MenuData = [
	{
		id: 1,
		title: "forside",
		url: "/home",
	},
	{
		id: 2,
		title: "produkter",
		url: `/katogori/${convertLetters("boller")}`,
	},
	{
		id: 3,
		title: "nyheder",
		url: "/news",
	},
	{
		id: 4,
		title: "kontakt",
		url: "/contact",
	},
	{
		id: 5,
		title: "login",
		url: "/login",
	},
];

export const SubMenu = [
	{
		id: 1,
		title: "boller",
		url: `/katogori/${convertLetters("boller")}`,
	},
	{
		id: 2,
		title: "baguettes",
		url: `/katogori/${convertLetters("baguettes")}`,
	},
	{
		id: 3,
		title: "franskbrød",
		url: `/katogori/${convertLetters("franskbrød")}`,
	},
	{
		id: 4,
		title: "kager",
		url: `/katogori/${convertLetters("kager")}`,
	},
	{
		id: 5,
		title: "rugbrød",
		url: `/katogori/${convertLetters("rugbrød")}`,
	},
];

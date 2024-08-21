import { convertLetters } from "../Utils/convertLetters.jsx";

// Statisk data til navigation, bruges på alle sider

export const MenuData = [
	{
		title: "forside",
		url: "/home",
	},
	{
		title: "produkter",
		url: "/produkter",
	},
	{
		title: "nyheder",
		url: "/news",
	},
	{
		title: "kontakt",
		url: "/contact",
	},
	{
		title: "login",
		url: "/login",
	},
];

export const SubMenu = [
	{
		title: "rundstykker",
		url: `/produkter/${convertLetters("rundstykker")}`,
	},
	{
		title: "baguettes",
		url: `/produkter/${convertLetters("baguettes")}`,
	},
	{
		title: "franskbrød",
		url: `/produkter/${convertLetters("franskbrød")}`,
	},
	{
		title: "kager",
		url: `/produkter/${convertLetters("kager")}`,
	},
	{
		title: "rugbrød",
		url: `/produkter/${convertLetters("rugbrød")}`,
	},
];

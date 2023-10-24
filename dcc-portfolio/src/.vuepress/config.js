const { description } = require("../../package");

module.exports = {
	base: "/",
	title: "AWSCC - Cloud Computing Members",
	description: description,

	head: [
		["meta", { name: "theme-color", content: "#9C5CAA" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		[
			"meta",
			{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		],
		[
			"link",
			{
				rel: "icon",
				type: "image/png",
				href: "https://raw.githubusercontent.com/AWSCC-PUPMNL-Cloud-Computing/assets/main/Portfolio-Site/DCC-LOGO-Portfolio.png",
			},
		],
	],
	themeConfig: {
		logo: "https://raw.githubusercontent.com/AWSCC-PUPMNL-Cloud-Computing/assets/main/Portfolio-Site/DCC-LOGO-Portfolio.png",
		repo: "",
		editLinks: true,
		lastUpdated: true,
		nav: [
			{
				text: "Members",
				link: "/members/",
			},
			{
				text: "Projects",
				link: "/projects/",
			},
			{
				text: "GitHub",
				link: "#",
			},
		],
		sidebar: {
			"/members/": [
				{
					title: "Members",
					collapsable: false,
					children: [
						{
							title: "Head and Co-Head",
							children: [
								"alf",
							],
						},
						{
							title: "Senior Cloud Architects",
							children: [],
						},

						{
							title: "Junior Cloud Architects",
							children: [],
						},
					],
				},
			],
		},
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};


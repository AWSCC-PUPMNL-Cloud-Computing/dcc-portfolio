const { description } = require("../../package");

module.exports = {
	base: "/",
	title: "AWSCC - PUP Manila: Cloud Computing",
	description: description,

	head: [
		["meta", { name: "theme-color", content: "#9C5CAA" }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta",{ name: "apple-mobile-web-app-status-bar-style", content: "black" },],
		["link",{rel: "icon",type: "image/png",href: "https://raw.githubusercontent.com/AWSCC-PUPMNL-Cloud-Computing/assets/main/Portfolio-Site/DCC-LOGO-Portfolio.png",},],
	],
	themeConfig: {
		logo: "https://raw.githubusercontent.com/AWSCC-PUPMNL-Cloud-Computing/assets/main/Portfolio-Site/DCC-LOGO-Portfolio.png",
		repo: "",
		nav: [
			{
				text: "DCC",
				link: "/dcc/",
			},
			{
				text: "GitHub",
				link: "https://github.com/AWSCC-PUPMNL-Cloud-Computing",
			},
		],
		sidebar: [
			{
				title: "Projects",
				collapsable: false,
				children: [
					{
						title: "Department Projects",
						children: [
							"/dcc/projects/csv-json",
						],
					},
					{
						title: "Personal Projects",
						children: [],
					}
				]
			},
			{	
				title: "Members",
				collapsable: false,
				base: '/dcc/members/',
				children: [
					{
						title: "Head and Co-Head",
						children: [],
					},
					{
						title: "Senior Cloud Architects",
						children: [
							"/dcc/members/kevin-amparado",
							"/dcc/members/jiro-agad",
						],
					},
					{
						title: "Junior Cloud Architects",
						children: [
							"/dcc/members/aidan-tiu",
							"/dcc/members/rainier-reyes",
						],
					},
					{
						title: "Cloud Guru",
						children: [
							"/dcc/members/alf",
						]
					},
				]
			},
		],
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};


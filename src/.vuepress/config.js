const { description } = require("../../package");

module.exports = {
    base: "/",
    title: "AWSCC - PUP Manila: Cloud Computing",
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
                        children: ["/dcc/projects/csv-json"],
                    },
                    {
                        title: "Personal Projects",
                        children: [],
                    },
                ],
            },
            {
                title: "Members",
                collapsable: false,
                base: "/dcc/members/",
                children: [
                    {
                        title: "Head and Co-Head",
                        children: ["/dcc/members/rafael-miguel"],
                    },
                    {
                        title: "Senior Cloud Architects",
                        children: [
                            "dcc/members/anthony-hinay",
                            "dcc/members/jericho-delrosario",
                            "/dcc/members/jiro-agad",
                            "/dcc/members/kevin-amparado",
                        ],
                    },
                    {
                        title: "Junior Cloud Architects",
                        children: [
                            "/dcc/members/aidan-tiu",
                            "/dcc/members/alvin-feliciano",
                            "/dcc/members/bea-romero",
                            "/dcc/members/bryce-madelo",
                            "/dcc/members/cydrick-cortel",
                            "/dcc/members/cyrus-jimenez",
                            "/dcc/members/daniella-simara",
                            "/dcc/members/dion-sobrevilla",
                            "/dcc/members/francine-jara",
                            "/dcc/members/gaile-espinosa",
                            "/dcc/members/glenn-gabrillo",
                            "/dcc/members/jeiren-mondejar",
                            "/dcc/members/jerald-adlawon",
                            "/dcc/members/jericho-marquez",
                            "/dcc/members/joyrel-baladjay",
                            "/dcc/members/kaysea-bognot",
                            "/dcc/members/michael-velasquez",
                            "/dcc/members/neilxander-sabulao",
                            "/dcc/members/paul-morada",
                            "/dcc/members/rainier-reyes",
                            "/dcc/members/rhome-saringayat",
                            "/dcc/members/tessa-deguzman",
                            "/dcc/members/sheenamae-delima",
                        ],
                    },
                    {
                        title: "Cloud Guru",
                        children: ["/dcc/members/1alf"],
                    },
                ],
            },
        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};


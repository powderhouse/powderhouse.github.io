const fs = require("fs");

exports.data = {
	layout: "default",
};

exports.render = function (data) {
	let reviewSections = [
		{ slug: "intro", title: "2020 in review", header: false },
		{ slug: "movement", title: "Movement", header: true },
		{ slug: "#random", title: "#random", header: true },
		{ slug: "algebra", title: "Reclaiming Algebra", header: true },
		{ slug: "lines-of-inquiry", title: "Lines of inquiry", header: true },
		{
			slug: "projects-and-prototypes",
			title: "Projects & prototypes",
			header: true,
		},
		{ slug: "administrivia", title: "Administrivia", header: true },
		{ slug: "circles", title: "Circles", header: true },
		{ slug: "sounds", title: "Sounds", header: true },
		{ slug: "sights", title: "Sights", header: true },
		{
			slug: "meditations-on-our-mission",
			title: "Meditations on our mission",
			header: true,
		},
	];

	let reviewSectionsHTML = reviewSections.map(
		(s) => `
		<section id='${s.slug}'>
			${s.header ? `<h1>${s.title}</h1>` : ""}
			${fs.readFileSync("./review-sections/" + s.slug + ".html")}
		</section>`
	);

	return reviewSectionsHTML.join("\n");
};

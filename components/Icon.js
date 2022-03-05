let fontAwesomeClasses = {
	twitter: ["fab", "fa-twitter", "Powderhouse Twitter"],
	facebook: ["fab", "fa-facebook", "Powderhouse Facebook"],
	instagram: ["fab", "fa-instagram", "Powderhouse Instagram"],
	youtube: ["fab", "fa-youtube", "Powderhouse Youtube"],
	linkedin: ["fab", "fa-linkedin", "Powderhouse Linkedin"],
	website: ["fab", "fa-browser", "Powderhouse Website"],
};

function Icon({ icon, fixedWidth }) {
	let classString = fontAwesomeClasses[icon].slice(0, 2).join(" ");
	let altText = fontAwesomeClasses[icon][2];
	return (
		<i
			className={classString + (fixedWidth ? "fa-fw" : "")}
			title={altText}
		></i>
	);
}

export default Icon;

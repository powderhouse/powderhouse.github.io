
let fontAwesomeClasses = {
	twitter: ["fab", "fa-twitter"],
	facebook: ["fab", "fa-facebook"],
	instagram: ["fab", "fa-instagram"],
	youtube: ["fab", "fa-youtube"],
	linkedin: ["fab", "fa-linkedin"],
	website: ["fab", "fa-browser"],
};

function Icon({ icon, fixedWidth }) {
	let classString = fontAwesomeClasses[icon].join(" ");
	return <i className={classString + (fixedWidth ? "fa-fw" : "")}></i>;
}

export default Icon;

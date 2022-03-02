import styled from "styled-components";

let fontAwesomeClasses = {
	twitter: ["fab", "fa-twitter", "Go to Powderhouse Twitter"],
	facebook: ["fab", "fa-facebook", "Go to Powderhouse Facebook"],
	instagram: ["fab", "fa-instagram", "Go to Powderhouse Instagram"],
	youtube: ["fab", "fa-youtube", "Go to Powderhouse Youtube"],
	linkedin: ["fab", "fa-linkedin", "Go to Powderhouse Linkedin"],
	website: ["fab", "fa-browser", "Go to Powderhouse Website"],
};

function Icon({ icon, fixedWidth }) {
	let classString = fontAwesomeClasses[icon].slice(0,2).join(" ");
	let altText = fontAwesomeClasses[icon][2];
	return <i className={classString + (fixedWidth ? "fa-fw" : "")} alt={altText}></i>;
}

export default Icon;

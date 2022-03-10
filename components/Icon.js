import SVG from "react-inlinesvg";

let fontAwesomeInfo = {
	twitter: <SVG src="/media/twitter.svg" title="Powderhouse Twitter" />,
	facebook: <SVG src="/media/facebook.svg" title="Powderhouse Facebook" />,
	instagram: <SVG src="/media/instagram.svg" title="Powderhouse Instagram" />,
	youtube: <SVG src="/media/youtube.svg" title="Powderhouse Youtube" />,
	linkedin: <SVG src="/media/linkedin.svg" title="Powderhouse Linkedin" />,
};

function Icon({ icon }) {
	return fontAwesomeInfo[icon];
}

export default Icon;

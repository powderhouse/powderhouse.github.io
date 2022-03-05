import { asteriskSVG } from "../site-data.js";
import AsteriskContainer from "../components/AsteriskContainer.js";

// const AsteriskContainer = dynamic(() =>
// 	import("../components/AsteriskContainer.js")
// );

let Asterisk = (props) => {
	return (
		<AsteriskContainer
			$type={props.$type}
			$color={props.$color ? props.$color : "--off-black"}
		>
			{asteriskSVG()}
		</AsteriskContainer>
	);
};

export default Asterisk;

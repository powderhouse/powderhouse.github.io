import styled from "styled-components";

let StyledDiv = styled.div`
	border: black dotted 1px;
	grid-column: span 3;
`;

function PersonCard(props) {
	return <StyledDiv {...props} />;
}

export default PersonCard;

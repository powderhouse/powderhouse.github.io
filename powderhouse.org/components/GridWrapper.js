import styled from "styled-components";

let GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, [col-start] 1fr);
	gap: 24px;
`;

export default GridWrapper;
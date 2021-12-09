import styled from 'styled-components';

function GridOverlay() {
	return (
		<Overlay>
			<Container>
				<Grid>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
					<Column/>
				</Grid>
			</Container>
		</Overlay>
	);
}

let Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 100vh;
`
let Container = styled.div`
	margin-left: auto;
	margin-right: auto;
`

let Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 1rem;
	min-height: 100vh;
`

let Column = styled.div`
	display: block;
	background-color: rgba(255,105,180,.1);
	min-height: 100vh;
`
export default GridOverlay;
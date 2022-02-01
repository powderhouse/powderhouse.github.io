import styled from "styled-components";
import { sizeToVerticalGridInRem, Asterisk, Div } from "../components/global";

let StyledDiv = styled.div`
	grid-column: span 3;
	font-size: 1rem;
`;

let HeadshotDiv = styled.div`
	height: ${sizeToVerticalGridInRem(150)}rem;
	width: 150px;
	overflow: hidden;
`;

let Headshot = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
	margin-bottom: 1.3rem;
`;

let Name = styled.h3`
	font-size: 1rem;
`;

let Years = styled.div``;

let Title = styled.p``;

let Links = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	& a {
		text-decoration: none;
	}
`;

let PersonLi = styled.li`
	padding-left: calc(1.25 * 1.3rem);
	position: relative;
`;

let PersonBio = styled(Div)``;

let getHeadshotURL = function (headshotObject) {
	return headshotObject.data.attributes.formats == null
		? headshotObject.data.attributes.url
		: headshotObject.data.attributes.formats.thumbnail.url;
};

function PersonCard({ type, headshot, name, title, tenure, links, bio }) {
	return (
		<StyledDiv>
			{type == "Staff" ? (
				<HeadshotDiv>
					<Headshot
						src={getHeadshotURL(headshot)}
						alt={headshot.alternativeText}
					/>
				</HeadshotDiv>
			) : (
				""
			)}
			<Name>{name}</Name>
			{/*<Title>{title}</Title>*/}
			{["Staff", "Alumni"].includes(type) ? (
				<Years>
					{tenure.start}–{tenure.end}
				</Years>
			) : (
				""
			)}
			{type == "Advisors" ? <PersonBio markdown>{bio}</PersonBio> : ""}
			<Links>
				{links.map((link, index) => (
					<a key={index} href={link.Link}>
						<PersonLi>
							<Asterisk key={index} type="Default" />
							{link.LinkText}
						</PersonLi>
					</a>
				))}
			</Links>
		</StyledDiv>
	);
}

export default PersonCard;

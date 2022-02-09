import styled from "styled-components";
import { sizeToVerticalGridInRem, Asterisk, Div, ShiftBy } from "../components/global";
import Icon from "../components/Icon.js";

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
	display:flex;
`;

let PersonLi = styled.li`
	padding-right:calc(var(--gap) / 2);
`;

let PersonBio = styled(Div)``;

let IconListItem = ({ className, href, icon }) => {
  return (
    <PersonLi className={className}>
      <ShiftBy x={0} y={0}>
        <a href={href}>
          <Icon icon={icon} />
        </a>
      </ShiftBy>
    </PersonLi>
  );
};

let getHeadshotURL = function (headshotObject) {
	return headshotObject.data.attributes.formats == null
		? headshotObject.data.attributes.url
		: headshotObject.data.attributes.formats.thumbnail.url;
};

function PersonCard({ type, headshot, name, title, tenure, links, bio }) {
	let sortedLinks = links.sort(function(first, second) { 
		return second.LinkText.toLowerCase() < first.LinkText.toLowerCase() 
			? 1 
			: (second.LinkText.toLowerCase() > first.LinkText.toLowerCase() 
				? -1 
				: 0) 
		});

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

			{type == "Alumni" 
				// When adding in the name, 
				// link it to the first link in LinkList for alumni 
				// and link to only a "Website" link (when present) for people with other roles
				? <Name><a href={sortedLinks[0]}>{name}</a></Name> 
				: (sortedLinks.some(e => e.LinkText.toLowerCase()=="website")
					? <Name><a href={sortedLinks.find(e => e.LinkText.toLowerCase()=="website")}>{name}</a></Name>
					: <Name>{name}</Name>)
			}
			
			{/*<Title>{title}</Title>*/}
			
			{["Staff", "Alumni"].includes(type) ? (
				<Years>
					{tenure.start}–{tenure.end ? tenure.end : "present"}
				</Years>
			) : (
				""
			)}

			{type == "Advisors" ? <PersonBio markdown>{bio}</PersonBio> : ""}

			<Links>
				{["Staff","Advisors"].includes(type) ? sortedLinks.map((link, index) => (
					link.LinkText != "Website" ?
                    <IconListItem
                        href={link.Link}
                        key={index}
                        icon={link.LinkText.toLowerCase()}
                    ></IconListItem> : ""
				)) : ""}
			</Links>

		</StyledDiv>
	);
}

export default PersonCard;
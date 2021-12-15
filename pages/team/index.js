import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GridOverlay from '../../components/GridOverlay';

import { 
	baseGrid,
	PageContainer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
	PageIntro,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	Highlight,
} from '../../components/global.js';

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function TeamPage({teamPage,teamCards}) {
    return (
        <PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='purple' color='off-black'>
			<PageHeader>{teamPage.data.attributes.PageSplash.PageHeader}</PageHeader>
			<PageTableOfContents>
				{teamPage.data.attributes.PageSection.map(n=>
					<PageTOCListItem>
						<PageTOCLink href={"#"+n.id}>{n.SectionHeader}</PageTOCLink>
					</PageTOCListItem>
					)
				}
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
				{teamPage.data.attributes.PageSplash.PageIntro}
			</ReactMarkdown>
		</PageIntro>

		<PageSection id={teamPage.data.attributes.PageSection[0].id} isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>{teamPage.data.attributes.PageSection[0].SectionHeader}</SectionHeader>
			<WidePageSectionContent>
				{teamCards.data.map(n => 
					n.attributes.Role == "Staff" ?
						(<PersonCard>
							<PersonHeadshotDiv>	
								<PersonHeadshot src={n.attributes.Headshot.data.attributes.formats == null ? n.attributes.Headshot.data.attributes.url : n.attributes.Headshot.data.attributes.formats.small.url} alt={n.attributes.Headshot.data.attributes.alternativeText} />
							</PersonHeadshotDiv>
							<PersonName>{n.attributes.Name}</PersonName>
							<PersonTitle>{n.attributes.Title}</PersonTitle>
							<PersonLinks>
								{n.attributes.LinkList.map(l => <a href={l.Link}><li>{l.LinkText}</li></a>)}
							</PersonLinks>
						</PersonCard>) : ""
					)
				}
			</WidePageSectionContent>
		</PageSection>

		<PageSection id={teamPage.data.attributes.PageSection[1].id} isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>{teamPage.data.attributes.PageSection[1].SectionHeader}</SectionHeader>
			<WidePageSectionContent>
				{teamCards.data.map(n => 
					n.attributes.Role == "Advisor" ?
						(<PersonCard>
							<PersonName>{n.attributes.Name}</PersonName>
							<PersonBio>{n.attributes.Bio}</PersonBio>
							<PersonLinks>
								{n.attributes.LinkList.map(l => <a href={l.Link}><li>{l.LinkText}</li></a>)}
							</PersonLinks>
						</PersonCard>) : ""
					)
				}
			</WidePageSectionContent>
		</PageSection>

		<PageSection id={teamPage.data.attributes.PageSection[2].id} isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>{teamPage.data.attributes.PageSection[2].SectionHeader}</SectionHeader>
			<WidePageSectionContent>
				{teamCards.data.map(n => 
					n.attributes.Role == "Alumni" ?
						(<PersonCard>
							<PersonName>{n.attributes.Name}</PersonName>
							<PersonLinks>
								{n.attributes.LinkList.map(l => <a href={l.Link}><li>{l.LinkText}</li></a>)}
							</PersonLinks>
						</PersonCard>) : ""
					)
				}
			</WidePageSectionContent>
		</PageSection>

		<PageSection id={teamPage.data.attributes.PageSection[3].id} isLightSection={true} css={baseGrid}>
			<SectionHeader isLeftHeader={true}>{teamPage.data.attributes.PageSection[3].SectionHeader}</SectionHeader>
			<PageSectionContent>
            	<ReactMarkdown rehypePlugins={[rehypeRaw]}>
					{teamPage.data.attributes.PageSection[3].PageSectionContent}
				</ReactMarkdown>
				<a href="/jobs"><div>Jobs</div></a>
			</PageSectionContent>
		</PageSection>

		<Footer />
	</PageContainer>
    );
}

let PersonCard = styled.div`
	border:black dotted 1px;
	grid-column:span 3;
`;

let PersonHeadshotDiv = styled.div`
	height:150px;
	width:150px;
	overflow:hidden;
`;

let PersonHeadshot =styled.img`
	object-fit:cover;
`;

let PersonName = styled.h3`
	
`;

let PersonTitle = styled.p`
	
`;

let PersonLinks = styled.ul`
	
`;

let PersonBio = styled.p`
	
`;

export async function getStaticProps(context) {
  let teamPage = await fetchAPI('/team?populate=*');
  let teamCards = await fetchAPI('/team-cards?populate=*');
  return {
    props: {
      teamPage:teamPage,
      teamCards:teamCards
    }  // will be passed to the page component as props
  }
}

export default TeamPage;
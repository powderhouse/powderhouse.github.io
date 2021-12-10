import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GridOverlay from '../components/GridOverlay';

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
} from '../components/global.js';

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

function NewsPage({newsPage,newsCards}) {
	return (
	<PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='yellow' color='off-black'>
			<PageHeader>{newsPage.data.attributes.PageSplash.PageHeader}</PageHeader>
			<PageTableOfContents>
				<PageTOCListItem>
					<PageTOCLink href='#'>2020</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>2015</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>2010</PageTOCLink>
				</PageTOCListItem>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			{newsPage.data.attributes.PageSplash.PageIntro}
		</PageIntro>

		<PageSection isLightSection={true} css={baseGrid}>
			{newsCards.data.map(
				n => ( 	<NewsCard key={n.id} css={baseGrid}>
							<NewsHeader isLeftHeader={true}>
								<NewsDate>{n.attributes.NewsDate}</NewsDate>
								<NewsType>{n.attributes.NewsType}</NewsType>
							</NewsHeader>
							<NewsContent>
								<NewsTitle>{n.attributes.NewsTitle}</NewsTitle>
								<NewsExcerpt>{n.attributes.NewsExcerpt}</NewsExcerpt>
								<NewsRelatedLinks>
									{n.attributes.NewsRelatedLinks.map( l => (
										<a href={l.Link} key={l.id}>
											<li>{l.LinkText}</li>
										</a>)
										)
									}
								</NewsRelatedLinks>
							</NewsContent>
						</NewsCard> 
					)
				)
			}
		</PageSection>

		<Footer />
	</PageContainer>
  );
}

let NewsCard = styled.div`
	grid-column:1 / -1;
`;

let NewsHeader = styled(SectionHeader)``;

let NewsContent = styled(PageSectionContent)``;

let NewsDate = styled.h3``;

let NewsType = styled.p``;

let NewsTitle = styled.h2`
	font-size:31px; /*TK Explicit?*/
`;

let NewsExcerpt = styled.p``;

let NewsRelatedLinks = styled.ul``;

// export async function getStaticProps(context) {
//   return {
//     props: await fetchAPI('/news-page?populate=*') // will be passed to the page component as props
//   }
// }

// export async function getStaticProps(context) {
//   return {
//     props: await fetchAPI('/news-cards?populate=*') // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {
  let newsPage = await fetchAPI('/news-page?populate=*');
  let newsCards = await fetchAPI('/news-cards?populate=*');
  console.log({
    props: {
      newsPage:newsPage,
      newsCards:newsCards
    }  // will be passed to the page component as props
  });
  return {
    props: {
      newsPage:newsPage,
      newsCards:newsCards
    }  // will be passed to the page component as props
  }
}

export default NewsPage;
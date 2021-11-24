import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'
import GridOverlay from '../components/GridOverlay'

import { baseGrid } from '../components/global.js'

function AboutPage() {
	return (
	<PageContainer css={baseGrid}>
		<Header />
		<PageSplash>
			<h1>About Us</h1>
			<PageTableOfContents>
				<li>Our Mission</li>
				<li>Our Approach</li>
				<li>A New Kind of Institution</li>
				<li>A New Approach to Change</li>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			<p>
				We believe we grow best when learning, learn best when creating, and
				create best when we're creating something which matters to us. We
				believe this is true regardless of age.
			</p>
			<p>
				We also believe that the purpose of education is not to serve the
				public, but to create it by cultivating not only skills, but the
				active, critical posture citizenship requires.
			</p>
		</PageIntro>

		<PageSection css={baseGrid}>
			<LeftHeader>Our Mission</LeftHeader>
			<PageSectionContent numCols={6}>
			<p>
				At Powderhouse, our mission is to give youth a say, enabling
				critical participation in the most important conversations of
				their lives.
			</p>
			<p>
				We do this by working with youth to develop creatively,
				intellectually, and technically ambitious projects centering
				three themes with lifelong relevance:
			</p>
			<dl>
				<dt>Identity</dt>
				<dd>Who are we, and what has made us who we are?</dd>

				<dt>Interdependence</dt>
				<dd>
					How are we connected to one another and the world around us?
				</dd>

				<dt>The Future</dt>
				<dd>
					Where is the society we've built taking us, and where should
					it?
				</dd>
			</dl>
			</PageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Our Approach</LeftHeader>
			<PageSectionContent numCols={6}>
				<p>
					Our work comes alive through the community publications we
					create with youth, where we invite others to bring fresh
					perspectives connecting our projects and pieces to our
					community's collective moment.
				</p>
				<p>Doing this well demands two, essential ingredients:</p>
				<dl>
					<dt>Time to Make</dt>
					<dd>
						Great work is nearly impossible to do in dribs and drabs of
						time in- or out-of-School. We create full-time, immersive
						experiences with youth which are rigorous, accessible, and
						effective enough to replace School.
					</dd>

					<dt>Fluence with Powerful Tools</dt>
					<dd>
						Good tools are essential to good work. At Powderhouse, we
						center three toolsets we believe can expand opportunity for
						rigorous participation in the public sphere: computation,
						narrative, and design.
					</dd>
				</dl>
			</PageSectionContent>
		</PageSection>
		<DarkPageSection css={baseGrid}>
			<PageSectionContent numCols={6}>
			<CenterHeader>A New Kind of Institution</CenterHeader>
			<p>
				This work offers a foundation for a novel institution, one
				combining invention and advocacy, animated by a vision of a
				world where learning and living are reunited and the full
				plurality of people's backgrounds, interests, and aptitudes is
				reflected in our educational institutions (much as it already is
				in our institutions of speech or worship).
			</p>
			<p>
				But, no one has demonstrated how to operate the kinds of
				learning environments we imagine equitably and affordably. This
				means invention is necessary. And insofar as that invention (and
				the expansion of access to its fruits) is at odds with
				School-as-it-is, our work calls for advocacy.
			</p>
			<p>
				Since 2009, we've been developing functional prototypes of our
				vision. At first as <a href="TK">sprout & co</a>, we developed
				programming with youth and adults throughout greater Boston.
				Over time, we found new tools, materials, and adult development
				were required to do this well, so we branched out into
				curriculum and professional development. Eventually, we found
				the limited time we had in evening and out-of-school programming
				deprived our work and relationships of the depth they deserved
				and required. So, we decided to start a new, in-district school
				at the invitation of Somerville's Mayor, with the support of
				many of the families with whom we'd worked for years. That
				effort was later torpedoed by Somerville's Superintendent, but
				not before we had the opportunity over six years to pilot a
				novel design and grapple firsthand with the legal, political,
				and cultural obstacles to in-district change.
			</p>
			<img src="" />
			<p>
				Troubled by the structural issues showcased in Somerville and
				informed by our work building learning environments and
				communities around the voices of youth and families, Powderhouse
				is now building the research, design, and advocacy institute
				needed to invent the future of learning and make it salient to
				public education.
			</p>
			<p>
				In this work, we take inspiration from research efforts like
				Xerox PARC and the Mayo Clinic. The organizations which best
				invent the future often do so by living it themselves. PARC
				research staff insisted on not only building but using their
				creations as their main computing systems. The Mayo Clinic runs
				an actual hospital. Though informed by what happened outside
				their walls, these organizations' sizable impact depended on
				inventing new things within.
			</p>
			<p>
				In this tradition, Powderhouse is devoted to realizing the
				future of learning <i>in practice.</i> Our output is not
				academic research, but a place where we work directly with youth
				to demonstrate the very best our community could provide young
				people, <i>right now</i>, with enough imagination.
			</p>
			<p>
				This is the foundation for the invention half of the equation.
			</p>
			<img src="" />
			</PageSectionContent>
		</DarkPageSection>
		<DarkPageSection css={baseGrid}>
			<PageSectionContent numCols={6}>
			<CenterHeader>A New Approach to Change</CenterHeader>
			<p>
				But, our experience—and the sector's largely failed attempts at
				reform over the past two centuries—tell us that a great idea
				(even when implemented at a small scale) isn't enough. Novel
				strategic thinking about the financial and legal activism
				required to foment change is needed.
			</p>
			<p>
				Here too we take inspiration from outside education.In 1983,
				Evan Wolfson wrote his Harvard Law School thesis on the
				constitutional right to marriage. Throughout the 1990s, he
				worked with{" "}
				<a href="https://www.lambdalegal.org/">Lambda Legal</a> pursuing
				full recognition of the LGBT community's civil rights. In 2003,
				Wolfson launched a purpose-built vehicle to achieve equality:{" "}
				<a href="http://www.freedomtomarry.org/">Freedom to Marry</a>.
				Twelve years later, after years of community organizing, the
				Supreme Court recognized the right to marriage for same-sex
				couples in 2015, affirming the arguments initially outlined in
				Wolfson's thesis more than three decades earlier.
			</p>
			<p>Powderhouse's work rhymes with Wolfson's.</p>
			<p>
				Like Wolfson, we are devoted to expanding the pluralism a public
				institution (learning) offers a now-disenfranchised group
				(youth). Like Freedom to Marry, our work will be multi-year (not
				overnight), multi-state (not boutique), multi-partner (not a
				single school), and multi-method (combining research, design,
				and advocacy targeting pedagogy, financing, and policy).
			</p>
			<p>
				Freedom to Marry took concrete violations of real people's
				rights and legally activated them, complementing activism with
				work shifting public opinion. Powderhouse's work will take our
				demonstration of viable, radically different alternatives as a
				starting point for analogous legal, financial, and cultural
				activism.
			</p>
			<p>
				For many, School doesn't work, with severe consequences. Though
				we rightly invest in buttressing School-as-it-is, we have no
				infrastructure for inventing School-as-it-could-be. Where will
				new things come from?
			</p>
			<p>
				In a generation, we will have a world-class, <i>public</i>{" "}
				answer to that question.
			</p>
			</PageSectionContent>
		</DarkPageSection>
		<Footer />
	</PageContainer>
  );
}

let PageContainer = styled.div``;

let PageSplash = styled.div`
	grid-column: 1 / -1;
	min-height: 20rem;
	border: 1px dotted black;
`

let PageTableOfContents = styled.ol``

let PageIntro = styled.div`
	grid-column: 1 / span 9;
	border: 1px dotted black;
	font-size: 2rem;
`

let LeftHeader = styled.div`
	grid-column: 1 / span 3;
	border: 1px dotted black;
`;

let CenterHeader = styled.h2`

`;

let PageSection = styled.section`
	grid-column: 1 / -1;
`

let DarkPageSection = styled(PageSection)`
	color: white;
	background: black;
`

let PageSectionContent = styled.div`
	grid-column: 4 / 10;
`
export default AboutPage;
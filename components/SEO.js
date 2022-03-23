import { useRouter } from "next/router";

import { NextSeo } from "next-seo";

function SEO({ meta }) {
	const path = useRouter().pathname;
	return (
		<NextSeo
			title={meta.Title}
			description={meta.Description}
			canonical={`https://powderhouse.org${path}`}
			openGraph={{
				url: `https://powderhouse.org${path}`,
				type: meta.Type,
				title: meta.Title,
				description: meta.Description,
			}}
		/>
	);
}

export default SEO;

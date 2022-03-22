import { useRouter } from "next/router";

import { NextSeo } from "next-seo";

function SEO({ meta }) {
	const path = useRouter().pathname;
	return (
		<NextSeo
			// TODO: It was a mistake to make `meta` a repeating component in Strapi; we need to grab the first element here
			title={meta.title}
			description={meta.Description}
			canonical={`https://powderhouse.org${path}`}
			openGraph={{
				url: `https://powderhouse.org${path}`,
				type: meta.type,
				title: meta.title,
				description: meta.Description,
			}}
		/>
	);
}

export default SEO;

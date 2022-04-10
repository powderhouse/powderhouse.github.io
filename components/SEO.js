import { useRouter } from "next/router";

import { NextSeo } from "next-seo";

function SEO({meta}) {
	const path = useRouter().pathname;
	return (
		<NextSeo
			// TODO: Unify capitalization of meta attrs
			title={meta.title}
			description={meta.Description}
			canonical={`https://powderhouse.org${path}`}
			openGraph={{
				url: `https://powderhouse.org${path}`,
				type: meta.Type,
				title: meta.title,
				description: meta.Description,
			}}
		/>
	);
}

export default SEO;

# README

- [ ] [Install `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)
- [ ] Clone this repository
- [ ] Switch to the design branch (`git checkout pp-redesign`)
- [ ] Switch `node` to `v16.3.1` _via_ `nvm us 16.3.1`
- [ ] `npm run build`
- [ ] `npm run dev`

Now, the Strapi Admin should be available at [`https://localhost:1337`](https://localhost:1337) and the site at [`https://localhost:3000`](https://localhost:3000).


## Pulling content from the API

To pull content from the API into any page/component, you can use the `fetchAPI` convenience function available in `lib/api.js`.  You'll need to import it as

	import { fetchAPI } from "../lib/api";

Then, you can use `fetchAPI` in [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) to interact with the Strapi API and pull content at build-time.

_e.g._ this will make a call to the `/foo` endpoint of the API and pass whatever returns as props to the other components on the page.

```javascript
export async function getStaticProps(context) {
  return {
    props: await fetchAPI('/foo') // will be passed to the page component as props
  }
}
```
# README

- [ ] [Install `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)
- [ ] Clone this repository
- [ ] Switch to the design branch (`git checkout pp-redesign`)
- [ ] Install and switch to the appropriate node version using `./configure`
- [ ] `yarn build`
- [ ] `yarn dev`

Now, the frontend should be available at [`https://localhost:3000`](https://localhost:3000).  When you push this to GitHub, it is automatically deployed via Vercel, whose status you can inspect [here](https://vercel.com/powderhouse/powderhouseorg).


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
# README

- [ ] [Install `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating)
- [ ] [Install `vercel` CLI](https://vercel.com/cli)
- [ ] Clone this repository
- [ ] Switch to the design branch (`git checkout pp-redesign`)
- [ ] Install and switch to the appropriate node version using `nvm use`
- [ ] Link to the Vercel project by running `vercel link` ![Terminal prompts when you run `vercel link`](https://powderhouse-strapi-uploads.s3.amazonaws.com/thumbnail_Screen_Shot_2022_02_03_at_3_34_39_PM_fbfdc04591.png?updated_at=2022-02-04T16:01:35.520Z)
- [ ] Install required packages with `yarn install`

## Development workflow

- If you are modifying content on `api.powderhouse.org` which may [modify Strapi's DB schema](https://github.com/powderhouse/api.powderhouse.org#modifying-the-db-schema), then:
  - [ ] Follow the directions for [local development](https://github.com/powderhouse/api.powderhouse.org#local-development) of `api.powderhouse.org` and get a local instance of Strapi running at `localhost:1337`
  - [ ] Then, run `yarn dev` to prototype the frontend locally, fed by the _local_ instance of Strapi.
  - [ ] Once you're satisfied with your backend changes, deploy the Strapi changes as described [here](https://github.com/powderhouse/api.powderhouse.org#production-deployment).
  - [ ] Once you're satisfied with your front-end changes, test them with `yarn stage`, which will run a local version of the front-end, fed by the _production_ instance of Strapi at `api.powderhouse.org`
  - [ ] Once you've verified the front-end behaves as anticipated, deploy your changes by pushing them.
- Otherwise:
  - [ ] Make any additions or modifications to content on Strapi that you wish, keeping in mind these will be live on `api.powderhouse.org`, meaning any new builds of the front-end will reflect these changes.
  - [ ] `yarn stage` will run a local version of the front-end, fed by the _production_ instance of Strapi at `api.powderhouse.org`
  - [ ] Once you've verified the front-end behaves as anticipated, deploy your changes by pushing them.

Note that whenever you push this repository to GitHub, it is automatically deployed via Vercel, whose status you can inspect [here](https://vercel.com/powderhouse/powderhouseorg).


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
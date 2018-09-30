This is a minimal repro of an issue with `gatsby-mdx`, where `mdx` breaks when other plugins/gatsby-node.js use the `createPage` or `deletePage` actions. 

The example here replicates the issue by mirroring the same logic that `gatsby-plugin-remove-trailing-slashes` uses.


To test locally:

```sh
yarn

yarn start # broken

# comment everything in gatsby-node.js
yarn start # working
```
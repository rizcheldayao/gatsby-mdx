# Gatsby Plugin MDX Prismjs

An MDX component that replaces
[gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)
for people who are porting from
[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark)

# Getting Started

```shell
yarn add gatsby-plugin-mdx-prismjs
```

```javascript
modules.exports = {
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: { plugins: [`gatsby-plugin-mdx-prismjs`] }
    }
  ]
};
```

## Options

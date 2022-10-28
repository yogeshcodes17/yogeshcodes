const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Yogesh Codes",
  tagline: "^_^",
  url: "https://yogeshcodes17.github.io",
  baseUrl: "/yogeshcodes/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://lh5.googleusercontent.com/AXJrR7nMmY2B9FEaEKAmOmAYhAnxkqwZYbEbS-Rr2UL09bCpeY2XC79sDVt1UxPqkNloM1zfP20NuMJkunv5=w2782-h1592-rw",
  organizationName: "yogeshcodes17", // Usually your GitHub org/user name.
  projectName: "yogeshcodes", // Usually your repo name.
  themeConfig: {
/*
    footer: {
      
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    */

    //sidebarCollapsible: true, //默认折叠
    image: 'https://lh5.googleusercontent.com/AXJrR7nMmY2B9FEaEKAmOmAYhAnxkqwZYbEbS-Rr2UL09bCpeY2XC79sDVt1UxPqkNloM1zfP20NuMJkunv5=w2782-h1592-rw',
    algolia: {
      apiKey: "5c07d8bf9c9928c4453857f6cad0420e",
      indexName: "wiki-power",

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },


    
    
    colorMode: {
      // "light" | "dark"
      //defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',
        lightIcon: '🌞',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        //lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },

    hideableSidebar: false,
    navbar: {
      title: "Yogesh Codes",
      hideOnScroll: false,
      //style: 'primary',
      /*
      logo: {
        alt: "My Site Logo",
        src:
          "https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20201122195819.png",
      },
      */
      items: [
        {
          to: "blog",
          label: "Blog",
          position: "right",
        },
        {
          href: "https://github.com/yogeshcodes17/",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/yogeshcodes/",
          label: "Subscribe",
          position: "right",
        },
      ],
    },
  }, 

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/gh/linyuxuanlin/Wiki_Docusaurus/static/katex/v0.12.0/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          // editUrl: "https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          //blogTitle: 'Power\'s blog!',
          //blogDescription: 'A docusaurus powered blog!',
          blogSidebarCount: 8,
          postsPerPage: 8,
          showReadingTime: false,
          path: 'blog',
          blogSidebarTitle: 'Recent',
          // editUrl: 'https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/',
          /*
          feedOptions: {
            type: 'all', // required. 'rss' | 'feed' | 'all'
            title: 'Power\'s Blog', // default to siteConfig.title
            description: '个人博客', // default to  `${siteConfig.title} Blog`
            copyright: 'Copyright © ${new Date().getFullYear()} Power Lin',
            language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
          */
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

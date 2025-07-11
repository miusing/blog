// @ts-check
// 注意：类型注解允许类型检查和IDE自动补全

// 正确引入主题
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '缪斯',
  tagline: '热爱是永远的理由和答案！',
  url: 'https://wooyee.cc',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'miusing', // 通常是你的GitHub组织/用户名
  projectName: 'blog', // 通常是你的仓库名
  deploymentBranch: 'gh-pages',
  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // 配置选项
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'no-referrer'
      }
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // 将 docs 设为网站根路径
          // 请将此处改为你的仓库地址
          editUrl: 'https://github.com/miusing/blog/tree/master/',
        },
        blog: {
          routeBasePath: '/about', // 将 blog 改为个人介绍页面
          blogTitle: '个人介绍',
          blogDescription: '关于我的个人介绍和经历',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '个人介绍',
          // 请将此处改为你的仓库地址
          editUrl: 'https://github.com/miusing/blog/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个 star 支持我！<a target="_blank" rel="noopener noreferrer" href="https://github.com/miusing/blog">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      }, 
      navbar: {
        title: '亲爱的缪斯',
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '技术文档',
          },
          {to: '/about', label: '关于我', position: 'right'},
          {
            href: 'https://github.com/miusing/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript',
        additionalLanguages: ['rust'],
        },
      // Algolia DocSearch 配置（暂时禁用）
      // 如需启用搜索功能，请参考 README.md 中的 Algolia 配置说明
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      // }
    }),
};

module.exports = config;

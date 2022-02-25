module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { href: '/favicon.ico', rel: 'icon'}]
  ],
  author: '韩筠宜',
  title: '韩筠宜的BLOG',
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.jpg',
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类'
      },
      tag: {
        location: 3,
        text: 'Tag'
      },
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/Abandon99' },
      ]
    },
    nav: [
      { text: '我的游戏', link: '/game' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    codeTheme: 'tomorrow',
 },
     // 备案
  record: 'ICP 备案文案',
  recordLink: 'ICP 备案指向链接',
  cyberSecurityRecord: '公安部备案文案',
  cyberSecurityLink: '公安部备案指向链接',
  // 项目开始时间，只填写年份
  startYear: '2017'
} 
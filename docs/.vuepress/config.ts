import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'IDGTN文档',
  description: '这是我的第一个 IDGTN文档 站点',
  theme: defaultTheme({
    logo: 'http://www.idgtn.com.cn/favicon.ico',
    navbar: [
      // NavbarItem
      {
        text: '官网',
        link: 'http://www.idgtn.com.cn/',
      },
      // NavbarGroup
      {
        text: '分类',
        children: [
          {
            text: '自建站前台',
            link: '/website/',
          },
          {
            text: '自建站后台',
            link: '/admin/',
          }],
      },
    ],
  }),
})

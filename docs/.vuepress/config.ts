import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'IDG TN文档',
  description: '这是我的第一个 IDG TN文档 站点',
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
            text: '出站后台',
            link: '/admin/',
          },
          {
            text: '出站前台',
            link: '/website/',
          },
          {
            text: '阿里云相关',
            link: '/alyun/',
          }],
      },
    ],
    sidebar: {
      '/admin/': [
        {
          text: '模版组件',
          children: ['/admin/template/', '/admin/template/01.md',],
        },
        {
          text: '渲染逻辑',
          children: ['/admin/template/'],
        }
      ],
      '/website/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
  }),
})

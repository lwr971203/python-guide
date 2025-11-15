import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/python-guide/",
  // 网页地址 icon
  head: [["link", {rel: "icon", href: "/python-guide/电脑.svg"}]],
  title: "主页",
  description: "学习项目",
  themeConfig: {
    // 文章大纲标题
    outlineTitle: "大纲",
    // 需要索引的标题级别
    outline: [1, 6],
    // 网站 icon
    logo: '/电脑.svg',
    // https://vitepress.dev/reference/default-theme-config
    // 右上角导航
    nav: [
      { text: 'Home', link: '/' },
      { text: '学习笔记', items:[
        {text: 'Python-guide', link:'/python-guide/README'}
      ] }
    ],

    // 搜索框
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "没有找到相关结果",
            resetButtonTitle: "清楚查询结果",
            footer: {
              selectText: "选择",
              navigateText: "切换"
            }
          }
        }
      }
    },

    // 侧边栏
    sidebar: [
      {
        text: 'Python中文指南',
        items: [
          { text: '第一章：安装运行', 
            items: [
            { text: "1.1 【环境】快速安装 Python 解释器", link: "/python-guide/c01_01"},
            { text: '1.2 【环境】Python 开发环境的搭建', link: '/python-guide/c01_02' },
            { text: '1.3 【基础】两种运行 Python 程序方法', link: '/python-guide/c01_03' }
          ] 
          },
          {
            text: '第二章：数据类型',
            items: [
              { text: "2.1 【基础】常量与变量", link: "/python-guide/c02_01"},
              { text: "2.2 【基础】字符串类型", link: "/python-guide/c02_02"},
              { text: "2.3 【基础】整数与浮点数", link: "/python-guide/c02_03"},
              { text: "2.4 【基础】布尔值：真与假", link: "/python-guide/c02_04"},
              { text: "2.5 【基础】学会输入与输出", link: "/python-guide/c02_05"},
              { text: "2.6 【基础】字符串格式化", link: "/python-guide/c02_06"},
              { text: "2.7 【基础】运算符（超全整理）", link: "/python-guide/c02_07"},
            ]
          }
        ]
      },
    ],

    // 右上角关联链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lwr971203' }
    ],

    // 页脚
    footer: {
      copyright: "这是一个版权声明"
    }
  }
})

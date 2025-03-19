export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Yu Xin'
export const headline = 'Graduate student at Shenzhen University.'
export const introduction =
  "My name is Yu Xin. I am from Foshan, Guangdong, and I am a graduate student at Shenzhen University. My main research direction is network science."
export const email = '2410095070@mails.szu.edu.cn'
export const githubUsername = 'xinyking'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Yu Xin. I'm from Guangdong and a graduate student at Shenzhen University. I’ve been learning Network Science since 2024.",
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general network science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about Network science, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]

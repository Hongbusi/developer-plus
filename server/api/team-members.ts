import type { ITeamMember } from '~~/types'

const teamMembers: ITeamMember[] = [
  {
    name: 'Hongbusi',
    avatar: 'https://avatars.githubusercontent.com/u/53554371?v=4',
    tag: 'Creator',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/Hongbusi',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'TickHeart',
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    tag: 'Member',
    address: 'Hangzhou, China',
    link: 'https://hongbusi.github.io',
    githubLink: 'https://github.com/TickHeart',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'alexzhang1030',
    avatar: 'https://avatars.githubusercontent.com/u/49969959?v=4',
    tag: 'Member',
    address: 'Beijing, China',
    githubLink: 'https://github.com/alexzhang1030',
    twitterLink: 'https://twitter.com/Hongbusi'
  },
  {
    name: 'RainyNight9',
    avatar: 'https://avatars.githubusercontent.com/u/20129035?v=4',
    tag: 'Member',
    address: 'Beijing, China',
    link: 'https://RainyNight9.github.io',
    githubLink: 'https://github.com/RainyNight9'
  },
  {
    name: 'Lo',
    avatar: 'https://avatars.githubusercontent.com/u/50254496?v=4',
    tag: 'Member',
    address: 'Wuxi, China',
    githubLink: 'https://github.com/LoTwT'
  },
  {
    name: 'chris-zhu',
    tag: 'Member',
    address: 'Chengdu, China',
    link: 'http://zyob.top',
    githubLink: 'https://github.com/chris-zhu'
  }
]

export default defineEventHandler(() => {
  return teamMembers
})

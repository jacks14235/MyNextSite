import { CardProps } from '../components/card'

export const getCardData: () => CardProps[] = () => [
  {
    title: "Coding Projects",
    to: '/projects',
    text: 'Over the years, I have completed countless coding projects both independently and through classwork. Visit this page to see an overview of a few of my projects and their github repositories.',
    buttonText: 'View Projects',
    image: '/images/code.png'
  },

  {
    title: "AI Research",
    to: '/research',
    text: 'Since I began coding, artificial intelligence and machine learning have been fascinating to me. I recently took a seminar at Princeton University called "Living with AI" where I explored this interest and researched interesting topics.',
    buttonText: 'View Research',
    image: '/images/nn2.png'
  },


  {
    title: "Experience",
    to: '/experience',
    text: 'Visit this page to learn about my experience in coding and problem solving over the years. In addition to higher education in Computer Science, I have hands on experience in multiple startups and interships.',
    buttonText: 'About Me',
    image: '/images/experience.png'
  },

  {
    title: "Get to Know Me",
    to: '/about-me',
    text: 'Click here to get learn what I do in my freetime and to contact me. Learn about my hobbies, my involvement in cross country, and community service I\'ve taken part in.',
    buttonText: 'Contact info',
    image: '/images/kiteflying.jpg'
  }
]
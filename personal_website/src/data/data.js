import { nanoid } from 'nanoid';

export const headData = {
  title: 'Peter Weckend', // todo: improve/make this more dynamic
  lang: 'en',
  description: 'Software development portfolio website for Peter Weckend.',
};

export const navigationBarData = {
  title: 'Peter Weckend',
  about: 'About',
  experience: 'Experience',
  contact: 'Contact',
  resume: 'Resume',
};

export const heroData = {
  name: 'Peter Weckend',
  title: 'Software Developer',
  subtitle: "I'm a software developer currently working on medical device software for Haemonetics",
  cta: 'Find out more',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a software developer who loves to learn new things and hit the ground running. Currently, I'm based out of Victoria, BC and I develop medical device software for Haemonetics.",
  paragraphTwo:
    'I graduated from the University of Alberta in 2019 and have experience with languages such as Java, C#, Python, HTML, CSS, JavaScript, and Angular.',
  paragraphThreePreLink: 'I also like to rock climb and',
  paragraphThreeLinkText: 'play music',
  paragraphThreePostLink: '.',
  resume: 'Resume',
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

export const contactData = {
  cta: 'Reach out!',
  btn: 'Resume',
  email: 'TBD',
};

export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:peterweckend@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/weckend/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/peterweckend',
    },
  ],
};

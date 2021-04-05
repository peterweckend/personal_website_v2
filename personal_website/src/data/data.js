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
  subtitle: 'Im a software developer currently working on medical device software for Haemonetics',
  cta: 'Find out more',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Im a software developer. Currently, I develop medical device software for Haemonetics. ...',
  paragraphTwo: "I'm formerly a student at the University of Alberta. ...",
  paragraphThree: 'I also like to rock climb and play music. ...',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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

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
  name: "Hi, I'm Peter Weckend",
  title: "I'm a software developer",
  subtitle:
    "I'm a Victoria, BC based full-stack developer. Currently, I create medical device software for Haemonetics",
  cta: 'Find out more',
};

export const aboutData = {
  img: 'profile.png',
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
    img: 'haemonetics_logo.png',
    title: 'Haemonetics - Software Developer',
    info:
      'Responsible for the design, coding, testing, and documentation of a variety of medical software using C#, .NET, Java, Angular, PL/SQL, etc. Responsible for overseeing and assigning work to a team of developers as well as leading standups, retrospective, and sprint planning meetings.',
    info2:
      'Developed multiple applications used by hospitals and medical centers that manage blood transfusions, plasma donations, diagnostics, inventory, and interconnectivity with third party equipment and software.',
    url: 'https://www.haemonetics.com/en',
    urlLinkText: 'Haemonetics.com',
  },
  {
    id: nanoid(),
    img: 'albertasat_logo.png',
    title: 'AlbertaSat - Software Team Member',
    info:
      'Contributed to the coding and testing in C of the bootloader for Ex-Alta2, a satellite being built at the University of Alberta as part of the Canadian Space Agency’s CubeSat Project.',
    info2: '',
    url: 'https://albertasat.ca/',
    urlLinkText: 'AlbertaSat.com',
  },
  {
    id: nanoid(),
    img: 'connectify.png',
    title: 'Connectify Social Media Platform',
    info:
      'Created a social media platform using Django as part of a semester-long university group project. ',
    info2:
      'Included an API that allowed two-way connectivity with web apps of other groups in the course.',
    url: 'https://youtu.be/thaDP-9Qz3g',
    urlLinkText: 'See Demo',
    repo: 'https://github.com/peterweckend/group-project-cmput404',
  },
];

export const contactData = {
  cta: 'Send me an email!',
  btn: 'peterweckend@gmail.com',
  email: 'mailto:peterweckend@gmail.com',
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

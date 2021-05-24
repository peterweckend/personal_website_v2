import { nanoid } from 'nanoid';

export const headData = {
  title: 'Peter Weckend',
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
  title: 'I love to create software',
  cta: 'Find out more',
};

export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I'm a software developer who loves to learn, write quality code, and collaborate with others. The languages I work with most frequently are C#, Java, Python, SQL, HTML, CSS, JavaScript, and Angular.",
  paragraphTwo:
    'After initially going to university for a degree in mathematics, I accidentally discovered the joys of programming in an options course and immediately switched my major. In the years since then, I graduated from the University of Alberta with a degree in Computing Science, havewritten software for multiple products, and currently work as a developer / team lead for Haemonetics.',
  paragraphThreeLinkText: 'playing piano',
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
      "During my time at Haemonetics, I've worked on a variety of applications used by hospitals and medical centers that manage blood transfusions, plasma donations, diagnostics, inventory, and interconnectivity with third party equipment and more.",
    url: 'https://www.haemonetics.com/en',
    urlLinkText: 'Haemonetics.com',
  },
  {
    id: nanoid(),
    img: 'albertasat_logo.png',
    title: 'AlbertaSat - Software Team Member',
    info:
      'I was lucky enough to contribute to the coding and testing in C of the bootloader for Ex-Alta2, a satellite being built at the University of Alberta as part of the Canadian Space Agency’s CubeSat Project.',
    info2: '',
    url: 'https://albertasat.ca/',
    urlLinkText: 'AlbertaSat.com',
  },
  {
    id: nanoid(),
    img: 'RestaurantDetailsScreen.png',
    title: 'FoodFriendly',
    info:
      'An MVP iOS social media app that allows vegetarians and vegans to search for and review compatible menu items of restaurants in their area',
    info2:
      'This application was a really fun way to learn more about Swift, Firebase, and iOS development as a whole. FoodFriendly users can create accounts, find and view restaurants, review menu items, and more.',
    url: 'https://youtu.be/CpdDrbAIb2Y',
    urlLinkText: 'See Demo',
    repo: 'https://github.com/peterweckend/FoodFriendly',
  },
  {
    id: nanoid(),
    img: 'connectify.png',
    title: 'Connectify Social Media Platform',
    info:
      'Created a social media platform using Django as part of a semester-long university group project.',
    info2:
      'This platform included an API that allowed for two-way connectivity with web apps of other groups in the course.',
    url: 'https://youtu.be/thaDP-9Qz3g',
    urlLinkText: 'See Demo',
    repo: 'https://github.com/peterweckend/group-project-cmput404',
  },
];

export const contactData = {
  cta: 'I love meeting new people, send me an email',
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

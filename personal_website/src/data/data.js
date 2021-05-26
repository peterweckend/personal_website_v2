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
  nameIntro: "Hi, I'm Peter Weckend",
  title: "I'm a software developer",
  cta: ' Find out more',
};

export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "I'm a software developer who loves to learn, create, and collaborate with others. The languages I work with most frequently are: ",
  paragraphTwo:
    "While I originally started university as a math major, I quickly discovered the joys of computer science and haven't looked back. In the years since, I graduated from the ",
  universityLinkText: 'University of Alberta',
  universityUrl: 'https://www.ualberta.ca/index.html',
  paragraphThree:
    ' with a BSc in Computer Science, have written software for multiple products, and currently work as a developer / team lead for Haemonetics.',
  paragraphFourLinkText: 'playing piano',
  resume: 'Resume',
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'haemonetics_logo.png',
    title: 'Haemonetics - Software Developer',
    info:
      'Currently at Haemonetics, I work on the design, coding, testing, and documentation of a variety of medical software using C#, .NET, Java, Angular, PL/SQL, etc. In addition to this, I oversee and assign work to a team of developers and lead standups, retrospectives, and sprint planning meetings.',
    info2:
      "During my time at Haemonetics, I've worked on a variety of applications used by hospitals and medical centers that manage blood transfusions, plasma donations, diagnostics, inventory, and interconnectivity with third party equipment and more.",
    url: 'https://www.haemonetics.com/en',
    urlLinkText: 'Haemonetics.com',
    highlight: 'C#, .NET, Java, Angular, PL/SQL',
    highlightClassName: 'simple-highlight highlight-yellow',
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
    highlight: 'coding and testing in C',
    highlightClassName: 'simple-highlight highlight-green',
  },
  {
    id: nanoid(),
    img: 'RestaurantDetailsScreen.png',
    title: 'FoodFriendly',
    info:
      'An MVP iOS social media app that allows vegetarians and vegans to search for and review compatible menu items of restaurants in their area. This application was a really fun way to learn more about Swift, Firebase, and iOS development as a whole.',
    info2:
      'FoodFriendly users can create accounts, find and view restaurants, review menu items, and more.',
    url: 'https://youtu.be/CpdDrbAIb2Y',
    urlLinkText: 'See Demo',
    repo: 'https://github.com/peterweckend/FoodFriendly',
    highlight: 'Swift, Firebase, and iOS',
    highlightClassName: 'simple-highlight highlight-yellow',
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
    highlight: 'Django',
    highlightClassName: 'simple-highlight highlight-red',
  },
];

export const contactData = {
  cta: "Let's get in touch - send me an email!",
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

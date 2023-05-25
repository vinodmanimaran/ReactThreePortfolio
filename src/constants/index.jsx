import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'inspirations',
    title: 'Inspirations',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
    {
    id: 'work',
    title: 'Work',
  },


];

const services = [
  {
    title: 'Full Stack Web Development',
    icon: web,
  },
  {
    title: 'React Native App Development',
    icon: mobile,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Content Management System (CMS) Development',
    icon: creator,
  },
];


const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
{
title: 'StarBucks',
company_name:'Jerry Baldwin, Zev Siegl, and Gordon Bowker',
icon: starbucks,
iconBg: '#383E56',
date: 'March 1971',
points: [
'Embracing change and adapting to new circumstances',
'Fostering a culture of teamwork and collaboration',
'Prioritizing customer satisfaction',
'Investing in employee development and well-being',
'Sustainable practices and social responsibility',
],
},
  {
    title: 'Tesla',
    company_name:'Martin Eberhard, Marc Tarpenning, and Ian Wright',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'July 2003',
    points: [
      'Revolutionizing the automotive industry through electric vehicle technology and promoting sustainable transportation.',
      'Advancing renewable energy solutions with innovations in solar panels and energy storage systems, contributing to a more sustainable and resilient energy future.',
      'Pushing the boundaries of autonomous driving technology, aiming to transform transportation and enhance safety.',
      'Inspiring innovation and competition by leading the way in electric vehicles and renewable energy, encouraging industry-wide advancements.',
      'Creating a purpose-driven brand centered around sustainability, technological innovation, and a vision for a cleaner future, resonating with environmentally conscious consumers worldwide.',
    ],
  },
  {
    title: 'Shopify',
    company_name: 'Tobias Lütke, Daniel Weinand, and Scott Lake',
    icon: shopify,
    iconBg: '#383E56',
    date: 'June 2006',
    points: [
      'Empowering entrepreneurs with an accessible platform.',
      'Simplicity and user-friendly experience for all levels of technical expertise.',
      'Endless customization possibilities to create unique online stores.',
      'Reliable and scalable infrastructure for seamless operations.',
      'Robust marketing and analytics tools for data-driven growth.',
      'Thriving community and support for collaboration and guidance.',
      'Continuous innovation to stay at the forefront of e-commerce.',
      'Global reach and scalability to expand businesses worldwide.',
    ],
  },
  {
title: 'Meta',
company_name: 'Mark Zuckerberg',
icon: meta,
iconBg: '#E6DEDD',
date: 'Jan 2021',
points: [
'Building the future of the metaverse and virtual reality.',
'Connecting people worldwide and fostering social connections.',
'Enabling immersive experiences through virtual and augmented reality technologies.',
'Driving innovation in the fields of artificial intelligence and machine learning.',
'Empowering businesses with advertising and marketing opportunities on social platforms.',
'Investing in cutting-edge research and development for technological advancements.',
'Promoting digital inclusion and accessibility to bridge the digital divide.',
'Continuously expanding services and products to meet evolving user needs.',
],
}
];


const quotes = [
  {
    quote: 'Chase the vision, not the money; the money will end up following you',
    author: 'Tony Hsieh',
    designation: 'CEO',
    company: 'Zappos',
  },
  {
    quote: "Any time is a good time to start a company.",
    author: 'Ron Conway',
    designation: 'Noted Startup Investor',
    company: ' SV Angel',
  },
  {
    quote: "The secret to successful hiring is this: look for the people who want to change the world.",
    author: 'Marc Benioff',
    designation: 'CEO',
    company: 'SalesForce',
  },
  {
    quote: "Ideas are commodity. Execution of them is not",
    author: 'Micheal',
    designation: 'CEO',
    company: 'Dell',
  },
  {
    quote: 'I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.',
    author: 'Jeff Bezos',
    designation: 'Founder & CEO',
    company: 'Amazon',
  },
  {
    quote: "The way to get started is to quit talking and start doing.",
    author: 'Walt Disney',
    designation: 'Co-Founder',
    company: 'Disney',
  },
];

const projects = [
  {
    name: 'filmscope',
    description: 'A user-friendly web-based platform for searching and booking car rentals from various providers. Experience convenient and efficient transportation solutions.',
    tags: [
      { name: 'html', color: 'blue-text-gradient' },
      { name: 'javascript', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: carrent,
    source_code_link: 'https://botzoid.netlify.app/',
  },
  {
    name: 'Codex ChatBot',
    description: 'An interactive web platform integrated with OpenAI for engaging chat experiences. Connect with the AI-powered chatbot for insightful conversations.',
    tags: [
      { name: 'html', color: 'blue-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },

      { name: 'javascript', color: 'green-text-gradient' },
      { name: 'express js', color: 'pink-text-gradient' },
      { name: 'nodejs', color: 'pink-text-gradient' },

      { name: 'openai', color: 'pink-text-gradient' },
    ],
    image: carrent,
    source_code_link: 'https://botzoid.netlify.app/',
  },
  {
    name: 'Insights-A BlogApp',
    description: 'A feature-rich web-based blogging platform built with React, MongoDB, Mongodb,Nodejs aned Express js. Share your insights, stories, and experiences with the world.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'nodejs', color: 'pink-text-gradient' },
      { name: 'expressjs', color: 'pink-text-gradient' },

    ],
    image: carrent,
    source_code_link: 'https://insightsphere.vercel.app/',
  },
  {
    name: 'GPT3-Landing Page',
    description: 'Discover the world with the GPT3 travel landing page. Book flights, hotels, and rental cars effortlessly. Get curated recommendations for popular destinations.',
    tags: [
      { name: 'React-js', color: 'blue-text-gradient' },
      { name: 'Css3', color: 'green-text-gradient' },
      { name: 'React-icons', color: 'pink-text-gradient' },
    ],
    image: tripguide,
    source_code_link: 'https://gpt3chat.netlify.app/',
  },
  {
    name: 'Gerich - Restaurant Landing Page',
    description: 'Experience the culinary delights at Gerich. Discover exquisite dishes, cozy ambiance, and excellent service. Reserve your table today!',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'css', color: 'green-text-gradient' },
      { name: 'react-icons', color: 'pink-text-gradient' },
    ],
    image: tripguide,
    source_code_link: 'https://eat-at-gerich.netlify.app/',
  },
  {
    name: 'StockCentral',
    description: 'Stay updated with the latest stock market information on StockCentral. Real-time data, charts, and analysis tools to make informed investment decisions.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'cloudinary', color: 'blue-text-gradient' },
      { name: 'nodejs & express js', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'blue-text-gradient' },
      { name: 'sass', color: 'pink-text-gradient' },
      { name: 'redux-js toolkit', color: 'blue-text-gradient' },
    ],
    image: tripguide,
    source_code_link: 'https://stockcentral.netlify.app/',
  },
  {
    name: 'Conversia-An Openai-Integrated Chat App',
    description: 'A web application that integrates OpenAI for interactive chat experiences. Engage in meaningful conversations with the advanced chat engine.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'reduxjs/toolkit', color: 'green-text-gradient' },
      { name: 'react-chat-engine-advanced', color: 'blue-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
      { name: 'openai', color: 'blue-text-gradient' },
      { name: 'nodejs & express js', color: 'blue-text-gradient' },
    ],
    image: jobit,
    source_code_link: 'https://iamconversi.vercel.app/',
  },
];


  
  
export {services, technologies, experiences, quotes, projects};

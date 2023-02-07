
export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
  linkText?: string;
  color: "red" | "orange" | "green" | "blue" | "indigo" | "purple" | "pink";
  tools: (string | [string, boolean])[]
}

export const getProjectData: () => ProjectData[] = () => [
  {
    title: "Shared Stopwatch",
    subtitle: 'Syncs stopwatches between devices to see live race updates',
    description: 'This react app allows multiple users to see and interact with the same stopwatch. Intended for cross country races, it can allow coaches or spectators see live lap updates from people at other sections of the course. The web app was written with React and the backend utilizes AWS and a NodeJS server connected to a MongoDB database.',
    color: 'orange',
    image: '/images/stopwatch.png',
    link: 'https://stopwatch.stanley5.com',
    linkText: 'Stopwatch',
    tools: ['react.png', 'aws.png', 'nodejs.png']
  },

  {
    title: "Wordsearch Solver",
    subtitle: "Solve wordsearch using a camera",
    description: 'This project was the culmination of years of frustration at losing to my brothers at our annual beach wordsearch battle. After being very surprised that this didn\'t already exist, I set out to create a website where you can simply upload a (well cropped) image of a wordsearch and instantly have the solution drawn for you. Since many OCR libraries such as Google Tesseract weren\'t reliable on the single letters in a wordsearch, I was forced to train an image classifier using tensorflow to identify letters myself after the image is processed and each letter is separated from the original image.',
    color: 'purple',
    image: '/images/wordsearch.png',
    link: 'https://wordsearch-solver.onrender.com/',
    tools: ['react.png', 'tensorflow.png', 'aws.png']
  },

  {
    title: "Explore the English Lexicon",
    subtitle: "An interactive tree respesentation of all english words",
    description: 'In the fall of my sophomore year at Princeton, I took an introduction to linguistics class where we talked in great detail about the sounds of the english language and how they interact with each other. This, combined with my computer science class where we were implementing tree structures, inspired me to make this visualization of the english lexicon by organizing words by their sequence of letters in order to shed light on their relationships in an intuitive way.',
    color: 'red',
    image: '/images/letter.PNG',
    link: 'https://main.d272h0g3ef6phz.amplifyapp.com/',
    tools: ['react.png', 'aws.png']
  },

  {
    title: "GPS Ruler",
    subtitle: 'Measures distances very accurately with mobile gps',
    description: '"GPS Ruler" is an android app that I made after being dissatisfied with the apps that were currently available. Although there are many apps targeted towards golf and disc golf that do this, they only took one GPS sample at each point and were therefore very innacurate. I solved this by averaging many points on each end of the measurent and using statistical analysis to alert users of error and outliers in their measurement and showing the measurements on a Google map.',
    color: 'green',
    image: '/images/googlemap.png',
    link: 'https://github.com/jacks14235/GPSRuler',
    tools: ['android-studio.png', 'java.png']
  },

  {
    title: "My Personal Website",
    subtitle: 'The website you\'re visiting now',
    description: 'This website was written using NextJS and TypeScript. As I continue my studying and career, I expect to keep this website up to date with everything I\'m doing. Feel free to check out the code on github!',
    color: 'blue',
    image: '/images/react.jpg',
    link: '/',
    tools: ['next-js.svg', 'typescript.png', 'aws.png']
  },

  // {
  //   title: "Mandelbrot Viewer",
  //   subtitle: 'Interactive, graphics accelerated, arbitrary precision fractal exploration',
  //   description: "The mandelbrot set has always been fascinating to me, making this one of my favorite programs I have written. Although writing a simple viewer is relatively simple, I love challenging myself to make the image generation as fast as possible. When I wrote it for the first time in python, it took around 10 seconds to generate an image. Now, using C++ and Cuda, I have been able to optimize this generation to just 15 milliseconds per frame. I've also recently developed an arbitrary precision version, but I'm still working out some kinks.",
  //   color: 'red', 
  //   image: '/images/mandelbrot.png',
  //   tools: ['cpp.png', 'cuda.png']
  // },

  // {
  //   title: "Nbody Simulator",
  //   subtitle: 'One of my first coding projects ever, which I have written in python and Java',
  //   description: "This project was part of my \"Computer Science: A interdisciplinary approach\" class at Princeton University. The program reads planetary starting conditions from a textfile and simulates gravitational pulls and the movement of the planets. Depending on the starting conditions and the number of planets being simulated, the outputs can be pretty cool! Check out the code behind it on github.",
  //   color: 'purple', 
  //   image: '/images/planet.png',
  //   tools: ['python.png', 'java.png']
  // }
]
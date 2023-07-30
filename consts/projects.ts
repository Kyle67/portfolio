export interface ProjectInfo {
  appName: string;
  description: string;
  extendedDescription: string;
  purpose: string;
  keyImplementations: string[];
  problemsFaced: string[];
  problemsOvercome: string[];
  lessonsLearnt: string[];
  image: string;
  url: string;
}

export const projects: ProjectInfo[] = [
  {
    appName: "Movie Web App",
    description:
      "Scan through a list of available movies and find movies that you might like or match your criteria",
    extendedDescription:
      "Scan through a list of available movies and find movies that you might like or match your criteria",
    purpose:
      "Usage of MongoDB, work with Next.js, become more familiar with Express", // TODO: Ability to bold words in here might be a nice addition
    // TODO: The key MongoDB decisions should be noted somewhere? (i.e. use of indexes, etc.) - maybe on the actual site in FAQ
    keyImplementations: [""],
    problemsFaced: [""],
    problemsOvercome: [""],
    lessonsLearnt: [""],
    image: "/projects/movieApp.png",
    url: "https://www.google.com.au",
  },
  {
    appName: "Movie Mobile App",
    description:
      "An extended version of the previous Movie Web App but for mobile users",
    extendedDescription:
      "An extended version of the previous Movie Web App but for mobile users",
    purpose: "Utilise Expo Go & React Native for a mobile experience",
    keyImplementations: [""],
    problemsFaced: [""],
    problemsOvercome: [""],
    lessonsLearnt: [""],
    image: "/projects/movieApp.png",
    url: "https://www.google.com.au",
  },
  {
    appName: "Portfolio Site",
    description:
      "Mainly created to showcase my skills and give insight to my capabilities",
    extendedDescription:
      "Mainly created to showcase my skills and give insight to my capabilities",
    purpose:
      "Showcase my work, improve my skills in Next.js, Figma, project/task planning",
    keyImplementations: [
      "Next.js",
      "File structure based routing",
      "React basics (componetisation, hooks)",
    ],
    problemsFaced: ["Next.js Hyrdration", "Sitemap", "Lack of full plan"],
    problemsOvercome: [""],
    lessonsLearnt: [
      "Sufficient planning & site maps are extremely useful to give a better idea of how the app should function",
      "Bad or insufficient plans can lead to unclear status/progress & PRs become overly large",
    ],
    image: "/projects/portfolio.png", // TODO: Add some shadow to the images?? Might make them pop a little more
    url: "https://www.google.com.au",
  },
];

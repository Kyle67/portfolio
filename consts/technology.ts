export interface TechnologyData {
  name: string;
  description: string;
  image: string;
  align: "left" | "right";
}

// TODO: Mention somewhere what parts of the technologies I have specifically touched? or is this already covered enough by information about the individual jobs and projects
export const technology: TechnologyData[] = [
  {
    name: "Expo",
    description:
      "Expo allows for rapid development and ensures an easy release process through the use of EAS Builds & Updates. The available branch & channel system ensures that environments and version can be easily maintained and made available.",
    image: "/technology/Expo.png",
    align: "left",
  },
  {
    name: "React Native",
    description:
      "React Native pairs extremely well with React as the language is very very similar. After getting past the initial learning curve of different components and some styling differences, it is quite easy to pickup and allows for rapid development of apps. The biggest struggle working with mobile development is definitely the differences in styling and identifying and solving device specific issues. Although I do consider the unique issues & way of thinking required for mobile development to be quite interesting",
    image: "/technology/React.png",
    align: "right",
  },
  {
    name: "MongoDB",
    description:
      "Through the use of MongoDB's many tools an effective database system can be setup. Good database architecture combined with well crafted indexes ensures fast and efficient queries. The flexibility available in documents allows the database to be quickly adapted while also allowing for strict schema validation to be implemented making it more similar to an SQL experience. Aggregations provide the flexibility to create queries of any kind and ensure useful data can be generated. Other tools like Charts allow for rapid dashboards to be spun up and provided to clients for instant statistics.",
    image: "/technology/MongoDB_full.png",
    align: "left",
  },
];

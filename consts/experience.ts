import { DurationObject, ShortLongObject } from "@/types";

export interface ExperienceData {
  name: string;
  position: string;
  duration: DurationObject;
  technologies: ShortLongObject;
  keyLearnings: string[];
  image: string;
}

export interface UnitObject {
  unitCode: string;
  unitName: string;
}
export interface EducationData {
  course: ShortLongObject;
  majors: string[];
  duration: DurationObject;
  gpa: number;
  keyUnits: UnitObject[];
  keyLearnings: string[];
  image: string;
}

export const experienceData: ExperienceData[] = [
  {
    name: "Labrys",
    position: "Junior Software Developer",
    duration: { start: 2022, end: "Current" },
    technologies: {
      short:
        "Web2, Mobile Development, Expo, React Native, MongoDB, Live Release Lifecycle",
      long: "Web2, Mobile Development (iOS & Android), Expo, React Native, MongoDB, Live Release Lifecycle", // TODO: Can I name projects here?
    },
    keyLearnings: [""],
    image: "/experience/Labrys.png",
  },
];

export const educationData: EducationData[] = [
  {
    course: {
      short: "Bachelors of Mathematics/Bachelors of Information Technology",
      long: "Bachelors of Mathematics (Applied & Computational)/Bachelors of Information Technology (Computer Science)",
    },
    majors: ["Mathematics (Applied & Computational)", "IT (Computer Science)"],
    duration: { start: 2015, end: 2022 },
    gpa: 5.75,
    keyUnits: [
      { unitCode: "CAB201", unitName: "Programming Principles" },
      { unitCode: "IFB130", unitName: "Database ..." },
    ],
    keyLearnings: [
      "Combination of Maths/IT provided good critical thinking & problem solving skills",
    ],
    image: "/experience/QUT.jpg",
  },
  {
    course: {
      short: "Master of Information Technology",
      long: "Master of Information Technology (Software Development)",
    },
    majors: ["Majoring in Software Development"],
    duration: { start: 2021, end: 2022 },
    gpa: 6.9,
    keyUnits: [
      { unitCode: "IFN666", unitName: "Web/Mobile Development" },
      { unitCode: "CABxxx", unitName: "Cloud Computing" },
    ],
    keyLearnings: [
      "Found a love for web dev",
      "Good practical & professional experience via a Capstone Project (Typescript, Pull Requests, etc.)",
    ],
    image: "/experience/QUT.jpg",
  },
];

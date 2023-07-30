import { Flex, Heading, chakra } from "@chakra-ui/react";
import ExperienceEducationBox from "../ExperienceEducationBox";
import ExperienceWorkBox from "../ExperienceWorkBox";
import { educationData, experienceData } from "@/consts/experience";
import Link from "next/link";

const Experience = () => {
  return (
    <Flex flexDir="column" alignItems="center" rowGap="20px">
      <Link
        id="experience"
        href="#experience"
        style={{ alignSelf: "flex-start" }}
      >
        <Heading size="lg">Experience</Heading>
      </Link>
      <ExperienceBoxContainer>
        {experienceData.map((experienceInfo) => (
          <ExperienceWorkBox
            key={experienceInfo.name}
            experienceInfo={experienceInfo}
          />
        ))}
      </ExperienceBoxContainer>
      <Heading size="lg" alignSelf="flex-start">
        Education
      </Heading>
      <ExperienceBoxContainer>
        {educationData.map((experienceInfo) => (
          <ExperienceEducationBox
            key={experienceInfo.course.short}
            experienceInfo={experienceInfo}
          />
        ))}
      </ExperienceBoxContainer>
    </Flex>
  );
};

export default Experience;

const ExperienceBoxContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    rowGap: "30px",
  },
});
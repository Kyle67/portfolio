import LinkHeading from "@/components/LinkHeading";
import { SectionMainContainer } from "@/components/StyledComponents";
import { educationData, experienceData } from "@/consts/experience";
import { Flex, chakra } from "@chakra-ui/react";
import ExperienceEducationBox from "../ExperienceEducationBox";
import ExperienceWorkBox from "../ExperienceWorkBox";

const Experience = () => {
  return (
    <SectionMainContainer>
      <LinkHeading heading="Experience" customText="🏛️ Experience" />
      <ExperienceBoxContainer>
        {experienceData.map((experienceInfo) => (
          <ExperienceWorkBox
            key={experienceInfo.name}
            experienceInfo={experienceInfo}
          />
        ))}
      </ExperienceBoxContainer>
      <LinkHeading heading="Education" customText="📚 Education" />
      <ExperienceBoxContainer>
        {educationData.map((experienceInfo) => (
          <ExperienceEducationBox
            key={experienceInfo.course.short}
            experienceInfo={experienceInfo}
          />
        ))}
      </ExperienceBoxContainer>
    </SectionMainContainer>
  );
};

export default Experience;

const ExperienceBoxContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    rowGap: "30px",
  },
});

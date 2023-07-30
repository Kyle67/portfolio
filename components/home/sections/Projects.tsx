import { projects } from "@/consts/projects";
import { Flex, chakra } from "@chakra-ui/react";
import ProjectInfoBox from "../ProjectInfoBox";
import LinkHeading from "@/components/LinkHeading";
import { SectionMainContainer } from "@/components/StyledComponents";

const Projects = () => {
  return (
    <SectionMainContainer>
      <LinkHeading heading="Projects" />
      <ProjectsContainer>
        {projects.map((projectInfo) => (
          <ProjectInfoBox key={projectInfo.appName} projectInfo={projectInfo} />
        ))}
      </ProjectsContainer>
    </SectionMainContainer>
  );
};

export default Projects;

const ProjectsContainer = chakra(Flex, {
  baseStyle: {
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },
});

import { projects } from "@/consts/projects";
import { Flex, Heading, chakra } from "@chakra-ui/react";
import ProjectInfoBox from "../ProjectInfoBox";
import Link from "next/link";

const Projects = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Link id="projects" href="#projects" style={{ alignSelf: "flex-start" }}>
        <Heading>Projects</Heading>
      </Link>
      <ProjectsContainer>
        {Object.entries(projects).map(([appName, projectInfo]) => (
          <ProjectInfoBox
            key={appName}
            appName={appName}
            projectInfo={projectInfo}
          />
        ))}
      </ProjectsContainer>
    </Flex>
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

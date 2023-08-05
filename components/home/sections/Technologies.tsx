import LinkHeading from "@/components/LinkHeading";
import { SectionMainContainer } from "@/components/StyledComponents";
import { technology } from "@/consts/technology";
import { Flex, chakra } from "@chakra-ui/react";
import ExtendedTechnologyInfo from "../ExtendedTechnologyInfo";
import StackTechnology from "../StackTechnology";

const Technologies = () => {
  return (
    <SectionMainContainer>
      <LinkHeading heading="Technology" customText="💻 Technologies" />
      <Flex columnGap="30px">
        <StackTechnology technology="MongoDB" image="/technology/MongoDB.png" />
        <StackTechnology technology="Express" image="/technology/Express.png" />
        <StackTechnology technology="React" image="/technology/React.png" />
        <StackTechnology technology="Node.js" image="/technology/Nodejs.png" />
      </Flex>
      <TechnologyContainer>
        {technology.map((technologyInfo) => (
          <ExtendedTechnologyInfo
            key={technologyInfo.name}
            technologyInfo={technologyInfo}
          />
        ))}
      </TechnologyContainer>
    </SectionMainContainer>
  );
};

export default Technologies;

const TechnologyContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    width: "100%",
    rowGap: "50px",
  },
});

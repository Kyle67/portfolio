import {
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { BaseModalContent } from "../BaseComponents";
import { educationData } from "@/consts/experience";

interface ExperienceEducationBox {
  experienceInfo: (typeof educationData)[number];
}

const ExperienceEducationBox = ({
  experienceInfo: {
    course,
    majors,
    duration: { start, end },
    gpa,
    keyUnits,
    keyLearnings,
    image,
  },
}: ExperienceEducationBox) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MainContainer onClick={onOpen}>
      <Image
        src={image}
        alt="Education Image"
        width={200}
        height={100}
        // placeholder="blur" // TODO Implement later - https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl
        style={{ objectFit: "contain" }}
      />
      <Flex flexDir="column" rowGap="10px">
        <Text>{course.long}</Text>
        <Text fontStyle="italic">
          {start}-{end}
        </Text>
        <Text>{gpa} GPA (7 point scale)</Text>
        <Flex flexDir="column">
          <Text>Key units: </Text>
          {keyUnits.map(({ unitCode, unitName }) => (
            <Text key={unitCode}>
              {unitCode} ({unitName})
            </Text>
          ))}
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <BaseModalContent>
          <Image
            src={image}
            alt={`${course} image`}
            width={200}
            height={100}
            style={{
              objectFit: "contain",
              alignSelf: "flex-start",
              paddingTop: "40px",
            }}
          />
          <Flex flexDir="column">
            <ModalHeader fontSize="28px">{course.short}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDir="column" rowGap="20px">
                <Flex flexDir="column">
                  {majors.map((major) => (
                    <Text key={major} pl="30px">
                      {major}
                    </Text>
                  ))}
                </Flex>
                <Text fontStyle="italic">
                  {start}-{end}
                </Text>
                <Text>{gpa} GPA (7 point scale)</Text>
                <Flex flexDir="column">
                  <Text>Key Units</Text>
                  <UnorderedList>
                    {keyUnits.map(({ unitCode, unitName }) => (
                      <ListItem key={unitCode}>
                        {unitCode} ({unitName})
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
                <Flex flexDir="column">
                  <Text>Key Learnings</Text>
                  <UnorderedList>
                    {keyLearnings.map((learning, index) => (
                      <ListItem key={index}>{learning}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
              </Flex>
            </ModalBody>
          </Flex>
        </BaseModalContent>
      </Modal>
    </MainContainer>
  );
};

export default ExperienceEducationBox;

const MainContainer = chakra(Flex, {
  baseStyle: {
    padding: "30px",
    border: "1px solid #41424B",
    borderRadius: "20px",
    _hover: { cursor: "pointer" },
    columnGap: "30px",
    width: "700px",
  },
});

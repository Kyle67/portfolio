import { EducationData, UnitObject } from "@/consts/experience";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import HeadingList from "../HeadingList";
import { InfoBoxContainer, StyledModalContent } from "../StyledComponents";

interface ExperienceEducationBox {
  experienceInfo: EducationData;
}

const ExperienceEducationBox = ({ experienceInfo }: ExperienceEducationBox) => {
  const {
    course,
    majors,
    duration: { start, end },
    gpa,
    keyUnits,
    keyLearnings,
    image,
  } = experienceInfo;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <InfoBoxContainer onClick={onOpen}>
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
      {/**
       * // TODO: Potentially refactor the modal into a reusable component. Should it just take the children which is the main content of the modal?
       */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <StyledModalContent>
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
                <HeadingList
                  heading="Key Units"
                  data={keyUnits}
                  formatter={({ unitCode, unitName }: UnitObject) =>
                    `${unitCode} ${unitName}`
                  }
                />
                <HeadingList heading="Key Learnings" data={keyLearnings} />
              </Flex>
            </ModalBody>
          </Flex>
        </StyledModalContent>
      </Modal>
    </InfoBoxContainer>
  );
};

export default ExperienceEducationBox;

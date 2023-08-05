import { ExperienceData } from "@/consts/experience";
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

interface ExperienceWorkBoxProps {
  experienceInfo: ExperienceData;
}

const ExperienceWorkBox = ({ experienceInfo }: ExperienceWorkBoxProps) => {
  const {
    name,
    position,
    duration: { start, end },
    technologies,
    image,
    keyLearnings,
  } = experienceInfo;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <InfoBoxContainer onClick={onOpen}>
      <Image
        src={image}
        alt="Work Image"
        width={200}
        height={100}
        // placeholder="blur" // TODO Implement later - https://nextjs.org/docs/pages/api-reference/components/image#blurdataurl
        style={{ objectFit: "contain" }}
      />
      <Flex flexDir="column" rowGap="10px">
        <Flex flexDir="column">
          <Text fontWeight="bold">{name}</Text>
          <Text>{position}</Text>
        </Flex>
        <Text fontStyle="italic">
          {start}-{end}
        </Text>
        <Flex flexDir="column">
          <Text decoration="underline">Main areas of experience</Text>
          <Text>{technologies.short}</Text>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <StyledModalContent>
          <Image
            src={image}
            alt={`${name} image`}
            width={200}
            height={100}
            style={{
              objectFit: "contain",
              alignSelf: "flex-start",
              paddingTop: "40px",
            }}
          />
          <Flex flexDir="column">
            <ModalHeader fontSize="28px">{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDir="column" rowGap="20px">
                <Text>{position}</Text>
                <Text fontStyle="italic">
                  {start}-{end}
                </Text>
                <Flex flexDir="column">
                  <Text decoration="underline">Main Areas of Experience</Text>
                  <Text>{technologies.long}</Text>
                </Flex>
                <HeadingList heading="Key Learnings" data={keyLearnings} />
              </Flex>
            </ModalBody>
          </Flex>
        </StyledModalContent>
      </Modal>
    </InfoBoxContainer>
  );
};

export default ExperienceWorkBox;

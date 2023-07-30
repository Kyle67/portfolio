import {
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { BaseModalContent } from "../BaseComponents";
import { ProjectInfo } from "@/consts/projects";

interface ProjectInfoBoxProps {
  appName: string;
  projectInfo: ProjectInfo;
}

const trimUrl = (url: string) =>
  url.startsWith("http") ? url.replace(/https*:\/\//g, "") : url;

const ProjectInfoBox = ({
  appName,
  projectInfo: {
    image,
    description,
    extendedDescription,
    keyImplementations,
    problemsFaced,
    problemsOvercome,
    lessonsLearnt,
    purpose,
    url,
  },
}: ProjectInfoBoxProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO: On hover of image enlarge image - set to absolute, zindex, dimensions, center on screen

  return (
    <MainContainer onClick={onOpen}>
      <Image src={image} alt={`${appName} image`} width={200} height={100} />
      <Flex rowGap="20px" flexDir="column">
        <Text fontWeight="bold">{appName}</Text>
        <Text>{description}</Text>
        <Flex flexDir="column">
          <Text>Main purpose:</Text>
          <Text>{purpose}</Text>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} preserveScrollBarGap={false}>
        <ModalOverlay />
        <BaseModalContent>
          <Flex flexDir="column" rowGap="30px" alignItems="center">
            <Image
              src={image}
              alt={`${appName} image`}
              width={200}
              height={100}
              style={{
                objectFit: "contain",
                alignSelf: "flex-start",
                paddingTop: "40px",
              }}
            />
            <AiOutlineGithub
              size={50}
              onClick={() =>
                // TODO: This doesn't account for middle mouse
                window.open("https://github.com/Kyle67/movie-search", "_blank")
              }
              cursor="pointer"
            />
          </Flex>

          <Flex flexDir="column">
            <ModalHeader>{appName}</ModalHeader>
            <ModalBody>
              <Flex rowGap="20px" flexDir="column">
                <Link href={url}>
                  <Text color="#1f9aff">{trimUrl(url)}</Text>
                </Link>
                <Text>{extendedDescription}</Text>
                <Flex flexDir="column">
                  {" "}
                  {/**
                   * // TODO: This can be a reusable component
                   */}
                  <Subheading>Key Implementations</Subheading>
                  <UnorderedList>
                    {keyImplementations.map((implementation, index) => (
                      <ListItem key={index}>{implementation}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
                <Flex flexDir="column">
                  <Subheading>Problems faced</Subheading>
                  <UnorderedList>
                    {problemsFaced.map((problem, index) => (
                      <ListItem key={index}>{problem}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
                <Flex flexDir="column">
                  <Subheading>Problems overcome</Subheading>
                  <UnorderedList>
                    {problemsOvercome.map((problem, index) => (
                      <ListItem key={index}>{problem}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
                <Flex flexDir="column">
                  <Subheading>
                    Lessons Learnt/Future Changes/Recommendations
                  </Subheading>
                  <UnorderedList>
                    {lessonsLearnt.map((lesson, index) => (
                      <ListItem key={index}>{lesson}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
              </Flex>
            </ModalBody>
          </Flex>
          <ModalCloseButton />
        </BaseModalContent>
      </Modal>
    </MainContainer>
  );
};

export default ProjectInfoBox;

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

const Subheading = chakra(Text, {
  baseStyle: {
    textDecoration: "underline",
  },
});

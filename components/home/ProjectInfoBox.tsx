import { ProjectInfo } from "@/consts/projects";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Text,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import HeadingList from "../HeadingList";
import { StyledModalContent } from "../StyledComponents";

interface ProjectInfoBoxProps {
  projectInfo: ProjectInfo;
}

const trimUrl = (url: string) =>
  url.startsWith("http") ? url.replace(/https*:\/\//g, "") : url;

const ProjectInfoBox = ({ projectInfo }: ProjectInfoBoxProps) => {
  const {
    appName,
    image,
    description,
    extendedDescription,
    keyImplementations,
    problemsFaced,
    problemsOvercome,
    lessonsLearnt,
    purpose,
    url,
  } = projectInfo;

  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO: On hover of image enlarge image - set to absolute, zindex, dimensions, center on screen

  // TODO: Opening modal has extra padding added to right of screen

  return (
    <MainContainer onClick={onOpen}>
      <Image
        src={image}
        alt={`${appName} image`}
        width={200}
        height={100}
        style={{ boxShadow: "0 0 10px 0px #FFFFFF80" }}
      />
      <Flex rowGap="20px" flexDir="column">
        <Text fontWeight="bold">{appName}</Text>
        <Text>{description}</Text>
        <Flex flexDir="column">
          <Text>Main purpose:</Text>
          <Text>{purpose}</Text>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <StyledModalContent>
          <Flex flexDir="column" rowGap="30px" alignItems="center">
            <Image
              src={image} // TODO: Move to styled chakra component
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
                <HeadingList
                  heading="Key Implementations"
                  data={keyImplementations}
                />
                <HeadingList heading="Problems faced" data={problemsFaced} />
                <HeadingList
                  heading="Problems overcome"
                  data={problemsOvercome}
                />
                <HeadingList
                  heading="Lessons Learnt/Future Changes/Recommendations"
                  data={lessonsLearnt}
                />
              </Flex>
            </ModalBody>
          </Flex>
          <ModalCloseButton />
        </StyledModalContent>
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

import { Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import NewLineText from "./NewLineText";

const terminalText = [
  "> Running startup script",
  "yarn",
  "Fetching Bio %",
  "Adding Memes %",
  "Fetching Gaming %",
  "Grabbing Food %",
  "Playing Games %",
  "Modding Keyboards %",
  "Done",
];

// TODO: Set a height for the terminal - When it reaches the bottom, it becomes scrollable and hides the top

// TODO: Add blinking line to show active

const terminalGeneralDelay = 0; // 50
const terminalLoadingDelay = 0; // 10

const Terminal = () => {
  const [text, setText] = useState("");
  const [isWaiting, setIsWaiting] = useState(true);
  const [runTerminal, setRunTerminal] = useState(false);
  const [command, setCommand] = useState("");

  const getProgressBarUpdate = (percentage: number) => {
    const barsShown = Math.floor(percentage / 10);
    return `[${"█".repeat(barsShown)}${"▒".repeat(
      10 - barsShown
    )}] ${percentage}%`;
  };

  useEffect(() => {
    // TODO: To set this up to automatically happen, need to fix useEffect running twice on startup
    const handleProgressBar = async () => {
      for await (const percentage of Array.from(Array(101).keys())) {
        await new Promise((resolve) => {
          setTimeout(() => {
            if (percentage === 0) {
              setText((prev) => prev + "[          ] 0%");
              resolve(percentage);
              return;
            }
            setText((prev) =>
              prev.replace(
                new RegExp(/\[[\s█▒]+\] [0-9]{1,2}\%$/), // !Note: We need the \s as it helps account for the special characters
                getProgressBarUpdate(percentage)
              )
            );
            resolve(percentage);
          }, terminalLoadingDelay);
        });
      }
    };

    const terminalStartup = async () => {
      for await (const str of terminalText) {
        for await (const char of str) {
          await new Promise((resolve) => {
            setTimeout(async () => {
              if (char === "%") {
                await handleProgressBar();
                resolve(char);
                return;
              }
              setText((prev) => prev + char);
              resolve(char);
            }, terminalGeneralDelay);
          });
        }
        // TODO: Loading state logic can go here (grab until the previous \n and constantly update the text and number of ='s between the []'s)
        setText((prev) => prev + "\n");
      }
      setIsWaiting(false);
    };

    runTerminal && terminalStartup();
  }, [runTerminal]);

  const runCommand = () => {
    setText((prev) => prev + `> ${command}\n`);
    setIsWaiting(true);
    // TODO: Update loading state, display relevant text
    switch (command) {
      case "help":
        setText(
          (prev) =>
            prev +
            `You may type one of the following commands:
        - help
        - wow
        - test
        - ping`
        );
        break;
      case "ping":
        setText((prev) => prev + "Pong!");
        break;
      default: // TODO: Way to make this text red?
        setText(
          (prev) =>
            prev +
            "Command not recognized, please enter a valid command or type `help` for some suggestions"
        );
    }
    setText((prev) => prev + "\n");
    setIsWaiting(false);
    setCommand("");
  };

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    textRef.current.scrollTop = textRef.current.scrollHeight; // TODO: Should be able to scroll back up to see previous commands & such
  }, [text, isWaiting]);

  // TODO: Could add bar to top of box like a window (i.e. have Command Prompt in title in bar at top)

  return (
    <Flex
      ref={textRef}
      bgColor="#141414" // TODO: Move this to a styled component
      border="1px solid black"
      flexGrow={1}
      mx="20px"
      w="100%"
      color="whiteAlpha.800"
      flexDir="column"
      maxH="300px"
      overflowY="hidden"
      onClick={() => {
        setRunTerminal(true);
      }}
    >
      {runTerminal ? (
        <NewLineText text={text} />
      ) : (
        <Text alignSelf="center" mx="auto">
          Click to start...
        </Text>
      )}
      {!isWaiting && (
        <Flex>
          <Text>{">"}</Text>
          <Input // TODO: Autofocus
            autoFocus
            variant="unstyled"
            paddingLeft="5px"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyUp={(key) => {
              if (key.code === "Enter") runCommand();
            }}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default Terminal;

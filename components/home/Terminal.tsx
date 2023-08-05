import { Flex, Input, Text, chakra } from "@chakra-ui/react";
import { Share_Tech } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import {
  LiaWindowClose,
  LiaWindowMaximize,
  LiaWindowMinimize,
} from "react-icons/lia";
import NewLineText from "./NewLineText";

const terminalFont = Share_Tech({
  weight: "400",
  subsets: [],
});

const terminalText = [
  "> Running startup script",
  "yarn",
  "Retrieving Bio %",
  "Adding Memes %",
  "Fetching Food %",
  "Grinding Games %",
  "Modding Keyboards %",
  "Done",
  "Type a command or `help`",
];

// TODO: Set a height for the terminal - When it reaches the bottom, it becomes scrollable and hides the top

// TODO: Add blinking line to show active

// TODO: Clicking anywhere in the box should focus the textinput used as the command line

// TODO: maybe clicking the x closes it and shows a desktop icon instead. Clicking on that then reopens it

const terminalGeneralDelay = 0; // 50
const terminalLoadingDelay = 0; // 10

const loadedChar = "█";
const unloadedChar = "▒";

const Terminal = () => {
  const [text, setText] = useState("");
  const [isWaiting, setIsWaiting] = useState(true);
  const [runTerminal, setRunTerminal] = useState(false);
  const [command, setCommand] = useState("");

  const commands: Record<string, () => void> = {
    help: () =>
      setText(
        (prev) =>
          prev +
          `Available commands include:
    - help
    - wow
    - test
    - ping`
      ),
    ping: () => setText((prev) => prev + "Pong!"),
  };

  const commandProxyHandler: ProxyHandler<Record<string, () => void>> = {
    get: (target, property) => {
      return (
        target[property as string] ??
        (() =>
          setText(
            (prev) =>
              prev +
              "Command not recognized, please enter a valid command or type `help` for some suggestions"
          ))
      );
    },
  };

  const commandProxy = new Proxy(commands, commandProxyHandler);

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    textRef.current.scrollTop = textRef.current.scrollHeight; // TODO: Should be able to scroll back up to see previous commands & such
  }, [text, isWaiting]);

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

    const getProgressBarUpdate = (percentage: number) => {
      const barsShown = Math.floor(percentage / 10);
      return `[${loadedChar.repeat(barsShown)}${unloadedChar.repeat(
        10 - barsShown
      )}] ${percentage}%`;
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

    commandProxy[command]();

    setText((prev) => prev + "\n");
    setIsWaiting(false);
    setCommand("");
  };

  // TODO: Could add bar to top of box like a window (i.e. have Command Prompt in title in bar at top)

  return (
    <TerminalContainer flexDir="column">
      <WindowTopBar>
        <LiaWindowMinimize size={20} />
        <LiaWindowMaximize size={20} />
        <LiaWindowClose size={20} />
      </WindowTopBar>
      <CommandWindowContainer
        className={terminalFont.className}
        ref={textRef}
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
            <Input
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
      </CommandWindowContainer>
    </TerminalContainer>
  );
};

export default Terminal;

const TerminalContainer = chakra(Flex, {
  baseStyle: {
    marginX: "20px",
    width: "2000px",
    height: "300px",
    boxShadow: "5px 5px 7px 2px #00000050",
  },
});

const WindowTopBar = chakra(Flex, {
  baseStyle: {
    backgroundColor: "#000000",
    height: "20px",
    justifyContent: "flex-end",
  },
});

const CommandWindowContainer = chakra(Flex, {
  baseStyle: {
    backgroundColor: "#0d0d0d",
    border: "1px solid black",
    flexGrow: 1,
    color: "whiteAlpha.800",
    flexDirection: "column",
    maxHeight: "300px",
    overflowY: "hidden",
  },
});

import MessageBubble from "./MessageBubble";
import { useRef, useEffect, useState } from "react";
import OpenAI from "openai";
import { systemMessage } from "./systemmessage";
import {
  ChatContainer,
  Label,
  StyledMessageLabel,
  WindowContainer,
  TerminalWindowContainer,
  CenteredInputContainer,
  StyledInput,
  StyledLabel,
  StyledButton,
  ButtonContainer,
  HeaderTab,
  StyledFa,
  ModalOverlay,
  ModalContainer,
  CloseButton,
  SendButton,
  StyledFa2,
  MessageSuggestionsContainer,
} from "./StyledComponents";

type Message = {
  text: string;
  isUser: boolean;
};
function ChatBot() {
  const initMessage =
    "Hi! I'm SeanBot — here to answer any questions about Sean. Ask me anything! I'm still learning, so my answers may not be perfect.";
  const [messages, setMessages] = useState<Message[]>([
    { text: initMessage, isUser: false },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestedMessages, setSuggestedMessages] = useState<string[]>([
    "Tell me about yourself",
    "What are your skills?",
    "What is your work experience.",
  ]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestedMessages((prev) =>
      prev.filter((message) => message !== suggestion)
    );
  };

  const fetchResponse = async (userMessage: string) => {
    setLoading(true);
    try {
      const openAiClient = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY || "",
        dangerouslyAllowBrowser: true,
      });

      const response = await openAiClient.chat.completions.create({
        model: "ft:gpt-4o-2024-08-06:personal:seanbot:BIjW4IEM",
        messages: [
          {
            role: "system",
            content: systemMessage,
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
      });

      const botReply =
        response.choices[0]?.message?.content ||
        "Sorry, I could not process that.";
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botReply, isUser: false },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: Unable to fetch response.", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = () => {
    if (inputValue.trim() === "") return;

    const userMessage = inputValue.trim();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, isUser: true },
    ]);
    setInputValue("");
    fetchResponse(userMessage);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <WindowContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80%",
          width: "80%",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.8)",
        }}
      >
        <TerminalWindowContainer>
          <HeaderTab>
            <StyledLabel>SeanBot: AI Agent~</StyledLabel>
          </HeaderTab>
          <ChatContainer ref={chatContainerRef}>
            {messages.map((message: Message, index: number) => (
              <>
                <StyledMessageLabel isUser={message.isUser}>
                  {message.isUser ? "User" : "SeanBot"}
                </StyledMessageLabel>
                <MessageBubble
                  key={index}
                  message={message.text}
                  isUser={message.isUser}
                />
              </>
            ))}

            {loading && (
              <div>
                <StyledMessageLabel isUser={false}>SeanBot</StyledMessageLabel>
                <MessageBubble
                  message={initMessage}
                  isUser={false}
                  isLoading={true}
                />
              </div>
            )}
          </ChatContainer>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              backgroundColor: '#2d0922',
              height: 'fit-content',
              width: '100%',
              padding: '5px',
              boxSizing: 'border-box',
            }}
          >
            {suggestedMessages.map((suggestion, index) => (
              <MessageSuggestionsContainer
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </MessageSuggestionsContainer>
            ))}
          </div>
          <CenteredInputContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                gap: "5px",
              }}
            >
              <StyledLabel style={{ color: "green" }}>User@Input: </StyledLabel>
              <StyledInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
              <SendButton style={{ cursor: "pointer" }} onClick={sendMessage}>
                <StyledFa2 src="https://cdn.pixabay.com/photo/2015/12/07/22/53/paper-planes-1081560_1280.png" />
              </SendButton>
            </div>
          </CenteredInputContainer>
        </TerminalWindowContainer>
      </div>
      <ButtonContainer>
        <StyledButton onClick={toggleModal}>About</StyledButton>
        <StyledButton
          href="https://github.com/SeanBrown12345"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledFa src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-1-logo-black-and-white.png" />
          Source
        </StyledButton>
      </ButtonContainer>
      {isModalVisible && (
        <ModalOverlay>
          <ModalContainer>
            <Label>About SeanBot</Label>
            <p>
              SeanBot is a personalized AI agent fine-tuned on GPT-4o to answer
              questions about me in my own voice and tone. It was trained using
              supervised learning on a small, custom dataset that included
              structured bio info, work experience, and Q&A-style conversations.
              The model was fine-tuned using OpenAI’s API, with a training set
              of 4,971 tokens over 3 epochs. It used a batch size of 1 and a
              learning rate multiplier of 1.59.
            </p>
            <CloseButton onClick={toggleModal}>Close</CloseButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </WindowContainer>
  );
}

export default ChatBot;

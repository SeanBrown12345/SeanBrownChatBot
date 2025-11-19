import { styled, keyframes } from '@mui/material/styles'

const dotsAnimation = keyframes`
  0% {
    content: '';
  }
  33% {
    content: '.';
  }
  66% {
    content: '..';
  }
  100% {
    content: '...';
  }
`;

const StyledBotMessage = styled('div')({
    backgroundColor: '#7098be',
    padding: '10px',
    borderRadius: '2px',
    maxWidth: '80%',
    alignSelf: 'flex-start',
    boxSizing: 'border-box',
    fontFamily: 'Courier New, monospace',
    color: 'black',
})

const StyledUserMessage = styled('div')({
    backgroundColor: '#E95420',
    padding: '10px',
    borderRadius: '2px',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    boxSizing: 'border-box',
    fontFamily: 'Courier New, monospace'
})

const StyledLoadingMessage = styled('div')({
  backgroundColor: '#7098be',
  padding: '10px',
  borderRadius: '2px',
  maxWidth: '80%',
  alignSelf: 'flex-start',
  boxSizing: 'border-box',
  fontFamily: 'Courier New, monospace',
  display: 'flex',
  '&::after': {
    content: "''",
    animation: `${dotsAnimation} 1.5s infinite`,
    
  },
  minHeight: '40px',
  width: '50px',
});

interface MessageBubbleProps {
    message: string;
    isUser: boolean;
    isLoading?: boolean;
}
function MessageBubble({ message, isUser, isLoading }: MessageBubbleProps) {
  if (isLoading) {
    return (
      <StyledLoadingMessage>
      </StyledLoadingMessage>
    );
  }

  if(isUser){
    return (
      <StyledUserMessage>
        {message}
      </StyledUserMessage>
    );
  }
  return (
    <StyledBotMessage>
      {message}
    </StyledBotMessage>
  );


}

export default MessageBubble;
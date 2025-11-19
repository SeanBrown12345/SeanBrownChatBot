import { styled } from '@mui/material/styles'

export const ChatContainer = styled('div')({
    height: '100%', 
    width: '100%',  
    display: 'flex', 
    flexDirection: 'column',
    gap: '8px',
    padding: '15px',
    boxSizing: 'border-box',
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: '#2d0922',
    
});
export const WindowContainer = styled('div')({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: '10px',
    gap: '30px',
    backgroundImage: 'url("https://wallpapers.com/images/hd/ubuntu-clean-gradient-hd-aanxb8ba5q60gnj0.jpg")',
    backgroundColor: '#c3c3c3',
  
})

export const TerminalWindowContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  borderRadius: '5px',
  fontFamily: 'Courier New, monospace',
  
});

export const SendButton = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    borderRadius: '5px',
    height: '34px',
    width: '34px',
    border: '2px solid transparent',  
    '&:hover': {
        border: '2px solid white',  
    },
});
export const CenteredInputContainer = styled('div')({
  height: '50px',
  width: '100%',
  backgroundColor: '#2d0922',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '0 0 5px 5px',
  boxSizing: 'border-box',
})

export const StyledInput = styled('input')({
  width: '100%',
  fontSize: '15px',
  boxSizing: 'border-box',
  backgroundColor: '#2d0922',
  color: 'white',
  padding: '3px',
  border: '2px solid white',   
  fontFamily: 'monospace',
  borderRadius: '5px',
  textRendering: 'optimizeLegibility',
});

export const StyledFa = styled('img')({
  width: 'auto',
  height: '25px',
  alignItems: 'center',
  cursor: 'pointer',
})

export const StyledFa2 = styled('img')({
  width: 'auto',
  height: '15px',
  alignItems: 'center',
  cursor: 'pointer',
})

export const StyledMessageLabel = styled('div')<{ isUser: boolean }>(({ isUser }) => ({
  fontSize: '12px',
  color: 'white',
  width: '100%',
  textAlign: isUser ? 'right' : 'left',
 
}));



export const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '10vw',
})

export const HeaderTab = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  background: '#535149',
  height:'30px',
  width:'100%',
  justifyContent: 'center',
  borderRadius: '5px 5px 0 0',
  
})

export const StyledButton = styled('a')({
  gap: '10px',
  fontFamily: 'monospace',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor: '#E95420',
  fontSize: '18px',
  borderRadius: '.5rem',
  height: '60px',
  width: '150px',
  boxSizing: 'border-box',
  color: '#111827',
  textDecoration: 'none',
  fontWeight: 600,
  alignContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(249,250,251)',
  },
  '&:focus': {
    outline: '2px solid transparent',
    outlineOffset: '2px',
  },
  '&:focus-visible': {
    boxShadow: 'none',
  },
});

export const MessageSuggestionsContainer = styled('a')({
  fontFamily: 'monospace',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  backgroundColor: '#AEA79F',
  fontSize: '15px',
  borderRadius: '.5rem',
  height: '40px',
  boxSizing: 'border-box',
  color: '#111827',
  textDecoration: 'none',
  maxWidth: '200px',
  fontWeight: 600,
  padding: '5px',
  alignContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(249,250,251)',
  },
  '&:focus': {
    outline: '2px solid transparent',
    outlineOffset: '2px',
  },
  '&:focus-visible': {
    boxShadow: 'none',
  },
});

export const StyledLabel = styled('div')({
  fontSize: '17px',
  textAlign: 'center',
  color: 'white',
  fontFamily: 'monospace',
  fontWeight: '600',
})

export const ModalOverlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  
});

export const ModalContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Courier New, monospace',
  background: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.8)',
  textAlign: 'center',
  maxWidth: '600px',
  minWidth: '300px',
  width: '50%',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CloseButton = styled('button')({
  fontFamily: 'Courier New, monospace',
  background: 'red',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: 'rgb(249,250,251)',
    border: '2px solid black',
    color: 'black',
  },
});

export const Label = styled('div')({
  fontSize: '25px',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
});



import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#020d15', // Your custom button background color
          fontWeight: 'bolder',
          width: 150,
          borderRadius: 20,
          margin: 20,
          '&:hover': {
            backgroundColor: '#003841'
          }
        },
      },
    },
    PlaylistSaveButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#003841', // Your custom button background color
          text: 'white',
          fontWeight: 'bolder',
          width: 180,
          borderRadius: 20,
          '&:hover': {
            color: '#fc5a4b'
          }
        },
      },
    },
    SearchBarTextField: {
      styleOverrides: {
        root: {
          width: 250,
          backgroundColor: 'white',
          borderRadius: 2,
          '.Mui-focused': {
            color: 'black',
            fontWeight: 'bold',
          },
          '.MuiInputLabel-root': {
            color: 'black',
            fontWeight: 'bold'
          },
        },
      }
    },
    PlaylistTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#020d15',
          width: "100%",
          paddingTop: '8px',
          '& input::placeholder': {
            color: 'white',
            fontSize: 'x-large',
            fontWeight: 'bold'
          },
          '.Mui-focused': {
            color: "white",
            fontSize: 'x-large',
            fontWeight: 'bold',
            marginTop: '-3%'
          },
        }
      }
    }
  },
})

export default theme;

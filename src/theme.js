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
          backgroundColor: '#010206', // Your custom button background color
          width: 150,
          borderRadius: 20,
          margin: 20,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: 250,
          backgroundColor: 'red',
          borderRadius: 10,
          '.Mui-focused': {
            color: 'white'
          },
          '.MuiInputLabel-root': {
            color: 'white'
          }
        }
      }
    }
  },
})

export default theme;

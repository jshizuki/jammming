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
          backgroundColor: 'white',
          borderRadius: 10,
          '.Mui-focused': {
            color: 'black',
            fontWeight: 'bold',
          },
          '.MuiInputLabel-root': {
            color: 'black',
            fontWeight: 'bold'
          },
        }
      }
    }
  },
})

export default theme;

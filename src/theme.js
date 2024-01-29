import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#010e3f', // Your custom button background color
          width: 150,
          borderRadius: 20,
          margin: 2
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: 250,
          backgroundColor: 'red'
        }
      }
    }
  },
})

export default theme;

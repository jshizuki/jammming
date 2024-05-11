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
            backgroundColor: "#131c27"
          }
        },
      },
    },
    PlaylistSaveButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'white', // Your custom button background color
          color: '#020d15',
          fontWeight: 'bolder',
          width: 180,
          borderRadius: 20,
          '&:hover': {
            color: 'white'
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
            color: '#020d15',
            fontWeight: 'bold',
          },
          '.MuiInputLabel-root': {
            color: '#020d15',
            fontWeight: 'bold'
          },
          '.MuiInputLabel-root.Mui-focused': {
            color: "#020d15"
          },
        },
      }
    },
    PlaylistTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          width: "100%",
          paddingTop: '8px',
          '& input': {
            // color: 'white',
            fontSize: 'x-large',
            fontWeight: 'bold',
            marginTop: '-3%'
          },
          // '& input::placeholder': {
          //   color: 'white',
          //   fontSize: 'x-large',
          //   fontWeight: 'bold'
          // },
          '.Mui-focused': {
            // color: "white",
            fontSize: 'x-large',
            fontWeight: 'bold',
          },
        }
      }
    }
  },
})

export default theme;

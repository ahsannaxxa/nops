const buttonStyle = theme => ({
    button: {
      margin: theme.spacing.unit,
      backgroundColor: '#00bfa5',
      color: theme.palette.primary.contrastText,
      fontFamily: 'Poppins, sans-serif',
      '&:hover': {
         backgroundColor: theme.palette.primary.main, 
      },  
    },
    input: {
      display: 'none',
    },
    label:{
      fontWeight: 500,
      textTransform: 'capitalize',
    },
  });

  export default buttonStyle;
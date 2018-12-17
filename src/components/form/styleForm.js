const styleForm = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: window.innerHeight, 
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#455a64',
        backgroundSize: 'cover',
    },
    signUpLink: {
        position: 'absolute',
        bottom: 30,
        fontWeight: 400,
        display: 'flex',
        color: 'white',
        '& span': {
            marginLeft: 10,
            color: theme.palette.secondary.main,
            fontWeight: 500,
        },
    }, 
    LoginForm: {
        maxWidth: 396,
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '35px 23px 23px 23px',
        borderRadius: 14,
        '& img': {
            margin: '0px 0px 25px 0px',
        },
        '& input': {
            width: 350,
        },
    },
    logo: {
        maxWidth: 150,
        width: '100%',
    },
});

export default styleForm;
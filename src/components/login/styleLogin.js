const styleLogin = theme => ({
    links: {
        margin: 8,
        paddingBottom: 50,
        '& div a': {
            fontWeight: 500,
            color: theme.palette.secondary.main,
        },
        '& label': {
            float: 'left',
            '& span': {
                color: '#444',
                fontWeight: 500,
            },
            '& input':{
                width: 'auto',
            },
        },
        '& svg': {
            float: 'left',
            color: '#00bea4',
        },
        '& div': {
            float: 'right',
            marginTop: 12,
            fontSize: 14,
        },
    }, 
});

export default styleLogin;
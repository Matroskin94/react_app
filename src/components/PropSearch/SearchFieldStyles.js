const styles = theme => ({
    buttons: {
        'margin': '0 5 0 0',
        'background': '#1a237e',
        'color': 'white',
        '&:hover': {
            background: '#534bae'
        },
        [theme.breakpoints.down('md')]: {
            bottom: '0'
        },
        [theme.breakpoints.up('md')]: {
            bottom: '-32px'
        }
    }
});

export default styles;

import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { AccountContext } from '../Context/AccountProvider';
import { MDBIcon } from 'mdbreact';
import { makeStyles } from '@mui/styles';
import HeaderMenu from './HeaderMenu';
import { borderRadius } from '@mui/system';

const useStyle = makeStyles({
    header:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'rgba(0,144,80,0.29)',
        padding:'5px'
    },
    headerMenu:{
        display:'flex',
        alignItems:'center'
    },
    image:{
        width:'40px',
        borderRadius:'50%'
    },
    chatLogo:{
        marginRight:'10px',
        fontSize:'20px',
        cursor:'pointer'
    }
})
const Header = () => {
    const classes = useStyle();
    const {account} = useContext(AccountContext)
    return (
        <Box className={classes.header}>
            <Box>
                <img className={classes.image} src={account.imageUrl} alt="" />
            </Box>
            <Box className={classes.headerMenu}>
            <MDBIcon className={classes.chatLogo} fab icon="facebook-messenger" />
            <HeaderMenu/>
            </Box>
        </Box>
    );
};

export default Header;
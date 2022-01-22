import { AppBar, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import Login from '../Account/Login';
import ChatBox from '../ChatBox/ChatBox';
import { AccountContext } from '../Context/AccountProvider';

const useStyle = makeStyles({
    loginHeader:{
        height: 200,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
});

const Messenger = () => {
    const classes = useStyle();
    const {account} = useContext(AccountContext)
    return (
        <div>
           <AppBar className={classes.loginHeader}>
               <Toolbar>

               </Toolbar>
           </AppBar>
           {account?<ChatBox/>:<Login/>}
        </div>
    );
};

export default Messenger;
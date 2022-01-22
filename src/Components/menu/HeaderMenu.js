import { makeStyles, Menu, MenuItem } from '@mui/material';
import { MDBIcon } from 'mdbreact';
import React, { useContext, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { AccountContext } from '../Context/AccountProvider';


const HeaderMenu = () => {
    const {setAccount} = useContext(AccountContext)
    const clintid = '905435115906-oqc8llsrvnocut97dfo8qf187rpl2sqh.apps.googleusercontent.com'
    const [open, setOpen] = useState(false);
    const handleClose =()=>{
        setOpen(false);
    }
    const handleClick = e =>{
       setOpen(e.currentTarget);
    }
    const onLogoutSuccess = ()=>{
        alert("log out success");
        console.clear();
        setAccount('')
    }
    return (
        <div>
            <MDBIcon icon="ellipsis-v" onClick={handleClick} />
            <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>
        <GoogleLogout
                    clientId={clintid}
                    buttonText="Log out"
                    isSignedIn={true}
                    onLogoutSuccess={onLogoutSuccess}
                    />
        </MenuItem>
      </Menu>
        </div>
    );
};

export default HeaderMenu;
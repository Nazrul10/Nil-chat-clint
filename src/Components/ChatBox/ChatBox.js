import { Box, Dialog } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import React from 'react';
import Menu from '../menu/Menu';

const style = {
    dialoPaper:{
        height: '95%',
        width: '95%',
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden',
        marginTop: '30px',
        color:'red'
    }
}
const useStyle = makeStyles({
    Component:{
        display:'flex',
        padding: '10px'
    },
    leftComponents:{
        minWidth: 200,
    }
})
const ChatBox = ({classes}) => {
    const classname = useStyle();
    return (
        <Dialog 
              classes={{paper: classes.dialoPaper}}  open={true}
              BackdropProps={{style:{'backgroundColor': 'unset'}}}
              >
                  <Box className={classname.Component}>
                      <Box className={classname.leftComponents}>
                            <Menu></Menu>
                      </Box>
                      <Box>fghf</Box>
                  </Box>
                  </Dialog>
    );
};

export default withStyles(style)(ChatBox);
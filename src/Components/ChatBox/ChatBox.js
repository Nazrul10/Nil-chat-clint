import { Box, Dialog } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import React from 'react';

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
        minWidth: 380,
    },
    image:{
        width:'220px',
        height:'220px'
    },
    title:{
        fontSize:35,
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
                            gff
                      </Box>
                      <Box>fghf</Box>
                  </Box>
                  </Dialog>
    );
};

export default withStyles(style)(ChatBox);
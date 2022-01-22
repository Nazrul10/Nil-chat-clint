import { Dialog, List, ListItem, Typography } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import { Box, fontSize } from '@mui/system';
import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { AccountContext } from '../Context/AccountProvider';

const style = {
    dialoPaper:{
        height: '100%',
        width: '95%',
        marginTop: '30px'
    }
}
const useStyle = makeStyles({
    Component:{
        display:'flex',
        padding: '10px'
    },
    leftComponents:{
        color:'black',
    },
    image:{
        width:'220px',
        height:'220px'
    },
    title:{
        fontSize:35,
    }
})
const Login = ({classes}) => {
    const classname = useStyle();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clintid = '905435115906-oqc8llsrvnocut97dfo8qf187rpl2sqh.apps.googleusercontent.com'

    const {account, setAccount}= useContext(AccountContext);

    const responseSuccess = (res) =>{
        setAccount(res.profileObj)
    }
    const responseFail = () =>{
        console.log('login fails');
    }
    return (
        <div>
              <Dialog 
              classes={{paper: classes.dialoPaper}}  open={true}
              BackdropProps={{style:{'backgroundColor': 'unset'}}}
              >
            <Box className={classname.Component}>
                <Box className={classname.leftComponents}>
                    <Typography sx={{fontSize:'26px', textAlign:'center',fontWeight: 'bold'}}>
                        To use Nil on your computer
                        </Typography>
                        <List>
                            <ListItem>1. Open Nil on your phone</ListItem>
                            <ListItem>2. tap manu or setting ans select Link Divices</ListItem>
                            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                        </List>
                </Box>
                <Box>
                    <img src={qrurl} alt="QR CODE" className={classname.image}/>
                    <GoogleLogin
                    clientId={clintid}
                    buttonText="Login"
                    isSignedIn={true}
                    onSuccess={responseSuccess}
                    onFailure={responseFail}
                    cookiePolicy={'single_host_origin'}
                    />
                </Box>
            </Box>
    </Dialog>
        </div>
    );
};

export default withStyles(style)(Login);
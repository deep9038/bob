import React from "react";
import { AccounthandelGrup, AvatarImg, AvatarName, HeaderContainer, ProfileAvatar, Surchbar } from "./HeaderEliment";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import {IoMdNotifications} from "react-icons/io"
import Typography from '@mui/material/Typography';
const Header = () => {
  return (
    <>
      <HeaderContainer>
        {/* surchbar */}
        <Surchbar />

        {/* action Buttons  start*/}
        <AccounthandelGrup>
          <Badge color="secondary" variant="dot" style={{marginRight:"1rem"}} >
            <IoMdNotifications size={25} />
          </Badge>
          <ProfileAvatar>
            <AvatarImg src="https://simg.nicepng.com/png/small/249-2492113_work-profile-user-default-female-suit-comments-default.png"/>
            <AvatarName>
            <Typography variant="body1">
       Deep sarkar
      </Typography>
            </AvatarName>
          </ProfileAvatar>
          <Button variant="contained" color="success" disableElevation>
            Log Out
          </Button>
        </AccounthandelGrup>
      </HeaderContainer>

      {/* <div className='header container-fluid'>
        <div className='row' style={{display:'flex',justifyContent:"space-around",alignItems:"center"}}>
            <div className='col-4' style={{display:"flex",justifyContent:"end"}}>
                <input type='search' placeholder='Search Your Item' style={{padding:"10px",borderRadius:"10px"}}></input>
            </div>
           <div className='col-2' style={{display:"flex",justifyContent:"space-between",marginTop:"5px"}}>
           <button className='btn btn-primary'>Sign Up</button>
            <button className='btn btn-primary'>Log In</button>
           </div>
           <div className='col-2' style={{color:"white",display:"flex",justifyContent:"space-around",alignItems:"center",position:'relative',right:'0'}}>
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-instagram"></i>
           <i class="fa-brands fa-twitter"></i>
           </div>
        </div>
    </div> */}
    </>
  );
};

export default Header;

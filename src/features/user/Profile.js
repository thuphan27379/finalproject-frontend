import { Grid, Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";
// import ProfileAbout from "./ProfileAbout";
// import ProfileSocialInfo from "./ProfileSocialInfo";
// import ProfileScorecard from "./ProfileScorecard";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";

// show own info & enterprise
// function show info of user account: profile page, 3 cards on the left
function Profile({ profile }) {
  const { user } = useAuth(); //get data of user from useAuth
  console.log('user', user);
  //render
  return (
    <Grid container spacing={3} width={"100%"}>
      {/* left sidebar 4/12 */}
      {/* <Grid item xs={12} md={4}>
        <Stack spacing={3}>
          <ProfileScorecard profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileSocialInfo profile={profile} />
        </Stack>
      </Grid> */}

      {/* center content 8/12 */}
      {/* SET GRID - MAIN BODY OUTLET */}
      <Grid item>
        <Stack spacing={3}>
          {user._id === profile._id && <PostForm />}
          {/* hien thi post form cua current user ma thoi 
          neu k, thi day la profile page ma moi nguoi co the xem dc */}
          <PostList userId={profile._id} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Profile;

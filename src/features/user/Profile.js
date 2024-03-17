import { Grid, Stack } from "@mui/material";

import useAuth from "../../hooks/useAuth";
import PostForm from "../post/PostForm";
import PostList from "../post/PostList";

// show own info & enterprise
// function show info of user account: profile page
function Profile({ profile }) {
  const { user } = useAuth(); //get data of user from useAuth
  console.log("user", user);

  //render
  return (
    <Grid spacing={1} width={"100%"} xs={8} paddingTop={0} marginTop={0}>
      <Grid>
        <Stack spacing={1} xs={8}>
          {user._id === profile._id && <PostForm />}
          {/* hien thi postForm cua current user ma thoi 
          neu k, thi day la profile page ma moi nguoi co the xem dc */}
          <PostList userId={profile._id} />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Profile;

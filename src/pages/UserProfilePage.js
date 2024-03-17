import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Profile from "../features/user/Profile";
import { getUser } from "../features/user/userSlice";
import LoadingScreen from "../components/LoadingScreen";
import ProfileAbout from "../features/user/ProfileAbout";
import ProfileScoreCard from "../features/user/ProfileScorecard";
import ProfileSocialInfo from "../features/user/ProfileSocialInfo";

// CODERCOMM
function UserProfilePage() {
  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  ///////fix bug about get list of posts of currentUser only
  //     shallowEqual:  // make sure re-render all the change of selectedUser
  const { selectedUser, isLoading } = useSelector(
    (state) => state.user,
    shallowEqual
  );

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);

  //UI
  return (
    <Container sx={{ paddingTop: "80px" }}>
      {/* <ProfileAbout /> */}
      {/* <ProfileScoreCard /> */}
      {/* <ProfileSocialInfo /> */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>{selectedUser && <Profile profile={selectedUser} />}</>
      )}
    </Container>
  );
}

export default UserProfilePage;

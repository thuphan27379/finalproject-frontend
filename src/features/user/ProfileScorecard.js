import { Card, Stack, Typography, Divider } from "@mui/material";
import { fNumber } from "../../utils/numberFormat";

// delete, will show how many friend in friendlist
// 1st show how many posts and friends
// use mui library to make a card for show info of the account
function ProfileScorecard({ profile }) {
  const { postCount, friendCount } = profile;

  // show how many friends and posts
  return (
    <Card sx={{ py: 3 }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Stack width={1} textAlign="center">
          <Typography variant="h4">{fNumber(friendCount)}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Friends
          </Typography>
        </Stack>

        <Stack width={1} textAlign="center">
          <Typography variant="h4">{fNumber(postCount)}</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Posts
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default ProfileScorecard;

import { Box, Grid, Paper, Button, Avatar, Typography, TextField, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const ProfileSection = styled(Box)({
  backgroundColor: '#2C2F33',
  color: '#FFFFFF',
  padding: '20px',
  borderRadius: '8px',
});

const PostSection = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: '#36393F',
  color: '#FFFFFF',
});

const RecommendationList = styled(List)({
  backgroundColor: '#2C2F33',
  color: '#FFFFFF',
  borderRadius: '8px',
});

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <ProfileSection>
          <Avatar alt="Emily Grace Anderson" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80, marginBottom: 2 }} />
          <Typography variant="h6">Emily Grace Anderson</Typography>
          <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>Try premium</Button>
          <Button variant="outlined" color="primary" fullWidth sx={{ marginTop: 1 }}>Edit profile</Button>
        </ProfileSection>
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" gutterBottom>Recommendations</Typography>
          <RecommendationList>
            {['Ethan Michael Brown', 'Sophia Elizabeth Williams', 'Benjamin James Carter', 'Noah William Davis', 'Isabella Sophia Martinez', 'Ava Madison Miller'].map(name => (
              <ListItem key={name}>
                <ListItemAvatar>
                  <Avatar alt={name} src={`/static/images/avatar/${name.replace(/\s/g, '').toLowerCase()}.jpg`} />
                </ListItemAvatar>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </RecommendationList>
        </Box>
      </Grid>
      <Grid item xs={12} md={9}>
        <Box sx={{ marginBottom: 3 }}>
          <TextField fullWidth variant="outlined" placeholder="New publication" sx={{ marginBottom: 2 }} />
          <Button variant="contained" color="primary">Post</Button>
        </Box>
        <PostSection>
          <Typography variant="h6">CodeForge Technologies</Typography>
          <Typography variant="body2">We are looking for talented and passionate professionals to join our dynamic IT team...</Typography>
          {/* Image and other post details go here */}
        </PostSection>
        <PostSection>
          <Typography variant="h6">CodeCraft School</Typography>
          <Typography variant="body2">Join our series of IT workshops and interactive lessons on programming...</Typography>
          {/* Image and other post details go here */}
        </PostSection>
      </Grid>
    </Grid>
  );
};

export default Home;


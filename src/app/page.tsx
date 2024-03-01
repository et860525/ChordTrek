import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import testImage from "/public/images/test-picture.jpg";

const songs = [
  { id: 1, name: "song1" },
  { id: 2, name: "song2" },
  { id: 3, name: "song3" },
  { id: 4, name: "song4" },
  { id: 5, name: "song5" },
];

export default async function Home() {
  return (
    <Box sx={{ p: 2 }}>
      <Image
        src={testImage}
        width="600"
        height="400"
        alt="test"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 10,
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: "700", py: 3 }}>
        Recent Tabs
      </Typography>
      <Grid
        container
        justifyContent="space- 
       evenly"
        spacing={{ xs: 1, md: 1 }}
      >
        {songs.map((song) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={2} key={song.id}>
            <Card sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://placehold.co/600x400"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {song.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SongCard from "../Card/Card";
import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Carousel from "../Carousel/Carousel";
import Grid from '@mui/material/Grid2'
const HomePage = () => {
  const [songArray, setSongArray] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://qtify-backend-labs.crio.do/albums/top");
        let data = await response.json();
        setSongArray(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <Box className={styles.mainContainer}>
      <Navbar />
      <Hero />
      <Box className={styles.SongContainer}>
        <Box className={styles.titleContainer}>
          <Typography color="white">Top Albums</Typography>
          <Typography color="#34C94B" onClick={toggleCarousel} className={styles.textbutton}>
            {showCarousel ? "Show All" : "Collapse"}
          </Typography>
        </Box>
        <Box className={styles.cardContainer}>
          {showCarousel ? (
            <Carousel items={songArray} />
          ) : (
            <Grid container spacing={2}>
            {songArray.map((item, index) => (
              <Grid key={index} size={2}>
                <SongCard image={item.image} numberOfFollowers={item.follows} albumName={item.title}/>
                </Grid>
                
            ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;




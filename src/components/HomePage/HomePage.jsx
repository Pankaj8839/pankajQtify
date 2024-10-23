import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SongCard from "../Card/Card";
import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Carousel from "../Carousel/Carousel";
import Grid from '@mui/material/Grid2'
import LabTab from '../Tab/Tab';
const HomePage = () => {
  const [songArray, setSongArray] = useState([]);
  const [songNewArray, setSongNewArray] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showCarouselInNewAlbum, setShowCarouselInNewAlbum] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topAlbumsResponse, newAlbumsResponse] = await Promise.all([
          fetch("https://qtify-backend-labs.crio.do/albums/top"),
          fetch("https://qtify-backend-labs.crio.do/albums/new")
        ]);
        
        const topAlbumsData = await topAlbumsResponse.json();
        const newAlbumsData = await newAlbumsResponse.json();
  
        setSongArray(topAlbumsData);
        setSongNewArray(newAlbumsData);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  const toggleCarouselInNewAlbum = () => {
    setShowCarouselInNewAlbum(!showCarouselInNewAlbum);
  };

  return (
    <Box className={styles.mainContainer}>
      <Navbar />
      <Hero />
      <Box className={styles.SongContainer}>
        <Box className={styles.titleContainer}>
          <Typography color="white">Top Albums</Typography>
          <Typography color="#34C94B" onClick={toggleCarousel} className={styles.textbutton}>
            {showCarousel ? "Show all" : "Collapse"}
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

      <Box className={styles.SongContainer}>
        <Box className={styles.titleContainer}>
          <Typography color="white">New Albums</Typography>
          <Typography color="#34C94B" onClick={toggleCarouselInNewAlbum} className={styles.textbutton}>
            {showCarouselInNewAlbum ? "Show all" : "Collapse"}
          </Typography>
        </Box>
        <Box className={styles.cardContainer}>
          {showCarouselInNewAlbum ? (
            <Carousel items={songNewArray} />
          ) : (
            <Grid container spacing={2}>
            {songNewArray.map((item, index) => (
              <Grid key={index} size={2}>
                <SongCard image={item.image} numberOfFollowers={item.follows} albumName={item.title}/>
                </Grid>
                
            ))}
            </Grid>
          )}
        </Box>
      </Box>
      <LabTab/>
    </Box>
  );
};

export default HomePage;




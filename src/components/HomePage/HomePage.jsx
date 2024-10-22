import React, { useEffect ,useState} from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SongCard from "../Card/Card";
import { Box,Card,Typography } from "@mui/material"; 
import styles from "./HomePage.module.css";
import Carousel from "../Carousel/Carousel";

const HomePage = () => {
  let [songArray, setSongArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
       let response = await fetch("https://qtify-backend-labs.crio.do/albums/top");
       let data = await response.json();
       console.log(data)
       setSongArray(data)
      
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])

  return (
    <Box
      className={styles.mainContainer}
    >
      <Navbar />
      <Hero />
      <Box className={styles.SongContainer}>
        <Box className={styles.titleContainer}>
        <Typography color="white" >
                  Top Albums
                </Typography>
                <Typography color="#34C94B" >
                  Show all
                </Typography>

        </Box>
        <Box className={styles.cardContainer}>
         <Carousel items={songArray}/>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;



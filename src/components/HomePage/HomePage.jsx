import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { Box } from "@mui/material"; 
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Box
      className={styles.mainContainer}
    >
      <Navbar />
      <Hero />
    </Box>
  );
};

export default HomePage;



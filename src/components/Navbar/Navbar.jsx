import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { Box } from "@mui/material";

function Navbar({ searchData }) {
  return (
    <Box className={styles.navbar}>
      <Link to="/">
        <Logo className={styles.logo}/>
      </Link>
      <Search
        placeholder="Search a song"
        searchData={searchData}
      />
      <Button text="Give Feedback" className={styles.button}/>
    </Box>
  );
}

export default Navbar;


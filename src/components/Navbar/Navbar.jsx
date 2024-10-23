import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { Box } from "@mui/material";

function Navbar({ searchData }) {

  return (
    <Box className={styles.navbar} >
      {/* <Box className={styles.content}> */}
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="search"
        searchData={searchData}
      />
       <Button text="Give Feeback"/>
       {/* </Box> */}
    </Box>
  );
}

export default Navbar;

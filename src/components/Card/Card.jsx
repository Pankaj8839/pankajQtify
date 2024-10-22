import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from "./Card.module.css"

const SongCard = ({ image, numberOfFollowers, albumName }) => {
    return (
        <Box>
            <Card className={styles.card}>
                <CardMedia
                    sx={{ height: 250, width: 250, objectFit: "contain" }}
                    image={image}
                    title={albumName}
                />
                <CardContent className={styles.cardContent}>
                    <Box >
                        <Typography className={styles.cardText}>
                            {numberOfFollowers} Followers
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box className={styles.title}>
                <Typography color="white" >
                    {albumName}
                </Typography>
            </Box>
        </Box>
    );
}
export default SongCard

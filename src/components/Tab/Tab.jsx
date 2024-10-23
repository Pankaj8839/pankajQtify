import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Carousel from '../Carousel/Carousel';
export default function LabTabs() {
    const [value, setValue] = React.useState('1');
    const [songArray, setSongArray] = React.useState([]);
    const [filteredSongs, setFilteredSongs] = React.useState([]);
    const [genres, setGenres] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    
       
        if (newValue !== "1") {
            let filteredArray = songArray.filter((song) => song.genre.label === newValue);
            setFilteredSongs(filteredArray);
        } else {
            setFilteredSongs(songArray); 
        }
    };
    

    React.useEffect(() => {

        const fetchSongs = async () => {
            try {
                const response = await fetch("https://qtify-backend-labs.crio.do/songs");
                const data = await response.json();

                setSongArray(data);
                setFilteredSongs(data);
            } catch (err) {
                console.log(err);
            }
        };
        const fetchData = async () => {
            try {
                const response = await fetch("https://qtify-backend-labs.crio.do/genres");
                const data = await response.json();

                setGenres(data.data);
            } catch (err) {
                console.log(err);
            }
        };
     
        fetchData();
        fetchSongs();
    }, []);
    return (
        <Box sx={{ width: '100%', typography: 'body1',  backgroundColor: '#121212' ,padding:"50px"}}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label={"ALL"} value={"1"}  sx={{ color: 'white' }} />
                        {genres.map((genre) => (
                            <Tab label={genre.label} value={genre.label} key={genre.key} sx={{ color: 'white' }} />
                        ))}
                    </TabList>
                </Box>
                <TabPanel value={"1"} >
                    <Carousel items={filteredSongs} displayLikes={true} />
                </TabPanel>
                {genres.map((genre) => (
                    <TabPanel value={genre.label} key={genre.key} >
                         <Carousel items={filteredSongs} displayLikes={true} />
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}
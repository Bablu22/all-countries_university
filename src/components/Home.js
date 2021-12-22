import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import University from './University';


const drawerWidth = 240;
const Home = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const [university, setUniversity] = useState([])
    const [countries, setCountries] = useState([])
    const [looding, setLooding] = useState(true)


    useEffect(() => {
        fetch('./countries.json')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=india`)
            .then(res => res.json())
            .then(data => {
                setUniversity(data)
                setLooding(false)
            })
    }, [])

    const fetchCountry = (country) => {
        setUniversity([])
        setLooding(true)
        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then(res => res.json())
            .then(data => {
                setUniversity(data)
                setLooding(false)
            })
    }




    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <Typography variant="h6" noWrap component="div" style={{ padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#182C61', color: 'white' }}>
                Country Name
            </Typography>

            <List>
                {countries.map((country, index) => (
                    <ListItem button onClick={() => fetchCountry(country.name)} key={country.name}>
                        <img style={{ width: '17px', marginRight: '10px' }} src={country.img} alt="" />
                        <ListItemText primary={country.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );


    return (
        <>

            {
                looding &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '300px' }}>
                    <CircularProgress />
                </Box>
            }

            <Box sx={{ display: 'flex' }}>

                <AppBar
                    position="fixed"
                    style={{backgroundColor:'#2c2c54',}}
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography  variant="h6" noWrap component="div">
                            University List
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer

                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`, marginTop: '70px' } }}
                >


                    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>

                        {
                            university.map(vercity => <University
                                key={vercity.name}
                                university={vercity}
                                countries={countries}

                            />)
                        }

                    </List>
                </Box>
            </Box>

        </>
    );
};

export default Home;
import React from 'react';
import { Button, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';


const University = ({ university, countries }) => {
    const { country, name, web_pages, } = university
    const countryFlag = countries.filter(i => i.name === country)


    return (
        <>

            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={countryFlag[0].img} />
                </ListItemAvatar>
                <ListItemText
                    style={{ overflowWrap: 'break-word' }}
                    primary={`University Name: ${name}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'blockc' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Location: {country}
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Website: <a href={web_pages[0]} target='_blank'>{web_pages[0]}</a>
                            </Typography>

                        </React.Fragment>
                    }
                />
                <Link to={`/details/${name}`} style={{textDecoration:'none'}}>
                    <Button variant="outlined">Read More</Button>
                </Link>
            </ListItem>
            <Divider variant="inset" component="li" />

        </>
    );
};

export default University;
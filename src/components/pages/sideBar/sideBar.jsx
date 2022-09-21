import React from 'react'
import { 
    Container,
    Title
} from './sideBarStyles'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ViewCarouselRoundedIcon from '@mui/icons-material/ViewCarouselRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';

export default function Index() {
  return (
    <>
        <Container>
            <h2><AudiotrackOutlinedIcon/>BeeMusic</h2>
            <ul>
                <li><HomeRoundedIcon/>Home</li>
                <li><ShowChartRoundedIcon/>Trends</li> 
                <li><ExploreRoundedIcon/>Feeds</li>
            </ul>
            <div>
                <Title>Discover</Title>
                <ul>
                    <li><GridViewRoundedIcon/>News and Notable</li>
                    <li><CalendarMonthRoundedIcon/>Release Calendar</li>
                    <li><ViewCarouselRoundedIcon/>Events</li>
                </ul>
            </div>
            <div>
                <Title>Your Collection</Title>
                <ul>
                    <li><FavoriteRoundedIcon/>Favorite Songs</li>
                    <li><Groups2RoundedIcon/>Artist</li>
                </ul>
            </div>
        </Container>
    </>
  )
}

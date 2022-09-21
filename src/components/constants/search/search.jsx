import React from 'react'
import {
  SearchInput,
  Container,
  SearchIcon
} from "./searchStyles.js"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Index() {
  return (
    <Container>
      <SearchIcon>
        <SearchOutlinedIcon sx={{fontSize: "30px"}}/>
      </SearchIcon>
      
      <SearchInput type="text" name='search' placeholder='Search for artists, songs and ...'/>
    </Container>
  )
}

import React from 'react'
import Search from "../../constants/search/search"
import {Container} from "./mainPageStyles"

export default function Index() {
  return (
    <>
        <Container>
            <Search/>
            <h3>What's hot</h3>
            <h1>Trending</h1>
            <small>More </small>
            <img src="" alt="music-photo" />
            <h1>My Playlist</h1>
            <small>Show All</small>
            <table>
              <thead>
                <th>#</th>
                <th>TITLE</th>
                <th>ARTIST</th>
                <th>TIME</th>
                <th>ALBUM</th>
              </thead>
              <tr>
                <td>01</td>
                <td>Priority</td>
                <td>Mos Def</td>
                <td>1.25</td>
                <td>The Ecstatic</td>
              </tr>
            </table>
        </Container>
    </>
  )
}

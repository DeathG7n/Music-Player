import React, { useRef, useState } from 'react'
import Search from "../../constants/search/search"
import {
  Container,
  ImageContainer,
  Playlist,
  PlaylistData,
  ModalContainer,
  ModalBody
} from "./mainPageStyles"
import { musicData } from '../../constants/musicData'
import CloseIcon from '@mui/icons-material/Close';

export default function Index() {
  
  const [openModal, setOpenModal] = useState(false)
  function handleOpenModal(src){
    setOpenModal(!openModal)
    localStorage.setItem("src", JSON.stringify(src))
  }
  const src = localStorage.getItem("src")
  musicData.sort(()=> 0.5 - Math.random())
  
  return (
    <>
      {openModal && <MusicModal openModal={handleOpenModal} src={src}/>}
        <Container>
          <Search/>
          <h5>What's hot</h5>
          <div>
            <h1>Trending</h1>
            <small>More</small>
          </div>
          <ImageContainer bimg="">
              <div>
                <h5>Artist</h5>
                <h1>On Top Of The World</h1>
                <div>
                  <div>PLAY</div>
                  <div>FOLLOW</div>
                </div> 
              </div>
          </ImageContainer>
          <div>
            <h1>My Playlist</h1>
            <small>Show All</small>
          </div>
          
          <Playlist>
            <thead>
              <tr>
                <td>#</td>
                <td>TITLE</td>
                <td>ARTIST</td>
                <td>TIME</td>
                <td>ALBUM</td>
              </tr>
            </thead>
            <tbody>
              {musicData?.map((m, id)=>{
              return(
                <PlaylistData key={id} onClick={()=>handleOpenModal(m?.src)}>
                  <td>0{id + 1}</td>
                  <td>{m?.title}</td>
                  <td>{m?.artist}</td>
                  <td>{m?.duration}</td>
                  <td>The Ecstatic</td>
                </PlaylistData>
              )
            })}
            </tbody>
            
            
          </Playlist>
        </Container>
    </>
  )
}


export const MusicModal = ({openModal, src}) =>{
  const musicRef = useRef()
  console.log(musicRef) 
  return(
    <>
      <ModalContainer>
          <ModalBody>
              <span onClick={openModal}><CloseIcon/></span>
              <audio ref={musicRef} controls>
                <source src='https://www.w3schools.com/jsref/horse.ogg'  type="audio/ogg"></source>
              </audio>
          </ModalBody>
      </ModalContainer>
    </>
  )
}

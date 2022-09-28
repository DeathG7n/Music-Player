import React, { useRef, useState } from 'react'
import Search from "../../constants/search/search"
import {
  Container,
  ImageContainer,
  Playlist,
  PlaylistData,
  ModalContainer,
  ModalBody,
  MusicCover
} from "./mainPageStyles"
import { musicData } from '../../constants/musicData'
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';

export default function Index() {
  
  const [openModal, setOpenModal] = useState(false)
  function handleOpenModal(src){
    setOpenModal(!openModal)
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
  const [play, setPlay] = useState(musicRef.current?.played)
  const [replay, setReplay] = useState(false)

  function musicControl(){
    play ? musicRef.current?.pause() : musicRef.current?.play();
    setPlay(!play)
  }

  async function rePlay(){
    setReplay(!replay)
    musicRef.current.loop = replay;
    musicRef.current.load();
    console.log(replay) 
  }

  return(
    <>
      <ModalContainer>
          <ModalBody>
              <h3>Song Title - Artist</h3>
              <MusicCover></MusicCover>
              <span onClick={openModal}><CloseIcon/></span>
              <audio ref={musicRef} controls>
                <source src='https://www.w3schools.com/jsref/horse.ogg'  type="audio/ogg"></source>
              </audio>
              <div onClick={rePlay}>{replay ? <AllInclusiveRoundedIcon sx={{fontSize: "20px", color: "white", cursor: "pointer"}}/> : <LoopRoundedIcon sx={{fontSize: "20px", color: "white", cursor: "pointer"}}/>}</div>
              <div>
                <SkipPreviousRoundedIcon sx={{fontSize: "40px", color: "black"}}/>
                <div onClick={musicControl}>{play ? <PauseCircleFilledRoundedIcon sx={{fontSize: "70px", color: "white"}}/>: <PlayCircleRoundedIcon sx={{fontSize: "70px", color: "white"}}/>}</div>
                <SkipNextRoundedIcon sx={{fontSize: "40px", color: "black"}}/>
              </div>
              <div><ShuffleRoundedIcon sx={{fontSize: "20px", color: "white"}}/></div>
          </ModalBody>
      </ModalContainer>
    </>
  )
}

import React from 'react'
import SideBar from "../sideBar/sideBar"
import MainPage from "../mainPage/mainPage"
import {Container} from "./landingPageStyles"

export default function Index() {
  return (
    <Container>
      <SideBar/>
      <MainPage/>
    </Container>
  )
}

import styled from "styled-components"

export const Container = styled.div`
    width: 78%;
    background-color: #F0F8FF;
    padding: 20px 40px;

    >div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }

    
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 220px;
    border-radius: 10px;
    border: 1px solid;
    margin: 10px 0 30px 0;

    >div{
        width: 100%;
        height: 100%;
        padding: 30px 20px 20px 20px;

        h5{
            margin-bottom: 5px; 
        }
        h1{
            width: 200px;
        }

        div{
            margin: 10px 0 5px 0;
            display: flex;
            width: auto;
            gap: 10px;

            div{
                width: fit-content;
                padding: 5px 15px;
                border: 1px solid;
                border-radius: 20px;
                font-size: 14px;
            } 
        }

        
    }
`
export const Playlist = styled.table`
    width: 100%;
    margin-top: 15px;

    thead{
        border: 1px solid;

        td{
            height: 30px;
            font-size: 12px;
            color: #9e9e9e;
        }
    }
`

export const PlaylistData = styled.tr`
    width: 100%;
    border: 1px solid;
    height: 40px;
    cursor: pointer;
    
    td{
        height: 40px;
        font-size: 14px;
        color: #555;
        margin: 10px 0;
    }
`

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0f131280;
    z-index: 100;
`
export const ModalBody = styled.div`
    width: 35%;
    height: 400px;
    border: 1px solid #fff;
    border-radius: 20px;
    position: relative;
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);

    span{
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 25%;
    background-color: #ffffff;
    color: #555;
    padding: 30px 0px 20px 20px;

    h2{
        display: flex;
        align-items: center;
    }

    ul{
        list-style-type: none;
        margin: 20px 0;

        li{
            font-weight: 600;
            margin: 5px 0;
            height: 50px;
            display: flex;
            align-items: center;
            text-indent: 5px;
            border-radius: 5px;
            padding: 0 8px;
            
            :hover{
                background-color: #010318;
                color: #ffffff;
            }
        }
    }
`
export const LogoText = styled.h2`

`
export const Title = styled.small`
    font-weight: 600;
    color: #9e9e9e;
`
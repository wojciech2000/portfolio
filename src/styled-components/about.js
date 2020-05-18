import styled from 'styled-components'

export const AboutWrapper = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50vw;
    height: 50vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`

export const Image = styled.img`
    height: 55%;
    object-fit: fill;
    border-radius: 50%;
    border: 1px solid white;
`

export const Text = styled.div`
    width: 60%;
    font-size: 0.7rem;
    text-align: center;
    color: white;
    background: rgba(0,0,0, .8);
    padding: 2%;
    border: 1px solid white;
`
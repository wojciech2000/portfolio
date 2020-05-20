import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    width: 50vw;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0, .6);
    border-radius: 10px;
    border: 1px solid white;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 3% 0;
`

export const SkillColumn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
`

export const SklillIcon = styled.div`
    padding: 1.1rem;
    background-color: white;
    border-radius: 50%;
    font-size: 1.5rem;
    width: fit-content;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SkillTitle = styled.span`
    background: white;
    border-radius: 8px;
    padding: 2% 15%;
    font-size: 0.8rem;
    width: 80%;
    text-align: center;
    margin: 5% 0 10% 0;
`

export const SklillNames = styled.ul`
    color: white;
    text-align: center;
    font-size: .7rem;
    line-height: 150%;
    font-family: ${({theme}) => theme.secondFont};
`

export const ContrastColor = styled.li`
    color: ${({theme}) => theme.contrastColor}
`
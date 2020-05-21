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

    @media (max-width: 1024px) and (orientation: portrait)
    {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3vh 0;
        top: 55%;
        width: 60vw;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        width: 80vw
    }

`

export const SkillColumn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        padding: 5% 0;
        width: 30%;
    }

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

    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 2.5rem;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        font-size: 4.5rem;
    }
`

export const SkillTitle = styled.span`
    background: white;
    border-radius: 8px;
    padding: 2% 15%;
    font-size: 0.8rem;
    width: 80%;
    text-align: center;
    margin: 5% 0 10% 0;

    @media (max-width: 1024px) and (orientation: portrait)
    {
        font-size: 1.1rem;
        width: 100%;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        font-size: 1.5rem;
    }

`

export const SklillNames = styled.ul`
    color: white;
    text-align: center;
    font-size: .7rem;
    line-height: 150%;
    font-family: ${({theme}) => theme.secondFont};

    @media (max-width: 1024px) and (orientation: portrait)
    {
        margin-top: 10%;
        width: 300%;
        font-size: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    @media (max-width: 432px) and (orientation: portrait)
    {
        font-size: 1.4rem;
    }

`

export const ContrastColor = styled.li`
    color: ${({theme}) => theme.contrastColor}
`
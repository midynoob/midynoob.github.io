import styled from "styled-components";

export const ContactContainer = styled.div`
    color: #fff;
    background: #010606;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100vh;
    padding: 0 2rem;
`
export const ContactHead = styled.div`

`
export const ContactH2 = styled.h2`
    font-size: 4.2rem;
    margin-bottom: 30px;

    @media screen and (max-width: 700px) {
        font-size: 3.5rem;
    }
`

export const ContactP = styled.p`
    font-style: italic;
    font-size: 18px;
    color: #01bf71;
    
`
export const ContactLinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 650px;
    margin-top: 4rem;
    flex-wrap: wrap;
`
export const ContactLink = styled.a`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    margin: 10px;

    font-size: 1.8rem;
    transition: transform 0.3s ease-out;

    &:hover {
        transform: translateY(8px);
        transition: transform 0.3s ease-out;

    }

    @media screen and (max-width: 700px) {
        font-size: 1.4rem;
    }
`
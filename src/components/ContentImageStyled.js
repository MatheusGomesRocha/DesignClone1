import styled from 'styled-components';

export const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const RowDiv = styled.div`
    display: flex;
    background-color: ${props=>props.background || '#eee'};

`;

export const SideDiv = styled.div`
    width: 50%;
    height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: 1200px) {
        height: 550px;
    }
`;

export const Title = styled.span`
    font-weight: bold;
    font-size: 35px;
    line-height: 1.5;
    color: ${props=>props.color || '#000'};
    margin: 0 70px;
    width: 70%;
    
    @media(min-width: 1200px) {
        width: 70%;
        font-size: 40px;
        line-height: 1.5;
        margin: 0 100px;
    } 
    
    @media(min-width: 1800px) {
        font-size: 45px;
        margin: 0 200px;
    }
`;

export const Content = styled.span`
    line-height: 1.8;
    font-size: 19px;
    color: ${props=>props.color || '#777'};
    width: 70%;
    margin: 20px 70px;

    @media(min-width: 1200px) {
        width: 60%;
        font-size: 20px;
        line-height: 1.5;
        margin: 20px 0 50px 100px;
    } 
    
    @media(min-width: 1800px) {
        font-size: 20px;
        line-height: 1.5;
        margin: 20px 0 50px 200px;
    }
`;

export const SideImg = styled.div`
    width: 50%;
    height: 620px;
    background-image: url(${props=>props.background});
    background-size: cover;
    background-position: center;
    
    @media(min-width: 1200px) {
        height: 550px;
    }
`;
import styled from 'styled-components';

export const MainDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const RowDiv = styled.div`
    display: flex;
`;

export const SideDiv = styled.div`
    width: 50%;
    height: 620px;
    background-color: ${props=>props.background || '#eee'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 80px;
    
    @media(min-width: 1200px) {
        height: 600px;
        padding-left: 300px;
    }
`;

export const Title = styled.span`
    font-weight: bold;
    font-size: 30px;
    line-height: 1.5;
    color: ${props=>props.color || '#000'};
    
    @media(min-width: 1200px) {
        width: 50%;
        font-size: 35px;
    }
`;

export const Content = styled.span`
    line-height: 2;
    margin-top: 20px;
    font-size: 18px;
    color: ${props=>props.color || '#777'};

    @media(min-width: 1200px) {
        width: 50%;
        font-size: 22px;
    }
`;

export const SideImg = styled.img`
    width: 50%;
    height: auto;
    background-size: cover;
    
    @media(min-width: 1200px) {
        height: 600px;
    }
`;
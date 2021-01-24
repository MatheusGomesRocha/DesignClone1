import styled from 'styled-components';

export const MainDiv = styled.div`
    padding: 110px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-item: center;
    
    @media(min-width: 1400px) {
        padding: 100px 0;
    }
`;

export const ItemDiv = styled.div`
    display: flex;
    flex-direction: row;
    
    @media(min-width: 1400px) {
        width: 20%;
    }
`;

export const IconDiv = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=>props.background};
    transition: 0.5s;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    margin-left: 25px;
    
    @media(min-width: 1400px) {
        margin-left: 35px;
    }
`;

export const Title = styled.span`
    font-weight: bold;
    font-size: 18px;
    
    @media(min-width: 1400px) {
        font-size: 20px;
    }
`;

export const Content = styled.span`
    color: #777;
    margin-top: 10px;
    line-height: 1.8;
    font-size: 15px;
    
    @media(min-width: 1400px) {
        font-size: 16px;
    }
`;
import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    background-color: #222;
    
    @media(min-width: 300px) and (max-width: 799px) {
        padding: 20px 10px;
    }
`;

export const TopDiv = styled.div`
    display: flex;
    justify-content: space-around;
    
    @media(min-width: 300px) and (max-width: 799px) {
        flex-direction: column;
    }
`;
export const LineDiv = styled.div`
    width: 100%;
    height: 1px;
    background-color: #555;
    margin: 50px 0;
    
    @media(min-width: 300px) and (max-width: 799px) {
        width: 90%;
        background-color: #555;
        margin: 30px 0;
    }
`;

export const BlockDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;

    @media(min-width: 300px) and (max-width: 799px) {
        margin-top: 50px;
    }
`;

export const Title = styled.span`
    color: #fff;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const Text = styled.span`
    color: ${props=>props.color || '#999'};
    font-size: 18px;
    line-height: 1.8;
`;

export const LinkDiv = styled.div`
    display: flex;
`;
export const LinkSide = styled.div`
`;
export const LinkItem = styled.div`
    display: flex;
    align-items: center;
    min-width: 150px;
    margin-top: 10px;
`;
export const Link = styled.a`
    color: #999;
    font-size: 18px;
    text-decoration: none;
    transition: 0.3s;
    margin-left: 5px;
    
    :hover {
        margin-left: 10px;
        color: #fff;
    }
`;

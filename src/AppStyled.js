import styled from 'styled-components';
import Pic1 from './img/pic2.jpg';

export const Container = styled.div`
    font-family: arial;
`;

export const DefaultText = styled.span`
    color: #fff;
    width: 50%;
    font-weight: ${props=>props.weight || 'normal'};
    font-size: ${props=>props.font || '14px'};
    margin-bottom: 25px;
`;

export const ChangeColorBtn = styled.div`
    height: 40px;
    width: 40px;
    background-color: #282828;
    position: fixed;
    top: 100px;
    left: 0px;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    
    :hover {
        cursor: pointer;
    }
    
    animation: colorBtn 2s;
    
    @keyframes colorBtn {
        100% {
            width: ${props=>props.width};
        } 
    }
`;

export const Header = styled.div`
   width: 100%;
   height: 460px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   background: url(${Pic1});
   background-size: cover;
`;

export const HeaderTop = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #999;
    background-color: rgba(0, 0, 0, 0.4);
`;
export const HeaderTopLeft = styled.div``;
export const HeaderTopRight = styled.div`
    display: flex;
    padding-top: 60px;
`;

export const HeaderLink = styled.a`
    color: #fff;
    height: 80px;
    font-weight: bold;
    font-size: ${props => props.font || '14px'};
    text-decoration: none;
    margin-right: 25px;
    text-align: center;
    text-transform: uppercase;
    
    :after {
        display: block;
        content: '';
        border-bottom: solid 2px #019fb6;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }
    
    :hover:after {
        transform: scaleX(1);

    }
`;

export const HeaderBottom = styled.div`
    height: 380px;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 55px;
`;


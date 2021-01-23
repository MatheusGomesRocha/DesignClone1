import styled from 'styled-components';
import Pic1 from './img/pic2.jpg';

export const Container = styled.div`
    font-family: arial;
`;

export const DefaultText = styled.span`
    color: #fff;
    width: 100%;
    font-weight: ${props=>props.weight || 'normal'};
    font-size: ${props=>props.font || '14px'};
    margin-bottom: 20px;
`;


export const ChangeColorBtn = styled.div`
    height: 46px;
    width: 40px;
    background-color: #282828;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    color: #fff;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    transition: left 0.4s;

    :hover {
        cursor: pointer;
    }
`;
export const ChangeColorDiv = styled.div`
    position: fixed;
    top: 81px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: left 0.4s;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;
export const ChangeColorDivTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 231px;
    height: 46px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: #282828;
    font-size: 12px;
    color: #fff;
    align-items: center;
    padding-left: 20px;
    text-transform: uppercase;
`;
export const ChangeColorDivBottom = styled.div`
    width: 205px;
    height: 85px;
    background-color: #3d3d3d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const ColorDivTop = styled.div`
    display: flex;
`;
export const ColorDivBottom = styled.div`
    display: flex;
`;
export const ColorDiv = styled.div`
    width: 17px;
    height: 17px;
    border: 1px solid;
    border-radius: 3px;
    background-color: ${props=>props.bgColor};
    margin: 1px;
    
    :hover {
        cursor: pointer;
    }
`;




export const Header = styled.div`
   width: 100%;
   height: 455px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   background: url(${props=>props.background});
   background-size: cover;
   transition: 1s;
   
   @media(min-width: 1200px) {
        height: 780px;
    }
`;
export const CarouselArrow = styled.div`
    width: 55px;
    height: 80px;
    background-color: #fff;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    opacity: ${props=>props.opacity};
    
    :hover {
        cursor: pointer;
    }
`;
export const HeaderTop = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #999;
    background-color: rgba(0, 0, 0, 0.5);
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
    height: 375px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 57px;
    
    @media(min-width: 1200px) {
        height: 700px;
    }
`;
export const HeaderBottomChild = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 380px;
`;


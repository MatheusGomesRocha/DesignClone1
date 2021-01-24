import styled from 'styled-components';
import Pic1 from './img/pic2.jpg';

export const Container = styled.div`
    font-family: 'Ubuntu', sans-serif;
`;

export const DefaultText = styled.span`
    color: ${props=>props.color || '#fff'};
    width: 100%;
    font-weight: ${props => props.weight || 'normal'};
    font-size: ${props => props.font || '14px'};
    margin-bottom: 20px;
    text-align: ${props=>props.align || 'left'};

    @media(min-width: 1200px) {
        font-size: ${props=>props.fontBig || '25px'};
    }
`;


export const ChangeColorBtn = styled.div`
    height: 48px;
    width: 44px;
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
    top: 79px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: left 0.4s;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 999;
`;
export const ChangeColorDivTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 231px;
    height: 48px;
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
    background-color: ${props => props.bgColor};
    margin: 1px;
    
    :hover {
        cursor: pointer;
    }
`;


export const Header = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   position: relative;
  
`;
export const HeaderImg = styled.div`
    width: 100%;
    height: 459px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 2s ease;
    background-size: cover;
    background-position: center;
    background-image: url(${props=>props.background});
    object-fit: cover;
    
    
    @media(min-width: 1200px) {
        height: 780px;
    }
   
`;

// Contém Animação que preenche o background-color da esquerda para a direita ao realizar um hover
export const CarouselArrowLeft = styled.div`        
    width: 55px;
    height: 80px;
    background-color: #fff;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    opacity: ${props => props.opacity};
    background: linear-gradient( to left, #fff 50%, ${props=>props.bgHover} 50% );
    background-size: 200% 100%;
    background-position: right bottom;
    
    :hover {
        cursor: pointer;
        background-position: left bottom;
        transition: 0.2s;
     }
`;

// Contém Animação que preenche o background-color da direita para a esquerda ao realizar um hover
export const CarouselArrowRight = styled.div`
    width: 55px;
    height: 80px;
    background-color: #fff;
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    opacity: ${props => props.opacity};
    background: linear-gradient( to right, #fff 50%, ${props=>props.bgHover} 50% );
    background-size: 200% 100%;
    background-position: left bottom;
    
    :hover {
        cursor: pointer;
        background-position: right bottom;
        transition: 0.2s;
     }
`;
export const HeaderTop = styled.div`
    height: 77px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #777;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
`;
export const HeaderTopLeft = styled.div`
    display: flex;
    padding: 35px 0 0 80px;
    
    @media(min-width: 1200px) {
        padding-left: 560px;
    }
`;
export const HeaderTopRight = styled.div`
    display: flex;
    padding: 60px 80px 0 0;
    
    @media(min-width: 1200px) {
        padding-right: 560px;
    }
`;

export const HeaderLinkDiv = styled.div`
    display: flex;
    height: 75px;
   
   :hover {
        cursor: pointer;
   }
`;
// Contém animação que inicia uma border-bottom do centro para esquerda e direita
export const HeaderLink = styled.a`
    color: #fff;
    font-weight: bold;
    font-size: ${props => props.font || '14px'};
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    margin-right: 25px;
    
    :after {
        display: block;
        content: '';
        border-bottom: solid 3px;
        border-bottom-color: ${props=>props.borderColor};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        padding-bottom: 30px;
    }
    
    :hover:after {
        transform: scaleX(1);
    }
`;

export const HeaderBottom = styled.div`
    height: 381px;
    background-color: rgba(0, 0, 0, 0.3);
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: ${props=>props.content};
    position: relative;
    
    @media(min-width: 1200px) {
        height: 702px;
        padding-left: ${props=>props.pLeft};
    }
`;
export const HeaderBottomChild = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props=>props.align || 'flex-start'};
    height: 380px;
`;

// Contém animação de fade de baixo para cima
export const HeaderBottom1 = styled.div`
    display: flex;
    flex-direction: column;
    animation: fadein 2s;
    
    @keyframes fadein {
        from {opacity: 0; transform: translateY(100%);}
        to {opacity: 1;}
    }
    
    @media(min-width: 1200px) {
        width: 70%;
    }
`;

// Contém animação de fade de baixo para cima
export const HeaderBottom2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadein 2s;

    
    @keyframes fadein {
        from {opacity: 0; transform: translateY(100%);}
        to {opacity: 1;}
    }

    @media(min-width: 1200px) {
        width: 70%;
    }
`;

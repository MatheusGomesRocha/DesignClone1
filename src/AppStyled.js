import styled from 'styled-components';

export const Container = styled.div`
    font-family: Candara;
    scroll-behavior: smooth;
`;

export const ToTopBtn = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props=>props.background};
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: ${props=>props.display};
    align-items: center;
    justify-content: center;
    animation: fade 0.8s;
  
    @keyframes fade {
      from {opacity: 0;}
      to {opacity: 1}
    }
    
    :hover {
        cursor: pointer;
        transform: rotate(360deg);
    }
`;

export const DefaultText = styled.span`
    color: ${props=>props.color || '#fff'};
    width: 100%;
    font-weight: ${props => props.weight || 'normal'};
    font-size: ${props => props.font || '14px'};
    margin-bottom: 20px;
    text-align: ${props=>props.align || 'left'};
    line-height: 1.8;

    @media(min-width: 300px) and (max-width: 799px) {
        margin-bottom: 10px;
    }
    
    @media(min-width: 1200px) {
        font-size: ${props=>props.fontBig || '25px'};
    }
`;

export const MenuDivMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 90%;
    border-radius: 5px;
    background-color: rgba( 255, 255, 255, 0.3);
    position: absolute;
    top: 50px;

    @media (min-width: 800px) {
        display: none;
    }
`;
export const MenuBtnMobile = styled.div`
    z-index: 999;
    display: flex;
    flex: 1;
    align-items: center;
    height: 60px;
    padding-left: 20px;
`;
export const SearchBtnMobile = styled.div`
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    background-color: rgba( 255, 255, 255, 0.1);
`;
export const MenuTextMobile = styled.span`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase; 
    margin-left: 10px;
    font-size: 18px;
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
    
    @media(min-width: 300px) and (max-width: 799px) {
        display: none;
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
    
    @media(min-width: 300px) and (max-width: 799px) {
        display: none;
    }
`;
export const ChangeColorDivTop = styled.div`
    display: flex;
    flex-direction: row;
    width: 231px;
    height: 48px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: #282828;
    font-size: 16px;
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
   
   @media(min-width: 300px) and (max-width: 799px) {
        align-items: center;
   }
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
    
    @media(min-width: 300px) and (max-width: 799px) {
    }
    
    @media(min-width: 1200px) {
        height: 780px;
    }
`;


export const HeaderTop = styled.div`
    height: ${props=>props.height};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #777;
    position: ${props=>props.position};
    top: 0;
    background-color: ${props=>props.background};
    z-index: 999;
    transition: 0.8s;
    
    @media(min-width: 300px) and (max-width: 799px) {
        display: none;
    }
`;
export const TopDivHidden = styled.div`
    height: 77px;
    position: relative;
    display: ${props=>props.display};
    
    @media(min-width: 300px) and (max-width: 799px) {
        display: none;
    }
`;
export const HeaderTopLeft = styled.div`
    display: flex;
    padding-left: 70px;
    
    @media(min-width: 1200px) {
        padding-left: 200px;
    }
    
    @media(min-width: 1600px) {
        padding-left: 300px;
    }
`;
export const HeaderTopRight = styled.div`
    display: flex;
    padding: 0 80px 0 0;
    
    @media(min-width: 1200px) {
        padding-right: 200px;
    }
    
    @media(min-width: 2000px) {
        padding-right: 400px;
    }
`;

export const HeaderLinkDiv = styled.div`
    display: flex;
    align-items: center;
    
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
    transition: 0.2s;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: center;
        
    :hover {
        color: ${props=>props.color};
    }
    
    @media(min-width: 1600px) {
        font-size: 20px;
        margin-right: 30px;
    }
`;
export const HoverHeaderLinkHidden = styled.div`
    padding-bottom: 15px;
    padding-top: 15px;
    background-color: #282828;
    position: absolute;
    top: ${props=>props.top};
    left: ${props=>props.left || null};
    display: ${props=>props.display};
    flex-direction: ${props=>props.flex || 'column'};
    min-width: 200px;
    animation: fadein 0.5s;
    
    @keyframes fadein {
        from {opacity: 0;}
        to {opacity: 1;}
    }
`;
export const HoverHeaderText = styled.a`
    font-size: 18px;
    position: relative;
    padding: 13px 30px 13px 20px;
    color: #999;
    transition: 0.5s;
    
    :hover {
        color: #fff;
        background-color: ${props=>props.background};
    }
`;
export const HoverHeaderColumn = styled.a`
    display: flex;
    flex-direction: column;
    min-width: 200px;
`;
export const HoverHeaderTitle = styled.span`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 15px 10px 15px 20px;
`;
export const HoverLineDiv = styled.div`
    width: 1px;
    background-color: #777;
    height: auto;
`;


export const Badge = styled.div`
    position: relative;
    top: -10px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.background};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;

export const HeaderBottom = styled.div`
    height: 381px;
    background-color: rgba(0, 0, 0, 0.3);
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: ${props=>props.content};
    position: relative;
    
    @media(min-width: 300px) and (max-width: 799px) {
        height: 459px;
        padding-left: ${props=>props.pLeftMobile};
    }
    
    @media(min-width: 1200px) {
        height: 702px;
        padding-left: ${props=>props.pLeftNote};
    }
    
    @media(min-width: 1800px) {
        padding-left: ${props=>props.pLeft};
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
export const HeaderBottomChild = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props=>props.align || 'flex-start'};
    height: 380px;
    
    @media(min-width: 300px) and (max-width: 799px) {
        width: 60%;
        padding-top: 100px;
    }
    
    @media(min-width: 1200px) and (max-width: 1800px) {
        width: 70%;
    }
`;

// Contém animação de fade de baixo para cima
export const HeaderBottom1 = styled.div`
    display: flex;
    flex-direction: column;
    animation: fadein 2s;
    
    @keyframes fadein {
        from {opacity: 0; transform: translateY(20%);}
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
        from {opacity: 0; transform: translateY(20%);}
        to {opacity: 1;}
    }

    @media(min-width: 1200px) {
        width: 70%;
    }
`;

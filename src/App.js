import {useEffect, useState} from 'react';
import Cog from './img/settings.png';
import {FaCog} from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';
import Pic1 from './img/pic1.jpg';
import Pic2 from './img/pic2.jpg';
import AngleRight from './img/angle_right.png';
import AngleLeft from './img/angle_left.png';

import {
    Container,

    DefaultText,

    ChangeColorDiv,
    ChangeColorDivTop,
    ChangeColorBtn,
    ChangeColorDivBottom,
    ColorDiv,
    ColorDivTop,
    ColorDivBottom,

    Header,
    CarouselArrowLeft,
    CarouselArrowRight,
    HeaderTop,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderLink,

    HeaderBottom,
    HeaderBottomChild,
    HeaderBottom1,
    HeaderBottom2,
    HeaderImg
} from './AppStyled';

import {Button} from '@material-ui/core';

import {
    withStyles,
} from '@material-ui/core/styles';

export default () => {
    const [colorBtn, setColorBtn] = useState(false);        // 1 - TRUE ou FALSE para saber se vai mostrar as opções para mudar a cor padrão do site
    const [leftDiv, setLeftDiv] = useState('-250px');       // 2 - Position da Div na esquerda fora de tela, onde fica as opções para mudar de cor
    const [leftBtn, setLeftBtn] = useState('0');            // 3 - Position do Button que aparece na tela da Div na esquerda

    const [defaultColor, setDefaultColor] = useState('#D64391');    // 4 - Cor padrão ao entrar no site

    const [headerImg, setHeaderImg] = useState(true);           // 5 - Imagem do header (como só tem 2 imagens, usei TRUE ou FALSE para facilitar)

    const [arrowVisible, setArrowVisible] = useState('0');      // 6 - Opacidade dos button para mudar a imagem do header

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: defaultColor,
            color: '#fff',
            height: 50,
            width: 130,
            borderRadius: 30,
            marginTop: 10,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: 12,
            textTransform: 'uppercase',
            transition: '0.4s',

            '&:hover': {
                backgroundColor: '#fff',
                color: '#000'
            }
        },
    }))(Button);            // 7 - Default Button do site

    const setBigColorBtn = () => {          /* 8 - Efeito de Drawer, ao clicar no button "item 3", se ainda não estiver clicado
                                             vai mudar a position da Div "item 2", assim mostrando ela que anteriormente estava escondida,
                                             se já estiver aberto, vai mudar novamente a position da Div e assim escondo-a
                                             */

        if (colorBtn) {                     // Aqui ele esconde a div
            setColorBtn(false);
            setLeftDiv('-250px');
            setLeftBtn('0');
        } else {                            // Aqui ele mostra a div
            setColorBtn(true);
            setLeftDiv('0');
            setLeftBtn('211px');
        }
    };

    useEffect(() => {               // Um hook do React para trocar a imagem do header a cada 8 segundos
        setTimeout(() => {
            setHeaderImg(!headerImg);
        }, [8000])
    }, [headerImg]);

    return (
        <Container>
            <ChangeColorDiv style={{left: leftDiv}}>
                <ChangeColorDivTop>
                    Color Switcher
                    <ChangeColorBtn style={{left: leftBtn}} id={"div"} onClick={setBigColorBtn}>
                        <FaCog size={"20px"} fill={"#fff"}/>
                    </ChangeColorBtn>
                </ChangeColorDivTop>

                <ChangeColorDivBottom>
                    <ColorDivTop>
                        <ColorDiv bgColor={"#495D7F"} onClick={() => setDefaultColor('#495D7F')}></ColorDiv>
                        <ColorDiv bgColor={"#D64391"} onClick={() => setDefaultColor('#D64391')}></ColorDiv>
                        <ColorDiv bgColor={"#FFB400"} onClick={() => setDefaultColor('#FFB400')}></ColorDiv>
                        <ColorDiv bgColor={"#0767C9"} onClick={() => setDefaultColor('#0767C9')}></ColorDiv>
                        <ColorDiv bgColor={"#FCAB55"} onClick={() => setDefaultColor('#FCAB55')}></ColorDiv>
                        <ColorDiv bgColor={"#917AE9"} onClick={() => setDefaultColor('#917AE9')}></ColorDiv>
                        <ColorDiv bgColor={"#74AEA1"} onClick={() => setDefaultColor('#74AEA1')}></ColorDiv>
                        <ColorDiv bgColor={"#BFA980"} onClick={() => setDefaultColor('#BFA980')}></ColorDiv>
                    </ColorDivTop>

                    <ColorDivBottom>
                        <ColorDiv bgColor={"#784E3D"} onClick={() => setDefaultColor('#784E3D')}></ColorDiv>
                        <ColorDiv bgColor={"#555555"} onClick={() => setDefaultColor('#555555')}></ColorDiv>
                        <ColorDiv bgColor={"#911938"} onClick={() => setDefaultColor('#911938')}></ColorDiv>
                        <ColorDiv bgColor={"#DD3737"} onClick={() => setDefaultColor('#DD3737')}></ColorDiv>
                        <ColorDiv bgColor={"#B3C211"} onClick={() => setDefaultColor('#B3C211')}></ColorDiv>
                        <ColorDiv bgColor={"#37B6BD"} onClick={() => setDefaultColor('#37B6BD')}></ColorDiv>
                        <ColorDiv bgColor={"#44B272"} onClick={() => setDefaultColor('#44B272')}></ColorDiv>
                        <ColorDiv bgColor={"#FA5B0F"} onClick={() => setDefaultColor('#FA5B0F')}></ColorDiv>
                    </ColorDivBottom>

                </ChangeColorDivBottom>

            </ChangeColorDiv>

            <Header onMouseOver={() => setArrowVisible('1')} onMouseOut={() => setArrowVisible('0')}
                    >
                <HeaderImg background={headerImg ? Pic1 : Pic2}></HeaderImg>
                <CarouselArrowLeft bgHover={defaultColor} opacity={arrowVisible}
                                   style={{borderTopRightRadius: 3, borderBottomRightRadius: 3}}
                                   onClick={() => setHeaderImg(!headerImg)}>
                    <img src={AngleLeft} width={20} height={20}/>
                </CarouselArrowLeft>
                <CarouselArrowRight bgHover={defaultColor} opacity={arrowVisible}
                                    style={{right: 0, borderTopLeftRadius: 3, borderBottomLeftRadius: 3}}
                                    onClick={() => setHeaderImg(!headerImg)}>
                    <img src={AngleRight} width={20} height={20}/>
                </CarouselArrowRight>
                <HeaderTop>
                    <HeaderTopLeft>
                        <HeaderLink href={"#"} font={"25px"}>sphene</HeaderLink>
                    </HeaderTopLeft>
                    <HeaderTopRight>
                        <HeaderLink font={"13px"} href={"#"}>home</HeaderLink>
                        <HeaderLink font={"13px"} href={"#"}>PORTFOLIO</HeaderLink>
                        <HeaderLink font={"13px"} href={"#"}>Pages</HeaderLink>
                        <HeaderLink font={"13px"} href={"#"}>elements</HeaderLink>
                        <HeaderLink font={"13px"} href={"#"}>shop</HeaderLink>
                    </HeaderTopRight>
                </HeaderTop>

                <HeaderBottom pLeft={headerImg ? '600px' : '0'} content={headerImg ? 'flex-start' : 'center'}>
                    <HeaderBottomChild align={headerImg ? 'flex-start' : 'center'}>
                        {headerImg ?
                            <HeaderBottom1>
                                <DefaultText weight={"700"} font={"31px"} fontBig={"52px"}>
                                    Strategy Planning
                                </DefaultText>
                                <DefaultText color={"#ccc"} font={"17px"} fontBig={"23px"}>
                                    Interactively procrastinate high-payoff content without backward-compatible data.
                                    Quickly cultivate optimal processes and tactical architectures
                                </DefaultText>
                                <DefaultBtn>Read More</DefaultBtn>
                            </HeaderBottom1>
                            :
                            <HeaderBottom2>
                                <DefaultText align={"center"} weight={"700"} font={"31px"} fontBig={"52px"}>
                                    Business Analysis
                                </DefaultText>
                                <DefaultText align={"center"} color={"#ccc"} font={"17px"} fontBig={"23px"}>
                                    Proactively envisioned multimedia based on expertise cross-media growth strategies.
                                    Pontificate installed based portals after maintainable products.
                                </DefaultText>
                                <DefaultBtn>Read More </DefaultBtn>
                            </HeaderBottom2>
                        }

                    </HeaderBottomChild>

                </HeaderBottom>
            </Header>
        </Container>
    );
}
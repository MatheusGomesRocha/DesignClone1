import {useState} from 'react';
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
    CarouselArrow,
    HeaderTop,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderLink,

    HeaderBottom,
    HeaderBottomChild,
} from './AppStyled';

import {Button} from '@material-ui/core';

import {
    withStyles,
} from '@material-ui/core/styles';

export default () => {
    const [colorBtn, setColorBtn] = useState(false);
    const [leftDiv, setLeftDiv] = useState('-250px');
    const [leftBtn, setLeftBtn] = useState('0');

    const [defaultColor, setDefaultColor] = useState('#D64391');

    const [headerImg, setHeaderImg] = useState(true);

    const [arrowVisible, setArrowVisible] = useState('0');

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: defaultColor,
            color: '#fff',
            height: 40,
            width: 120,
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
    }))(Button);

    const setBigColorBtn = () => {
        if (colorBtn) {
            setColorBtn(false);
            setLeftDiv('-250px');
            setLeftBtn('0');
        } else {
            setColorBtn(true);
            setLeftDiv('0');
            setLeftBtn('211px');
        }
    };

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

            <Header onMouseOver={() => setArrowVisible('1')} onMouseOut={() => setArrowVisible('0')} background={headerImg ? Pic1 : Pic2}>
                <CarouselArrow opacity={arrowVisible} style={{borderTopRightRadius: 3, borderBottomRightRadius: 3}}
                               onClick={() => setHeaderImg(!headerImg)}>
                    <img src={AngleLeft} width={20} height={20}/>
                </CarouselArrow>
                <CarouselArrow opacity={arrowVisible} style={{right: 0, borderTopLeftRadius: 3, borderBottomLeftRadius: 3}}
                               onClick={() => setHeaderImg(!headerImg)}>
                    <img src={AngleRight} width={20} height={20}/>
                </CarouselArrow>
                <HeaderTop>
                    <HeaderTopLeft>
                        <HeaderLink>LOREM</HeaderLink>
                    </HeaderTopLeft>
                    <HeaderTopRight>
                        <HeaderLink href={"#"}>home</HeaderLink>
                        <HeaderLink href={"#"}>PORTFOLIO</HeaderLink>
                        <HeaderLink href={"#"}>Pages</HeaderLink>
                        <HeaderLink href={"#"}>elements</HeaderLink>
                        <HeaderLink href={"#"}>shop</HeaderLink>
                    </HeaderTopRight>
                </HeaderTop>

                <HeaderBottom>
                    <HeaderBottomChild>
                        <DefaultText weight={"bold"} font={"35px"}>Strategy Planning</DefaultText>
                        <DefaultText font={"18px"}>
                            Interactively procrastinate high-payoff content without backward-compatible data.
                            Quickly cultivate optimal processes and tactical architectures
                        </DefaultText>
                        <DefaultBtn>Read More</DefaultBtn>
                    </HeaderBottomChild>

                </HeaderBottom>
            </Header>
        </Container>
    );
}
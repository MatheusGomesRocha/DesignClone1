import React, {useEffect, useState} from 'react';
import {FaCog} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';
import {BiCart} from 'react-icons/bi';
import Pic1 from './img/pic1.jpg';
import Pic2 from './img/pic2.jpg';
import WhatWeDoComponent from "./components/WhatWeDoComponent";
import ContentImageComponent from "./components/ContentImageComponent";
import WhoWeWorkComponent from "./components/WhoWeWorkComponent";
import FooterComponent from "./components/FooterComponent";

import {
    withStyles,
    makeStyles,
    useTheme
} from '@material-ui/core/styles';

import {useMediaQuery} from "react-responsive";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
    Container,

    ToTopBtn,

    DefaultText,

    MenuDivMobile,
    MenuBtnMobile,
    MenuTextMobile,
    SearchBtnMobile,

    ChangeColorDiv,
    ChangeColorDivTop,
    ChangeColorBtn,
    ChangeColorDivBottom,
    ColorDiv,
    ColorDivTop,
    ColorDivBottom,

    Header,
    HeaderTop,
    TopDivHidden,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderLinkDiv,
    HeaderLink,
    HoverHeaderLinkHidden,
    HoverHeaderText,
    HoverHeaderColumn,
    Badge,

    HeaderBottom,
    CarouselArrowLeft,
    CarouselArrowRight,
    HeaderBottomChild,
    HeaderBottom1,
    HeaderBottom2,
    HeaderImg, HoverLineDiv, HoverHeaderTitle,
} from './AppStyled';

import {Button} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#333',
        color: '#fff',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#333',
        color: '#fff',
    },
    drawerHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        height: 55
    },
    drawerTitle: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#282828',
    },
    drawerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    drawerLogoText: {
        color: '#fff',
        fontSize: 22,
        marginLeft: 20,
        fontWeight: 'bold'
    },
}));

export default () => {
    const [colorBtn, setColorBtn] = useState(false);        // 1 - TRUE ou FALSE para saber se vai mostrar as opções para mudar a cor padrão do site
    const [leftDiv, setLeftDiv] = useState('-250px');       // 2 - Position da Div na esquerda fora de tela, onde fica as opções para mudar de cor
    const [leftBtn, setLeftBtn] = useState('0');            // 3 - Position do Button que aparece na tela da Div na esquerda

    const [defaultColor, setDefaultColor] = useState('#D64391');    // 4 - Cor padrão ao entrar no site

    const [headerImg, setHeaderImg] = useState(true);           // 5 - Imagem do header (como só tem 2 imagens, usei TRUE ou FALSE para facilitar)

    const [arrowVisible, setArrowVisible] = useState('0');      // 6 - Opacidade dos button para mudar a imagem do header

    const [overSearch, setOverSearch] = useState(false);        // 7 - Hover do IconSearch para mudar de cor se for tru
    const [overCart, setOverCart] = useState(false);            // 8 - Hover do IconCart para mudar de cor se for tru
    const [overLeft, setOverLeft] = useState(false);            // 9 - Hover da ArrowLeft para mudar de cor se for true
    const [overRight, setOverRight] = useState(false);          // 10 - Hover do ArrowRight para mudar de cor se for tru

    const [headerShow, setHeaderShow] = useState(false);        // 11 - Animação de mostrar o header fixado ao scrollar a página

    const [toTopBtn, setToTopBtn] = useState(false);            // 12 - Animação de mostrar o button que retorna a página para o topo

    const [open, setOpen] = useState(false);                    // 13 - Abrir ou fechar drawer menu

    const [linkHover1, setLinkHover1] = useState(false);
    const [linkHover2, setLinkHover2] = useState(false);
    const [linkHover3, setLinkHover3] = useState(false);
    const [linkHover4, setLinkHover4] = useState(false);
    const [linkHover5, setLinkHover5] = useState(false);
    const [linkHover6, setLinkHover6] = useState(false);

    const classes = useStyles();                                         // 14 - Usando classes do Material-ui
    const theme = useTheme();                                            // 15 - Usando themes do Material-ui

    const handleDrawerOpen = () => {                                     // 16 - Função de abrir Menu
        setOpen(true);
    };

    const handleDrawerClose = () => {                                    // 17 - Função de fechar o menu
        setOpen(false);
    };

    const isMobile = useMediaQuery({                                     // 18 - Da uma largura para mobile devices
        query: '(max-width: 799px)'
    });

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: defaultColor,
            color: '#fff',
            height: isMobile ? 35 : 45,
            width: isMobile ? 100 : 130,
            borderRadius: 30,
            marginTop: 10,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: isMobile ? 10 : 12,
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

    const handleScroll = () => {        // Verifica se o scroll é maior que 80 e mostra o Header fixado
        if (document.documentElement.scrollTop > 80) {
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        }
    }

    const showScrollToTop = () => {         // Verifica se o scroll é maior que 450 e mostra o button de voltar para o topo
        if (document.documentElement.scrollTop > 450) {
            setToTopBtn(true);
        } else {
            setToTopBtn(false);
        }
    }

    const scrollToTop = () => {         // Função que volta a página para o topo
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {       // Ao carregar a página já executa as 2 funções para pegar o valor do scroll
        window.onscroll = () => {
            handleScroll();
            showScrollToTop();
        };
    }, [])


    return (
        <Container>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <span className={classes.drawerLogoText}>Sphene</span>
                    <IconButton onClick={handleDrawerClose}>
                        <AiOutlineClose fill={"#fff"} size={20}/>
                    </IconButton>
                </div>

                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Home</span>
                </div>

                <List>
                    {['Main Demo', 'Agency Demo', 'Classic Demo', 'Corporate Demo', 'Resume / CV Demo', 'Shop Demo', 'Photography Demo', 'Magazine / Blog Demo'].map((text, index) => (
                        <ListItem style={{marginTop: 3, paddingLeft: 30}} button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>

                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Portfolio</span>
                </div>

                <List>
                    {['Portfolio Style 1', 'AJAX Portfolio', 'Creative Style 1', 'Creative Style 2', 'Classic - Content Right', 'Classic - Content Left', 'Classic - Content Bottom'].map((text, index) => (
                        <ListItem style={{marginTop: 3, paddingLeft: 30}} button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <ToTopBtn opacity={toTopBtn ? '1' : '0'} onClick={scrollToTop} display={toTopBtn ? 'flex' : 'none'}
                      background={defaultColor}>
                <IoIosArrowUp fill={"#fff"} size={25}/>
            </ToTopBtn>

            <Header onMouseOver={() => setArrowVisible('1')} onMouseOut={() => setArrowVisible('0')}>
                <HeaderImg background={headerImg ? Pic1 : Pic2}></HeaderImg>
                <CarouselArrowLeft onMouseOver={() => setOverLeft(true)} onMouseOut={() => setOverLeft(false)}
                                   bgHover={defaultColor} opacity={arrowVisible}
                                   style={{
                                       borderTopRightRadius: 3,
                                       borderBottomRightRadius: 3,
                                       display: isMobile ? 'none' : 'flex'
                                   }}
                                   onClick={() => setHeaderImg(!headerImg)}>
                    <IoIosArrowBack fill={overLeft ? '#fff' : '#000'} size={30}/>
                </CarouselArrowLeft>
                <CarouselArrowRight onMouseOver={() => setOverRight(true)} onMouseOut={() => setOverRight(false)}
                                    bgHover={defaultColor} opacity={arrowVisible}
                                    style={{
                                        right: 0,
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3,
                                        display: isMobile ? 'none' : 'flex'
                                    }}
                                    onClick={() => setHeaderImg(!headerImg)}>
                    <IoIosArrowForward fill={overRight ? '#fff' : '#000'} size={30}/>
                </CarouselArrowRight>


                <MenuDivMobile>
                    <MenuBtnMobile onClick={handleDrawerOpen}>
                        <AiOutlineMenu fill={"#fff"} size={20}/>
                        <MenuTextMobile>Menu</MenuTextMobile>
                    </MenuBtnMobile>

                    <SearchBtnMobile>
                        <AiOutlineSearch fill={"#fff"} size={30}/>
                    </SearchBtnMobile>
                </MenuDivMobile>


                <HeaderTop height={headerShow ? '66px' : '77px'}
                           background={headerShow ? '#282828' : 'rgba(0, 0, 0, 0.3)'}
                           position={headerShow ? 'fixed' : 'relative'}>

                    <HeaderTopLeft>
                        <HeaderLink borderColor={"transparent"} href={"#"} font={"25px"}>sphene</HeaderLink>
                    </HeaderTopLeft>

                    <HeaderTopRight>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover1(true)} onMouseOut={() => setLinkHover1(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>home</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} display={linkHover1 ? 'flex' : 'none'}>
                                <HoverHeaderText background={defaultColor}>Main Demo</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Agency Demo</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Classic Demo</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Corporate Demo</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Resume / CV Demo</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Shop Demo</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Photography Demo</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Magazine / Blog Demo</HoverHeaderText>
                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover2(true)} onMouseOut={() => setLinkHover2(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>PORTFOLIO</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} left={"550px"}  display={linkHover2 ? 'flex' : 'none'} flex={"row"}>
                                <HoverHeaderColumn>
                                    <HoverHeaderTitle>Full-width</HoverHeaderTitle>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 1</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 2</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 3</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 4</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Photo Gallery</HoverHeaderText>
                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>
                                    <HoverHeaderTitle>Contained</HoverHeaderTitle>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 1</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 2</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 3</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Portfolio Style 4</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>AJAX Portfolio</HoverHeaderText>
                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>
                                    <HoverHeaderTitle>Single Project</HoverHeaderTitle>
                                    <HoverHeaderText background={defaultColor}>Creative Style 1</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Creative Style 2</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Classic - Content Right</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Classic - Content Left</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Classic - Content Bottom</HoverHeaderText>
                                </HoverHeaderColumn>


                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover3(true)} onMouseOut={() => setLinkHover3(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>Pages</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} left={"670px"}  display={linkHover3 ? 'flex' : 'none'} flex={"row"}>
                                <HoverHeaderColumn>
                                    <HoverHeaderTitle>Pages</HoverHeaderTitle>
                                    <HoverHeaderText background={defaultColor}>About Us</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>About Me</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Services Classic</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Services Creative</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Contact Classic</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Contact Creative</HoverHeaderText>
                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>
                                    <HoverHeaderTitle>Special Pages</HoverHeaderTitle>
                                    <HoverHeaderText background={defaultColor}>Coming Soon</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Login & Register</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>404 Not Found</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>FAQ</HoverHeaderText>
                                </HoverHeaderColumn>

                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover4(true)} onMouseOut={() => setLinkHover4(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>elements</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} left={"670px"}  display={linkHover4 ? 'flex' : 'none'} flex={"row"}>
                                <HoverHeaderColumn>
                                    <HoverHeaderText background={defaultColor}>Accordions</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Buttons</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Tabs</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Pricing Tables</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Alerts</HoverHeaderText>
                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>
                                    <HoverHeaderText background={defaultColor}>Lists</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Icon Box</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Typography</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Progress Bars</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Carousel Slider</HoverHeaderText>
                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>
                                    <HoverHeaderText background={defaultColor}>Call To Action</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Counters</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Testimonials</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Social Icons</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Icons</HoverHeaderText>
                                </HoverHeaderColumn>


                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover5(true)} onMouseOut={() => setLinkHover5(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>shop</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} display={linkHover5 ? 'flex' : 'none'}>
                                <HoverHeaderText background={defaultColor}>Shop Right Sidebar</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Shop Left Sidebar</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Shop Full-Width</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Product Page</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Product Categories</HoverHeaderText>
                                <HoverHeaderText background={defaultColor}>Shopping Cart</HoverHeaderText>
                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover6(true)} onMouseOut={() => setLinkHover6(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>blog</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} left={"870px"}  display={linkHover6 ? 'flex' : 'none'} flex={"row"}>
                                <HoverHeaderColumn>
                                    <HoverHeaderTitle>Full-width</HoverHeaderTitle>
                                    <HoverHeaderText background={defaultColor}>Three Columns</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Four Columns</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Five Columns</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>With Sidebar</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Single Blog Post</HoverHeaderText>
                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>
                                    <HoverHeaderTitle>Contained</HoverHeaderTitle>
                                    <HoverHeaderText background={defaultColor}>One Columns</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Two Columns</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Three Columns</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Four Columns</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>With Sidebar</HoverHeaderText>
                                    <HoverHeaderText background={defaultColor}>Single Blog Post</HoverHeaderText>                                </HoverHeaderColumn>

                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>contact</HeaderLink>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv style={{marginRight: 10, marginLeft: 5}} onMouseOver={() => setOverSearch(true)}
                                       onMouseOut={() => setOverSearch(false)}>
                            <AiOutlineSearch size={25} fill={overSearch ? defaultColor : '#fff'}/>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setOverCart(true)} onMouseOut={() => setOverCart(false)}>
                            <BiCart size={25} fill={overCart ? defaultColor : '#fff'}/>
                            <Badge background={defaultColor}>8</Badge>
                        </HeaderLinkDiv>

                    </HeaderTopRight>
                </HeaderTop>

                <TopDivHidden display={headerShow ? 'flex' : 'none'}></TopDivHidden>

                <HeaderBottom pLeftMobile={headerImg ? '25px' : '0'} pLeftNote={headerImg ? '200px' : '0'}
                              pLeft={headerImg ? '300px' : '0'}
                              content={headerImg ? 'flex-start' : 'center'}>
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

                    <HeaderBottomChild align={headerImg ? 'flex-start' : 'center'}>
                        {headerImg ?
                            <HeaderBottom1>
                                <DefaultText weight={"700"} font={isMobile ? '18px' : '31px'} fontBig={"52px"}>
                                    Strategy Planning
                                </DefaultText>
                                <DefaultText color={"#ccc"} font={isMobile ? '14px' : '17px'} fontBig={"23px"}>
                                    Interactively procrastinate high-payoff content without backward-compatible data.
                                    Quickly cultivate optimal processes and tactical architectures
                                </DefaultText>
                                <DefaultBtn>Read More</DefaultBtn>
                            </HeaderBottom1>
                            :
                            <HeaderBottom2>
                                <DefaultText align={"center"} weight={"700"} font={isMobile ? '18px' : '31px'}
                                             fontBig={"52px"}>
                                    Business Analysis
                                </DefaultText>
                                <DefaultText align={"center"} color={"#ccc"} font={isMobile ? '14px' : '17px'}
                                             fontBig={"23px"}>
                                    Proactively envisioned multimedia based on expertise cross-media growth strategies.
                                    Pontificate installed based portals after maintainable products.
                                </DefaultText>
                                <DefaultBtn>Read More </DefaultBtn>
                            </HeaderBottom2>
                        }

                    </HeaderBottomChild>

                </HeaderBottom>
            </Header>
            <WhatWeDoComponent defaultColor={defaultColor}/>

            <ContentImageComponent defaultColor={defaultColor}/>

            <WhoWeWorkComponent/>

            <FooterComponent/>
        </Container>
    );
}
import React, {useEffect, useState} from 'react';
import {FaCog} from 'react-icons/fa';       // Button ChangeColor
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';   // Menu Mobile Open, Button Search, Menu Mobile Close
import {IoIosArrowBack, IoIosArrowForward, IoIosArrowUp} from 'react-icons/io';     // Back Image, Foward Image, BackToTop Button

// Submenu ELEMENTS - START

import {AiFillPushpin} from 'react-icons/ai';   // Alert
import {BiCart, BiShareAlt} from 'react-icons/bi';  // Cart Header, Social Icons
import {FiSend, FiMenu, FiBell, FiLayers} from 'react-icons/fi';    // Buttons, Lists, Call To Action, Accordions
import {GoFileDirectory, GoBook} from 'react-icons/go';     // Tabs, Typography
import {BsLightning} from 'react-icons/bs';     // Princing Tables
import {FaMedal, FaRegImage} from 'react-icons/fa';     // Icon Box, Carousel Slider
import {TiMessages} from 'react-icons/ti';              // Testimonials
import {RiBarChartFill, RiVipDiamondFill} from 'react-icons/ri';    // Counters, Icons

// Submenu ELEMENTS - FINISH

import Pic1 from './img/pic1.jpg';      // Image 1 Header
import Pic2 from './img/pic2.jpg';      // Image 2 Header

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
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

import {
    Container,

    ToTopBtn,

    DefaultText,

    MenuDivMobile,
    MenuDivMobileRow,
    MenuBtnMobile,
    MenuTextMobile,
    SearchBtnMobile,
    InputSearch,

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
    HoverHeaderRowIcon,
    HoverHeaderTitle,
    HoverLineDiv,
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
    HeaderImg,
} from './AppStyled';

import {Button} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({      // Drawer - Menu Mobile
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
        padding: '15px 0',
    },
    drawerTitle: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#282828',
        padding: '14px 0',
        color: '#ddd',
        borderTop: '1px solid #777'
    },
    drawerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#ddd',
    },
    drawerLogoText: {
        color: '#ddd',
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

    const [linkHover1, setLinkHover1] = useState(false);        // Saber se foi passado em cima dos links no headerTop
    const [linkHover2, setLinkHover2] = useState(false);        // Saber se foi passado em cima dos links no headerTop
    const [linkHover3, setLinkHover3] = useState(false);        // Saber se foi passado em cima dos links no headerTop
    const [linkHover4, setLinkHover4] = useState(false);        // Saber se foi passado em cima dos links no headerTop
    const [linkHover5, setLinkHover5] = useState(false);        // Saber se foi passado em cima dos links no headerTop
    const [linkHover6, setLinkHover6] = useState(false);        // Saber se foi passado em cima dos links no headerTop

    const [searchInput, setSearchInput] = useState(false);      // Mostrar ou esconder input do search no mobile
    const [searchInputValue, setSearchInputValue] = useState('');       // Value do input search mobile

    const classes = useStyles();                                         // 14 - Usando classes do Material-ui
    const theme = useTheme();                                            // 15 - Usando themes do Material-ui

    const handleDrawerOpen = () => {                                     // 16 - Função de abrir Menu
        setOpen(true);
    };

    const handleDrawerClose = () => {                                    // 17 - Função de fechar o menu
        setOpen(false);
    };

    const handleSearch = (s) => {               // Alterar valor do input com o que for digitado
        setSearchInputValue(s.target.value);
    }

    const isMobile = useMediaQuery({                                     // 18 - Da uma largura para mobile devices
        query: '(max-width: 799px)'
    });

    const isMdDevice = useMediaQuery({      // Largura Ipad até um Notebook pequeno
        query: '(max-width: 1199px)'
    })

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
        }, [7000])
    }, [headerImg]);

    useEffect(() => {
        setTimeout(() => {
            alert('Este Website é apenas uma cópia da SPHENE, feita com a intenção de obter experiência e aprendizado em novos desafios')
        }, 2000)
    }, [])

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

            {/*MenuMobile - Start*/}

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div onClick={handleDrawerClose} className={classes.drawerHeader}>
                    <a href={"http://vasterad.com/themes/sphene/index.html"} className={classes.drawerLogoText}>Sphene</a>
                    <IconButton>
                        <AiOutlineClose fill={"#fff"} size={20}/>
                    </IconButton>
                </div>

                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Home</span>
                </div>
                <div>
                    {['Main Demo', 'Agency Demo', 'Classic Demo', 'Corporate Demo', 'Resume / CV Demo', 'Shop Demo', 'Photography Demo', 'Magazine / Blog Demo'].map((text, index) => (
                        <div style={{borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button key={text}>
                            <ListItemText style={{color: '#ddd'}} primary={text}/>
                        </div>
                    ))}
                </div>


                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Portfolio</span>
                </div>
                <div>
                    {['Portfolio Style 1', 'AJAX Portfolio', 'Creative Style 1', 'Creative Style 2', 'Classic - Content Right', 'Classic - Content Left', 'Classic - Content Bottom'].map((text, index) => (
                        <div style={{borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button key={text}>
                            <ListItemText primary={text}/>
                        </div>
                    ))}
                </div>


                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Pages</span>
                </div>
                <div>
                    {['About Us', 'About Me', 'Services Classic-', 'Services Creative', 'Contact Classic', 'Contact Creative', 'Coming Soon', 'Login & Register', '404 Not Found', 'FAQ'].map((text, index) => (
                        <div style={{borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button key={text}>
                            <ListItemText primary={text}/>
                        </div>
                    ))}
                </div>


                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Elements</span>
                </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <FiLayers fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Accordions</ListItemText>
                        </div>

                         <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <FiSend fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Buttons</ListItemText>
                        </div>

                         <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <GoFileDirectory fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Tabs</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <BsLightning fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Pricing Tables</ListItemText>
                        </div>

                         <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <AiFillPushpin fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Alerts</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <FiMenu fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Lists</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <FaMedal fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Icon Boxes</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <GoBook fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Typography</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <RiBarChartFill fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Progress Bars</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <FaRegImage fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Carousel Slider</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <FiBell fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Call To Action</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <RiBarChartFill fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Counters</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <TiMessages fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Testimonials</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <BiShareAlt fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Social Icons</ListItemText>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button>
                            <RiVipDiamondFill fill={"#999"} size={20} />
                            <ListItemText style={{marginLeft: 15}}>Icons</ListItemText>
                        </div>


                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Shop</span>
                </div>
                <div>
                    {['Shop Right Sidebar', 'Shop Left Sidebar', 'Shop Full-Width', 'Product Page', 'Product Categories', 'Shopping Cart'].map((text, index) => (
                        <div style={{borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button key={text}>
                            <ListItemText primary={text}/>
                        </div>
                    ))}
                </div>


                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Blog</span>
                </div>
                <div>
                    {['One Columns', 'Two Columns', 'Three Columns', 'Four Columns', 'Five Columns', 'With Sidebar', 'Single Blog Post'].map((text, index) => (
                        <div style={{borderTop: '1px solid #777', padding: '10px 0 10px 30px'}} button key={text}>
                            <ListItemText primary={text}/>
                        </div>
                    ))}
                </div>


                <div className={classes.drawerTitle}>
                    <span className={classes.drawerText}>Contact</span>
                </div>
            </Drawer>

            {/*MenuMobile - Finish*/}

            {/*ButtonToTop* - Start/}

            <ToTopBtn opacity={toTopBtn ? '1' : '0'} onClick={scrollToTop} display={toTopBtn ? 'flex' : 'none'}
                      background={defaultColor}>
                <IoIosArrowUp fill={"#fff"} size={25}/>
            </ToTopBtn>

            {/*ButtonToTop* - Finish*/}

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

                {/*Search Button and Menu Button Open Mobile - Start */}

                <MenuDivMobile>
                    <MenuDivMobileRow>
                        <MenuBtnMobile onClick={handleDrawerOpen}>
                            <AiOutlineMenu fill={"#fff"} size={20}/>
                            <MenuTextMobile>Menu</MenuTextMobile>
                        </MenuBtnMobile>

                        <SearchBtnMobile onClick={() => setSearchInput(!searchInput)}>
                            {searchInput ?
                                <AiOutlineClose fill={"#fff"} size={30}/>
                                :
                                <AiOutlineSearch fill={"#fff"} size={30}/>
                            }
                        </SearchBtnMobile>
                    </MenuDivMobileRow>


                    <InputSearch display={searchInput ? 'flex' : 'none'} placeholder={"to search type and hit enter"}
                                 onChange={handleSearch} value={searchInputValue} type={"text"}/>
                </MenuDivMobile>

                {/*Search Button and Menu Button Open Mobile - Finish */}


                {/*HeaderTop - Start*/}

                <HeaderTop height={headerShow ? '66px' : '77px'}
                           background={headerShow ? '#282828' : 'rgba(0, 0, 0, 0.3)'}
                           position={headerShow ? 'fixed' : 'relative'}>

                    <HeaderTopLeft>
                        <HeaderLink href={"http://vasterad.com/themes/sphene/index.html"} borderColor={"transparent"} href={"#"} font={"25px"}>sphene</HeaderLink>
                    </HeaderTopLeft>

                    <HeaderTopRight>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover1(true)} onMouseOut={() => setLinkHover1(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>home</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'}
                                                   display={linkHover1 ? 'flex' : 'none'}>
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
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} leftBig={"1150px"}
                                                   left={isMdDevice ? '200px' : "550px"}
                                                   display={linkHover2 ? 'flex' : 'none'} flex={"row"}>
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
                                    <HoverHeaderText background={defaultColor}>Classic - Content
                                        Bottom</HoverHeaderText>
                                </HoverHeaderColumn>


                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover3(true)} onMouseOut={() => setLinkHover3(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>Pages</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} leftBig={"1350px"}
                                                   left={isMdDevice ? '350px' : '670px'}
                                                   display={linkHover3 ? 'flex' : 'none'} flex={"row"}>
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
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>Elements</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} leftBig={"1350px"}
                                                   left={isMdDevice ? '350px' : '670px'}
                                                   display={linkHover4 ? 'flex' : 'none'} flex={"row"}>
                                <HoverHeaderColumn>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <FiLayers fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Accordions</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <FiSend fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Buttons</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <GoFileDirectory fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Tabs</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <BsLightning fill={"#999"} siz={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}} background={defaultColor}>Pricing
                                            Tables</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <AiFillPushpin fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Alerts</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <FiMenu fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>List</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <FaMedal fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}} background={defaultColor}>Icon
                                            Box</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <GoBook fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Typography</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <RiBarChartFill fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}} background={defaultColor}>Progress
                                            Bars</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <FaRegImage fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}} background={defaultColor}>Carousel
                                            Slider</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                </HoverHeaderColumn>

                                <HoverLineDiv></HoverLineDiv>

                                <HoverHeaderColumn>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <FiBell fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}} background={defaultColor}>Call To
                                            Action</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <RiBarChartFill fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Counters</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <TiMessages fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Testimonials</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <BiShareAlt fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}} background={defaultColor}>Social
                                            Icons</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                    <HoverHeaderRowIcon background={defaultColor}>
                                        <RiVipDiamondFill fill={"#999"} size={20}/>
                                        <HoverHeaderText style={{paddingLeft: 10}}
                                                         background={defaultColor}>Icons</HoverHeaderText>
                                    </HoverHeaderRowIcon>

                                </HoverHeaderColumn>


                            </HoverHeaderLinkHidden>
                        </HeaderLinkDiv>

                        <HeaderLinkDiv onMouseOver={() => setLinkHover5(true)} onMouseOut={() => setLinkHover5(false)}>
                            <HeaderLink color={defaultColor} font={"13px"} href={"#"}>shop</HeaderLink>
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'}
                                                   display={linkHover5 ? 'flex' : 'none'}>
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
                            <HoverHeaderLinkHidden top={headerShow ? '66px' : '77px'} leftBig={"1650px"}
                                                   left={isMdDevice ? '550px' : '870px'}
                                                   display={linkHover6 ? 'flex' : 'none'} flex={"row"}>
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
                                    <HoverHeaderText background={defaultColor}>Single Blog Post</HoverHeaderText>
                                </HoverHeaderColumn>

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

                {/*HeaderTop - Start*/}


                {/*HeaderBottom - Start*/}

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

                {/*HeaderBototm - Finish*/}

            </Header>
            <WhatWeDoComponent defaultColor={defaultColor}/>

            <ContentImageComponent defaultColor={defaultColor}/>

            <WhoWeWorkComponent/>

            <FooterComponent/>
        </Container>
    );
}
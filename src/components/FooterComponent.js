import {useState} from "react";

import {
    MainDiv,
    TopDiv,
    BlockDiv,
    Title,
    Text,
    LinkDiv,
    Link,
    LinkSide,
    LinkItem,
    LineDiv,
} from './FooterStyled';

import {IoIosArrowForward} from 'react-icons/io';
import {AiFillFacebook} from 'react-icons/ai';

import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default () => {
    const [hoverFacebook, setHoverFacebook] = useState(false);

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#46639F',
            color: '#fff',
            height: 45,
            width: 240,
            borderRadius: 30,
            marginTop: 30,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: 12,
            textTransform: 'uppercase',
            transition: '0.4s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',

            '&:hover': {
                backgroundColor: '#fff',
                color: '#000'
            }
        },
    }))(Button);

    return (
        <MainDiv>
            <TopDiv>
                <BlockDiv style={{maxWidth: '500px'}}>
                    <Title>About</Title>
                    <Text>
                        Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc
                        ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.
                    </Text>
                    <DefaultBtn onMouseOver={() => setHoverFacebook(true)} onMouseOut={() => setHoverFacebook(false)}>
                        <AiFillFacebook size={20} fill={hoverFacebook ? '#000' : '#fff'} />
                        Like us on facebook
                    </DefaultBtn>
                </BlockDiv>

                <BlockDiv>
                    <Title>Helpful links</Title>
                    <LinkDiv>
                        <LinkSide>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>About Us</Link>
                            </LinkItem>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>Press Releases</Link>
                            </LinkItem>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>Careers</Link>
                            </LinkItem>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>Services</Link>
                            </LinkItem>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>Projects</Link>
                            </LinkItem>
                        </LinkSide>

                        <LinkSide>
                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>In the News</Link>
                            </LinkItem>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>Our Blog</Link>
                            </LinkItem>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>Testimonials</Link>
                            </LinkItem>

                            <LinkItem>
                                <IoIosArrowForward fill={"#fff"} size={15}/>
                                <Link href={"#"}>Contact</Link>
                            </LinkItem>

                        </LinkSide>
                    </LinkDiv>
                </BlockDiv>

                <BlockDiv>
                    <Title>Contact Us</Title>
                    <Text color={"#fff"}>12345 Little Lonsdale St, Melbourne</Text>
                    <Text color={"#fff"}><span style={{color: '#999'}}>Phone:</span> (12) 12345-6789</Text>
                    <Text color={"#fff"}><span style={{color: '#999'}}>Phone:</span> (12) 12345-6789</Text>
                    <Text color={"#fff"}><span style={{color: '#999'}}>Email:</span> Olá@gmail.com</Text>
                </BlockDiv>
            </TopDiv>

            <LineDiv></LineDiv>

            <Text style={{textAlign: 'center'}}>© Copyright 2016 by <a style={{color: '#fff', textDecoration: 'none'}}
                                         href={"http://vasterad.com/themes/sphene/index-corporate.html#"}>Sphene</a>.
                All Rights Reserved.</Text>
            <Text style={{marginBottom: 20}}>Copy by Matheus Gomes.</Text>
        </MainDiv>
    );
}
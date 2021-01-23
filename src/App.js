import {useState} from 'react';

import {
    Container,

    DefaultText,

    ChangeColorBtn,

    Header,
    HeaderTop,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderLink,

    HeaderBottom
} from './AppStyled';

import './App.css';

import {Button} from '@material-ui/core';

import {
    withStyles,
} from '@material-ui/core/styles';


export default () => {
    const [colorBtn, setColorBtn] = useState(false);

    const DefaultBtn = withStyles(() => ({
        root: {
            backgroundColor: '#019fb6',
            color: '#fff',
            height: 35,
            width: 120,
            borderRadius: 30,
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

    return (
        <Container>
            <ChangeColorBtn onClick={() => setColorBtn(!colorBtn)}>
                a
            </ChangeColorBtn>

            <Header>
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
                    <DefaultText weight={"bold"} font={"35px"}>Strategy Planning</DefaultText>
                    <DefaultText font={"22px"}>
                        Interactively procrastinate high-payoff content without backward-compatible data.
                        Quickly cultivate optimal processes and tactical architectures
                    </DefaultText>
                    <DefaultBtn>Read More</DefaultBtn>
                </HeaderBottom>
            </Header>
        </Container>
    );
}
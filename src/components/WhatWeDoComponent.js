import {useState} from "react";

import {
    MainDiv,
    ItemDiv,
    IconDiv,
    Icon,
    ContentDiv,
    Title,
    Content
} from './WhatWeDoStyled';

import Megaphone from '../img/megaphone.png';
import {FaSearch} from 'react-icons/fa';
import Line_chart from '../img/line_chart.png';

export default (props) => {
    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);

    return (
        <MainDiv>

            <ItemDiv onMouseOver={() => setItem1(true)} onMouseOut={() => setItem1(false)}>
                <IconDiv position={item1 ? 'right bottom' : 'left bottom'} background={item1 ? props.defaultColor : '#eee'}>
                    <Icon src={Megaphone}/>
                </IconDiv>
                <ContentDiv>
                    <Title>Marketing Services</Title>
                    <Content>Pellentesque habitant morbi tristique senectus netus ante et malesuada fames ac turpis
                        egestas maximus neque.</Content>
                </ContentDiv>
            </ItemDiv>

            <ItemDiv onMouseOver={() => setItem2(true)} onMouseOut={() => setItem2(false)}>
                <IconDiv background={item2 ? props.defaultColor : '#eee'}>
                    <FaSearch size={30} fill={"#000"}/>
                </IconDiv>
                <ContentDiv>
                    <Title>Audit & Assurance</Title>
                    <Content>Nunc ultricies porttitor est, ut rutrum ante. Vivamus interdum sodales sem. In lorem ipsum
                        ultrices augue eget.</Content>
                </ContentDiv>
            </ItemDiv>

            <ItemDiv onMouseOver={() => setItem3(true)} onMouseOut={() => setItem3(false)}>
                <IconDiv background={item3 ? props.defaultColor : '#eee'}>
                    <Icon src={Line_chart}/>
                </IconDiv>
                <ContentDiv>
                    <Title>Financial Consulting</Title>
                    <Content>Pellentesque habitant morbi tristique senectus netus ante et malesuada fames ac turpis
                        egestas maximus.</Content>
                </ContentDiv>
            </ItemDiv>

        </MainDiv>
    );
}
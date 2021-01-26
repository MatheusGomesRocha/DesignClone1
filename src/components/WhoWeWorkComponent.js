import {useState} from "react";

import {
    MainDiv,

    SideDiv,

    CenterDiv,
    CenterDiv1,
    Title,
    Content,
    Name,
    Enterprise,
} from './WhoWeWorkStyled';

import {BsArrowLeft} from 'react-icons/bs';
import {BsArrowRight} from 'react-icons/bs';

export default () => {
    const [content, setContent] = useState(1);
    const [fillIcon1, setFillIcon1] = useState(false);
    const [fillIcon2, setFillIcon2] = useState(false);

    const setContentPrev = () => {
        if (content === 1) {
            setContent(3);
        } else {
            setContent(content - 1);
        }
    }

    const setContentNext = () => {
        if (content === 3) {
            setContent(1);
        } else {
            setContent(content + 1);
        }
    }

    return (
        <MainDiv>
            <SideDiv onMouseOver={() => setFillIcon1(true)} onMouseOut={() => setFillIcon1(false)} onClick={setContentPrev}>
                <BsArrowLeft fill={fillIcon1 ? '#282828' : '#999'} size={40}/>
            </SideDiv>

            <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Title>who we work with</Title>

                <CenterDiv display={content == 1 ? 'flex' : 'none'}>

                    <Content>
                        Sphene is ridiculously powerful and easy to use, beginner or advanced. Always been on the hunt
                        for
                        handcrafted, clean themes
                    </Content>

                    <Name>Robert Lindstrom</Name>
                    <Enterprise>Google</Enterprise>
                </CenterDiv>

                <CenterDiv display={content == 2 ? 'flex' : 'none'}>

                    <Content>
                        What impressed me was the fast response to questions and helpful community conversation in the
                        support forums
                    </Content>

                    <Name>Thomas Jhonson</Name>
                    <Enterprise>Microsof</Enterprise>
                </CenterDiv>

                <CenterDiv display={content == 3 ? 'flex' : 'none'}>

                    <Content>
                        Simple and clean - that's waht people and me like the most. Beautifully crafted, well organized
                        and
                        thoroughly documented.
                    </Content>

                    <Name>Garret Gravesen</Name>
                    <Enterprise>Envato</Enterprise>
                </CenterDiv>

            </div>

            <SideDiv onMouseOver={() => setFillIcon2(true)} onMouseOut={() => setFillIcon2(false)} onClick={setContentNext}>
                <BsArrowRight fill={fillIcon2 ? '#282828' : '#000'} size={45}/>
            </SideDiv>

        </MainDiv>
    );
}
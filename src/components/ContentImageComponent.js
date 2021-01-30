import {useState, useEffect} from "react";

import {
    MainDiv,

    RowDiv,

    SideDiv,

    Title,

    Content,

    SideImg,
    SideImgMobile,
} from './ContentImageStyled';

import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {useMediaQuery} from "react-responsive";

import Pic3 from '../img/pic3.jpg';
import Pic4 from '../img/pic4.jpg';

export default (props) => {
    const [mLeft, setMLeft] = useState(0);

    const isMobile = useMediaQuery({
        query: '(max-width: 799px)'
    });

    const isMdDevice = useMediaQuery({
        query: '(max-width: 1199px)'
    });

    const isMdDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    });

    const isLgDesktop = useMediaQuery({
        query: '(min-width: 1800px)'
    });

    useEffect(() => {
        if(isLgDesktop) {
            setMLeft(200);
        } else if (isMobile) {
            setMLeft(25);
        } else if (isMdDesktop) {
            setMLeft(100);
        } else if (isMdDevice) {
            setMLeft(70);
        }
    }, [])

    const DefaultBtn = withStyles(() => ({
        root: {
            border: `2px solid ${props.defaultColor}`,
            color: props.defaultColor,
            height: 50,
            width: 150,
            borderRadius: 30,
            marginTop: isMobile ? 15 : 0,
            marginLeft: mLeft,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: 12,
            textTransform: 'uppercase',
            transition: '0.2s',

            '&:hover': {
                backgroundColor: props.defaultColor,
                color: '#fff'
            }
        },
    }))(Button);            // 7 - Default Button do site

    return (
        <MainDiv>
            <RowDiv>
                <SideImgMobile background={Pic3}></SideImgMobile>

                <SideDiv>
                    <Title>Whatever We Start, We Think Through To The End</Title>
                    <Content>
                        Globally incubate standards compliant channels before scalable benefits. Quickly disseminate
                        superior deliverables whereas web-enabled applications.
                    </Content>
                    <DefaultBtn>read more</DefaultBtn>
                </SideDiv>
                <SideImg display={'none'} background={Pic3}></SideImg>
            </RowDiv>

            <RowDiv background={"#282828"}>
                <SideImg background={Pic4}></SideImg>

                <SideDiv>
                    <Title color={"#fff"}>Everybody Gets Exactly What They Need</Title>
                    <Content color={"#ccc"}>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the
                        day, going forward, a new normal that has evolved from generation.
                    </Content>
                    <DefaultBtn>read more</DefaultBtn>
                </SideDiv>
            </RowDiv>

        </MainDiv>
    );
}
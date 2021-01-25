import {
    MainDiv,

    RowDiv,

    SideDiv,

    Title,

    Content,

    SideImg
} from './ContentImageStyled';

import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {useMediaQuery} from "react-responsive";

import Pic3 from '../img/pic3.jpg';
import Pic4 from '../img/pic4.jpg';

export default (props) => {
    const isLgDesktop = useMediaQuery({
        query: '(min-width: 1501px)'
    });

    const DefaultBtn = withStyles(() => ({
        root: {
            border: `2px solid ${props.defaultColor}`,
            color: props.defaultColor,
            height: 50,
            width: 150,
            borderRadius: 30,
            marginLeft: isLgDesktop ? 200 : 70,
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
                <SideDiv>
                    <Title>Whatever We Start, We Think Through To The End</Title>
                    <Content>
                        Globally incubate standards compliant channels before scalable benefits. Quickly disseminate
                        superior deliverables whereas web-enabled applications.
                    </Content>
                    <DefaultBtn>read more</DefaultBtn>
                </SideDiv>
                <SideImg background={Pic3}></SideImg>
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
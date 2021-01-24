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

import Pic1 from '../img/pic1.jpg';

export default (props) => {
    const DefaultBtn = withStyles(() => ({
        root: {
            border: `2px solid ${props.defaultColor}`,
            color: props.defaultColor,
            height: 50,
            width: 150,
            borderRadius: 30,
            marginTop: 30,
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: 12,
            textTransform: 'uppercase',
            transition: '0.4s',

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
                <SideImg src={Pic1} />
            </RowDiv>

            <RowDiv>
                <SideImg src={Pic1} />

                <SideDiv background={"#282828"}>
                    <Title color={"#fff"}>Whatever We Start, We Think Through To The End</Title>
                    <Content color={"#ccc"}>
                        Globally incubate standards compliant channels before scalable benefits. Quickly disseminate
                        superior deliverables whereas web-enabled applications.
                    </Content>
                    <DefaultBtn>read more</DefaultBtn>
                </SideDiv>
            </RowDiv>

        </MainDiv>
    );
}
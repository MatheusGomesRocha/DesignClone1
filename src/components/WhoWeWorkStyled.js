import styled from 'styled-components';

export const MainDiv = styled.div`
    background-color: #eee;
    display: flex;
    padding: 0 70px;
    align-items: center;
    justify-content: center;
    height: 500px;
`;

export const SideDiv = styled.div`
    margin: 0 ;
    
    :hover {
        cursor: pointer;
    }
`;

export const CenterDiv = styled.div`
    width: 70%;
    margin: 0 50px;
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    animation: fade 1s;
  
    @keyframes fade {
      from {opacity: 0; transform: translateX(100%);}
      to {opacity: 1}
    }
    
    @media(min-width: 300px) and (max-width: 540px) {
        margin: 0 70px;
    }
    
    
`;
export const Title = styled.span`
    color: #282828;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;
export const Content = styled.span`
    color: #777;
    font-size: 30px;
    text-align: center;
    line-height: 1.5;
    margin-top: 40px;

    @media(min-width: 300px) and (max-width: 750px) {
        font-size: 20px;
    }
`;
export const Name = styled.span`
    color: #282828;
    font-size: 22px;
    margin-top: 40px;
    font-weight: bold;
    text-align: center;
`;
export const Enterprise = styled.span`
    color: #777;
    font-size: 18px;
    margin-top: 5px;
    font-weight: bold;
    text-transform: uppercase;
`;

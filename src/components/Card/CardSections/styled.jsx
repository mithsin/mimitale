import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 0px;
    border-bottom: 1px solid black;
    padding: 1rem;
    img {
        height: 200px;
        border-radius: 50%;
    }
`;

export const StarsSectionWrap = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    padding: 1rem;
`;

export const NameBlock = styled.span`
    flex: 1 1 33%;
    font-weight: 700;
    font-size: 2rem;
    display: flex;
    align-items: flex-end;
    font-family: cursive;
`;
export const StarsBlock = styled.span`
    flex: auto;
    display: flex;
    position: relative;
    flex-direction: column;
`;
export const StarPointsWrap = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
`;
export const StarPointsType = styled.div`
    position: absolute;
    right: 22%;
    top: 0;
`;

export const FontAwesomeIconCont = styled(FontAwesomeIcon)`
    ${props => {
        if (props.type === 'available') {
            return `color: rgb(23, 255, 2);`
        }
        if (props.type === 'reward') {
            return `color: rgb(231, 231, 82);`
        }
        if (props.type === 'traded') {
            return `color: rgb(204, 0, 0);`
        }
    }}
`;

export const SlideWrapper = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid;
`;

export const SlideWrapContWrap = styled.div`
    max-width: 100px;
    background-color: #ebebeb;
    padding: .5rem;
    display: flex;
    flex-direction: column;
`;

export const wrapP = styled.p`
    color: 'pink',
    margin: 0,
    padding: 0,
`
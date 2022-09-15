import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

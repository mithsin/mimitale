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

export const FontAwesomeIconAvailable = styled(FontAwesomeIcon)`
    color: rgb(23, 255, 2);
`;
export const FontAwesomeIconReward = styled(FontAwesomeIcon)`
    color: rgb(231, 231, 82);
`;
export const FontAwesomeIconTraded = styled(FontAwesomeIcon)`
    color: rgb(204, 0, 0);
`;
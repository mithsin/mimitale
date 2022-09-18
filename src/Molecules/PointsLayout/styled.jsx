import styled from '@emotion/styled'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const PointsLayouterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    .pointInput {
        flex: 1 0 100%;
        padding: 20px 10px;
        margin: 0px;
    }
    .inputError {
        padding: 20px 10px;
        margin: 0px;
        box-shadow: 0px 0px 4px 2px red;
        border: 2px solid red;
        outline: red;
    }
    .pointButton{
        padding: 10px 0;
    }
`;

export const QuicPointskWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const PointSysUl = styled.span`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const PointStarCtn = styled.span`
    text-align: center;
    cursor: pointer;
        &:hover {
            ${props => `
                svg {
                    color: ${props.isAdd ? '#0d3a25' : '#812323;'};
                }
                .numberStars{
                    color: ${props.isAdd ? '#33da8c' : '#f84a4a;'};
                }
            `}

        }
`;

export const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    margin: 0 0.5rem;
    button {
        width: 150px;
        padding: 1rem;
        margin: 0;
        &:hover {
            ${props => `
                background-color: ${props.isAdd ? '#0d3a25' : '#812323;'};
            `}

        }
    }

`;
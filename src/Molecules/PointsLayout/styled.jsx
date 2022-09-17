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
    .pointSysUl {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        padding: 0px;
        width: 100%;
        li.addPoint {
            padding: 15px;
            flex: 1;
            .StarsContainerWrapper {
                text-align: center;
                cursor: pointer;
                &:hover {
                    svg {
                        color: #0d3a25;
                    }
                    .numberStars{
                        color: #33da8c;
                    }
                }
            }
        }
        li.minusPoint {
            padding: 15px;
            flex: 1;
            .StarsContainerWrapper {
                text-align: center;
                cursor: pointer;
                &:hover {
                    svg {
                        color: #812323;
                    }
                    .numberStars{
                        color: #f84a4a;
                    }
                }
            }
        }
    }
`;
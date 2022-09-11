import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AddNewItemBlockWrapper = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
`;

export const ItemBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    background-color: #fff;
    min-height: 200px;
    .starsWrapper {
        position: absolute;
        top: 50px;
        right: 16px;
        font-size: 50px;
        z-index: 999999;
    }
    
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${props => `background-image: url(${props.image})`}
`;

export const ItemRowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    background-color: #6e6e6e;
    height: 100px;
    border: 1px solid #e6e6e6;
    .textWrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: rgba(255,255,255,.5);
        text-align: center;
        padding: 10px;
        .textTitle {
            font-size: .825rem;
            font-weight: 700;
        }
        .textDescription {
            font-size: .7rem;
            margin-top: 10px;
        }
    }
`;

export const FrontRowInnerWrap = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 3s;
`;
export const BackRowInnerWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 3s;
`;

export const VerticalBackgroundImage = styled.span`
    width: 50%;
    height: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    ${props => `background-image: url(${props.image})`}
`;

export const RowTextBlock = styled.span`
    width: 100%;
`;

export const RowTextWrap = styled.span`
    color: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 10px;
    .textTitle {
        font-size: .825rem;
        font-weight: 700;
    }
    .textDescription {
        font-size: .7rem;
        margin-top: 10px;
    }
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    & button {
        height: 45px;
    }
`

export const IconAbsoulteTopRight = styled(FontAwesomeIcon)`
    position: absolute;
    z-index: 9999;
    cursor: pointer;
    ${props => `
        top: ${props.top || 0};
        right: ${props.right || 0};
    `}

`;

export const PointsBottomRight = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #e6e6e6;
    border-radius: 50%;
    padding: 3px;
    font-weight: 700;
    ${props => `color: ${props.color};`}
`;


//Models
export const IconToShow = styled(FontAwesomeIcon)`
    cursor: pointer;
    ${props => `
        color: ${props.color || 'lightblue'};
        width: ${props.width || '2rem'};
        height: ${props.height || '2rem'};
        top: ${props.top || 0};
        right: ${props.right || 0};
    `}

`;
export const ModelWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #000000c4;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;

`;

export const ModelInnerWrap = styled.div`
    max-width: 500px;
    min-width: 320px;
    width: 100%;
    background-color: #fff;
    padding: 1.5rem;
`;

export const CloseIconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

//UserCardItemBlock
export const SwipWrapper = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid;
`;

export const SlideItemWrap = styled.div`
    max-width: 100px;
    wdith: 100px;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    background-color: #7b7b7b21;
    border-radius: 15%;
    cursor: pointer;
    &:hover {
        background-color: #00000021;
    }
`;

export const SlideItemText = styled.p`
    color: #000;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    font-size: .645rem;
    white-space: nowrap;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 0px;
    padding: 1rem;
    position: relative;
    img {
        ${props => `
            border-radius: ${props.rounded ? '50%' : '100%' };
            height: ${props.height || '100px'};
        `}
    }
`;


//ImageUploadBlock
export const ImageUploadBlockWrapper = styled.div`
    border-bottom: 2px dotted #e6e6e6;
`;

export const UploadImageWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
`;

export const ImageTextWrap = styled.div`
    display: flex;
    align-items: center;
`

export const ImageWrap = styled.div`
    height: 100%;
    max-height: 100px;
    width: 100%;
    & img {
        height: 100px;
    }
`;
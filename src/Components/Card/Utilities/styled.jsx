import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 0px;
    border-bottom: 1px solid black;
    padding: 1rem;
    position: relative;
    img {
        height: 200px;
        border-radius: 50%;
    }
`;

export const ImageContWrap = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    z-index: 9999;
    cursor: pointer;
`

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
export const IconAbsoulteTopRight = styled(FontAwesomeIcon)`
    position: absolute;
    z-index: 9999;
    cursor: pointer;
    ${props => `
        top: ${props.top || 0};
        right: ${props.right || 0};
    `}

`;

export const SlideWrapper = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid;
`;

export const SlideWrapContWrap = styled.div`
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

export const UpperH3 = styled.h3`
    text-transform: uppercase;
`;

export const WrapText = styled.p`
    color: #000;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
`

export const SelectedSectionWrapper = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid;
    position: relative;
`;

export const SectionGridWrap = styled.div`
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );
`;

export const SectionVerticalGridWrap = styled.div`
    display: grid;
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

//CardSetting

export const Root = styled.div`
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid black',
    borderRadius: "6px",
    marginBottom: "6px",
`
export const ListItem = styled.div`
    display: 'flex',
    justifyContent: 'center'
`
   
export const ListItemImage = styled.div`
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '& #dropbox': {
    width: '100%'
    }
`
export const ListItemCopyLink = styled.div`
    flexDirection: 'column',
    '& input': {
        margin: '0px',
    },
    '& button' : {
        minWidth: '150px',
    }
`

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const InputLinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button {
        height: 55px;
        width: 150px;
        margin-left: 1rem;
    }
`
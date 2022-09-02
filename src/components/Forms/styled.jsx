import styled from '@emotion/styled';

export const FullWidthOutterWrap = styled.div`
    padding: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px dotted black;
    min-width: 340px;
    max-width: 1280px;
`;

export const InnerFlexColumnWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;

export const FullWidthFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const UploadImageWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const ImageWrap = styled.div`
    height: 100%;
    padding: 3rem;
    img {
        width: 100%;
    }
`;

//FormFormat
export const ErrorMessage = styled.p`
    color: red;
    font-size: 1.5rem;
    font-weight: 700;
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`
import styled from '@emotion/styled'

export const FullWidthOutterWrap = styled.div`
    padding: 1rem;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 1rem;
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
import styled from '@emotion/styled'
import { SwiperSlide } from 'swiper/react';


export const SwiperSlideWrap = styled(SwiperSlide)`
    max-width: 100px;
    display: inline-flex;
    margin-right: 1rem;
    flex-shrink: 0;
    height: 100%;
    position: relative;
    transition-property: transform;
    white-space: nowrap;
`;

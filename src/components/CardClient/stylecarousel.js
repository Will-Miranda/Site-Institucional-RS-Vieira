import styled from "styled-components";

export const GridCarousel = styled.div`
    max-width: 1024px;
    overflow: hidden;

    .slick-slider {
        position: relative;
    }

    .slick-list {
        overflow: visible;
    }

    .slick-slide > div {
        display: flex;
        justify-content: center;
    }

    .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: 40px;
        height: 40px;
        background-color: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: rgba(0,0,0,0.25);
        }

        &::before {
            content: '';
            display: inline-block;
            border: solid white;
            border-width: 0 3px 3px 0;
            padding: 6px;
        }
    }

    .slick-prev {
        left: 10px;
        &::before {
            transform: rotate(135deg);
        }
    }

    .slick-next {
        right: 10px;
        &::before {
            transform: rotate(-45deg);
        }
    }
`
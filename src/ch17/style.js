import { css } from "@emotion/react";

export const root = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
`;

export const container = (width) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 3px solid #dbdbdb;
    width: ${width}px;
    height: 800px;
`;
export const container2 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 3px solid #dbdbdb;
    width: 600px;
    height: 600px;
`;
export const container3 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 3px solid #dbdbdb;
    width: 400px;
    height: 400px;
`;
export const container4 = css`
    box-sizing: border-box;
    border: 3px solid #dbdbdb;
    width: 200px;
    height: 200px;
`;
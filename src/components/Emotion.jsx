/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx,css} from "@emotion/react";
import styled from "@emotion/Styled";

export const Emotion = () => {
    // ストリングスタイル
    const containerStyle = css`
        width:150px;
        border:solid 2px #392eff;
        border-radius:20px;
        padding:8px;
        margin:8px;
        display:frex;
        justify-content:space-around;
        align-items:center;
    `;

    // オブジェクトスタイル
    const titleStyle = css({
        margin:0,
        color:"#3d84a8"
    });

    // styled-componentっぽい記法
    const Button = styled.button`
        background-color:#abedd8;
        border:none;
        padding:8px;
        border-radius:8px;
    `

    return (
        <div css={containerStyle}>
            <p css={titleStyle}>- Emotion -</p>
            <Button>FIGHT!</Button>
        </div>
    );
}
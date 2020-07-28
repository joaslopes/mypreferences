import styled from "styled-components"

const Button = styled.button`
    color: #FF8C00;
    border: 1px solid #FF8C00;
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button
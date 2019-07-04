import styled from 'styled-components';

export const LoginWrapper = styled.div`
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	padding: 20px;
	color: #fff;
	background-color: green;
    font-size: 30px;
`;

export const LoginButton = styled.button`
	display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #409eff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
	border-radius: 4px;
	color: #fff;
	background-color: #409eff;
`;
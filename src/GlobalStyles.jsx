import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    .form-container {
        display: flex;
    justify-content: center;
    margin-top: 50px;
    font-family: "Roboto", sans-serif;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        border: 2.5px solid #2c3e50;
        border-radius: 10px;
        input {
            margin: 20px 0;
        }
        .form-submit {
            width: 70%;
            padding: 10px 0;
            background-color: #2c3e50;
            border-color: #2c3e50;
            outline: none;
            color: #ececec;
            border-radius: 10px;
            cursor: pointer;
            transition: all ease-in-out 0.3s;
            &:hover {
                background-color: #ececec;
                color: #2c3e50;
            }
        }
        p {
            background-color: red;
            color: #ececec;
            padding: 5px;
            border-radius: 5px;
        }
    }
    }
`;

import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --white: #f5f5f5;
    --blue-1: #0693e3;
    --blue-2: #8ed1fc;
    --pink: rgb(255,206,236);
    --black: ##000000;
    --red: #c53030;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--blue-1);
    color: var(--black);
}
body input button { 
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
}

h1 h2 h3 h4 {
    font-size: 40px;
    font-weight: 700;
}

button {
    cursor: pointer;
    background-color: var(--blue-2);
    color: var(--white);
    border-radius: 8px;
    border: 2px solid var(--white);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-top: 16px;
    padding: 1rem;
    width: 100%;
}

:hover {
        background-color: var(--blue-1);
    }

a {
    text-decoration: none;
}
;


`
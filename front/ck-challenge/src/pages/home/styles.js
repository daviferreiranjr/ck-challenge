import styled from 'styled-components';


export const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;

.header{
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1{
        font-size: 24px;
    }

    img {
        width: 350px;
        height: 150px;
    }
}


@media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
}

form {
    margin: 80px;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
        margin-bottom: 15px;
    }

    h1 { 
        margin-bottom: 32px;
    }

    p { 
        margin-top: 0px;
    }
}
`;
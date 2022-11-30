import styled from 'styled-components';

export const Container = styled.div`
background: #23233b;
color: #ffffff;
max-width: 100vw;
min-height: 100vh;


    header{
        width: 100%;
    }

    main{
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .products{
            max-width: 100vw;
            margin: 3em auto;
            gap: 2em;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            
        }
    }
`
import styled from "styled-components";

export const Container = styled.div`
background: #23233b;
color: #ffffff;
max-width: 100vw;
min-height: 100vh;

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .form{
            margin-top: 3em;

            .button{
                width: 20em;
                font-size: 3em;
                color: #212529;
                background:  #ffffff;
                border-radius: 3em;
                border: 1px solid #212529;
                
                
            }

            .button:hover{
                color: #ffffff;
                border: 1px solid #ffffff;
                background: transparent;
                transition: 0.5s ease-in-out;
            }
        }
    }
`

import styled from 'styled-components';

export const Container = styled.div`
background: #23233b;
color: #ffffff;
width: 100vw;
min-height: 100vh;

    header{
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main{
        display: flex;
        height: 87vh;
        align-items: center;
        justify-content: center;

        form{
            width: 20em;
            gap: 1em; 
            display: flex;
            flex-direction: column;

            .field{
                gap: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;

                label{
                    font-size: 1.5em;
                }

                input{
                    width: 20em;
                    color: #ffffff;
                    border: 1px solid #ffffff;
                    background-color: transparent;
                    border-radius: 15px;
                }

                input:focus{
                    color: #ffffff;
                    border: #ffffff;
                }
            }

            button{
                margin: auto;
                width: 7em;
                border: 1px solid #000000;
                background-color: #ffffff;
                font-size: 1.1em;
                border-radius: 15px;
            }

            button:hover{
                border: 1px solid #ffffff;
                background-color: transparent;
                color: #ffffff;
                transition: 0.5s ease-in-out;
            }
        }
    }

`
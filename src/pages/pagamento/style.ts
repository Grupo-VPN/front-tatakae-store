import styled  from "styled-components";

export const Container = styled.div`
background: #23233b;
color: #ffffff;
max-width: 100vw;
min-height: 100vh;

    main{
        display: flex;
        gap: 2em;
        justify-content: center;

        .dados{
            margin: auto;
            width: 50%;
            margin-top: 2em;

            h1{
                text-align: center;
            }

            .form{
                gap: 1em;
                display: flex;
                flex-direction: column;

                .field{
                    gap: 5px;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
 

        .produtos{
            margin: auto;
            width: 30%;
            margin-top: 2em;

            .imgdiv{
                display: flex;

                .img{
                    margin: auto;
                    width: 3em;
                }
            }
        }
    }

    @media (max-width: 800px){
        main{
            flex-direction: column;

            .dados{
                width: 80vw;
            }

            .produtos{
                width: 80vw;
            }
        }
    }
`
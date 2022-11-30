import styled from 'styled-components'

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

        .product{
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 3em;

            .imgdiv{
                background: #ffffff;
                border: 1px solid #000000;
                width: 50em;
                height: 25em;
                display: flex;
                margin: auto;
                align-items: center;
                justify-content: center;

                .img{
                    width: auto;
                    height: 100%;
                    object-fit: cover; 
                }
            }

            @media (max-width: 800px){
                .imgdiv{
                    width: 80vw;
                    height: 50vh;
                }
            }

            .button{
                margin: auto;
                width: 15em;
                margin-bottom: 2em;
            }
        }
    }
`
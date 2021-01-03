import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: cornflowerblue;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    nav{
        background: grey;
        
        ul{
            display: flex;
            width: 100%;

            li{
                width: 25%;
                list-style-type: none;
                
                img{
                    width: 55%;
                }
  
                .ham-div{
                    display: none;
                    .ham-bar{
                        width: 2em;
                        height: .35em;
                        background-color: black;
                        margin: .4em auto;
                    }
                }
                
            }
        }
    }

    button{
        margin: 0 auto 1rem auto;
        border-radius: 15px;
    }

    .poke-icon{ 
        img{
            border-radius: 100%;
        }
    }
    .formGroup{
        label{
            font-weight: bold;
            font-size: 2.5em;  
        }
        input{
            height: 2.5em;
            width: 85%;
            margin: .5em 0;
            border: none;
        }
    }


    @media(max-width: 400px) {
    
        nav{
            ul{
                flex-direction: column;
                align-items: flex-end;
                li{
                    .ham-div{
                        display: block;
                    }
                }
                li .navIcon{
                    order: -1;
                }
                li:not(.navIcon){
                    display: none;
                }
            }
        }

        .landContainer{
            height: 100vh;
            display: flex;
            align-items: flex-end;
        }
        .landBtnGroup{
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5em;
        }
        .formGroup{
            margin-top: 30%;
            label{
                display: inline-block;
                margin: 5%;
            }
            
        }
        .poke-icon{ 
            img{
                width: 20%;
            }
        }
        button{
            width: 45%;
            height: 3.5em;
        }

    }
`;

export default GlobalStyle;
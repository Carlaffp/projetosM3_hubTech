import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --font-primary: 'Inter', sans-serif;
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-gray-0:#F8F9FA;
        --color-gray-1:#868E96;
        --color-gray-2:#343B41;
        --color-gray-3:#212529;
        --color-gray-4:#121214;
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;
        --color-white:#ffff;
    }

    body{
      background: var(--color-gray-4);
    
    }
    .toast{
      background: var(--color-gray-3);
    }
`;

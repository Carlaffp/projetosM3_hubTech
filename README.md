# projetosM3_hubTech

Neste projeto o objetivo era criar um Hub de portifólios de programadores. O objetivo dessa aplicação é conseguir criar um frontend de qualidade, componetizado e responsivo.
Aqui o uso do ContexAPI melhorando a performace da aplicação.

Tecnologias: HTML5, JavaScript (ES6), React (React-router-don/ React-icons/ React-toastify), Hooks, Zod para serialização dos formulários e requisições, Styled-Components

## Endpoints:
| Método | Endpoint                   | Responsabilidade                                  | Autenticação                                       |
| ------ | -------------------------- | ------------------------------------------------- | -------------------------------------------------- |
| GET    | /users                     | Lista todos os usuários já cadastrados            | Qualquer usuário, não necessitam cadastro ou login |
| GET    | /users/:user_id            | Lista todos um usuário específico                 | Qualquer usuário, não necessitam cadastro ou login |
| POST   | /users                     | Criação de um usuário                             | Qualquer usuário, não necessitam cadastro ou login |
| POST   | /sessions                  | Realiza login do usuário                          | Qualquer usuário                                   |
| GET    | /profile                   | Gera o token de autenticação                      | Usuário necessita token - deve estar logado        |
| POST   | /users/techs               | Criação de tecnologias para seu perfil            | Usuário necessita token - deve estar logado        |
| DELETE | /users/techs/tech_id       | Deletar uma tecnologia informando id              | Usuário necessita token - deve estar logado        |
| PUT    | /users/techs/tech_id       | Update nas tecnologias                            | Usuário necessita token - deve estar logado        |
| POST   | /users/works               | Criação de trabalho para seu perfil               | Usuário necessita token - deve estar logado        |
| PUT    | /users/works/work_id       | Atualização do trabalho por id                    | Usuário necessita token - deve estar logado        |
| DELETE | /users/works/work_id       | Deletar um trabalho informando id                 | Usuário necessita token - deve estar logado        |
| PATCH  | /users/avatar              | Atualizar foto do perfil                          | Usuário necessita token - deve estar logado        |
| PATCH  | /users/profile             | Atualizar qualquer dado do usuário                | Usuário necessita token - deve estar logado        |

## Criação de usuário:POST /users
formato do Fomulário:
name: string, obrigatório e conter pelo menos 3 caractéres;
email: string, obrigatório, único;
passaword: string, obrigatório, minimo 6 caractéres;
bio: string, obrigatório e conter pelo menos 5 caractéres;
contact:Pode receber as redes sociais da pessoa, ou numero de telefone,obrigatório;
course_module: deve receber respectivamente os 4 módulos do curso, devendo ser escritos dessa forma:
"Primeiro módulo (Introdução ao Frontend)"
"Segundo módulo (Frontend Avançado)"
"Terceiro módulo (Introdução ao Backend)"
"Quarto módulo (Backend Avançado)"

## Login:POST /sessions
formato da requisição:
{
email
password
}
 resposta dando certo gera um token que vai ser armazenado no localStorage.
 
## Criação de tecnologia:POST /users/techs
formato da requisição:
{
title
status
}
O campo - "status" deve receber respectivamente os 3 níveis de habilidade:
"Iniciante"
"Intermediário"
"Avançado"
Não deve ser possivle criar novamente uma tecnologia com mesmo nome.

## Update da tecnologia:PUT /users/techs/:tech_id
Só pode ser dado update no status da tecnologia já criada.

## Criação de trabalhos: POST /users/works
formato da requisição:
{
title,
description,
deploy_url
}

## Update trabalhos:PUT /users/works/:work_id 
 É possivel atualizar o titulo, a descrição ou o deploy_url, qualquer uma das informações do respectivo trabalho.

## Update qualquer dado do usuário:PUT /profile
Nesse endpoint podemos atualizar qualquer dado do usuário, e a senha também, porém é necessário enviar a antiga senha no campo "old_password" caso o usuário queira atualizar a senha.

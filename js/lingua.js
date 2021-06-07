const languEl = document.querySelector('.idiomas');
const link = document.querySelectorAll('a');


let projetos = document.querySelector('#projetos');
let projetos1 = document.querySelector('#projetos1');
let projetos2 = document.querySelector('#projetos2');
let contato = document.querySelector('#contato');
let contato1 = document.querySelector('#contato1');
let contato2 = document.querySelector('#contato2');
let idiomas = document.querySelector('#idiomas');
let sobremim = document.querySelector('#sobremim');
let numero = document.querySelector('#numero');
let suamensagem = document.querySelector('#suamensagem');
let todososdireitos = document.querySelector('#todososdireitos');
let submit = document.querySelector('#submit');
let nome = document.querySelector('#nome');
let info2 = document.querySelector('#info2');
let endemail = document.querySelector('#endemail');
let textpanificadora = document.querySelector('#textpanificadora');
let texto2 = document.querySelector('#texto2');
let texto3 = document.querySelector('#texto3');
let visualizar1 = document.querySelector('#visualizar1');
let visualizar2 = document.querySelector('#visualizar2');
let visualizar3 = document.querySelector('#visualizar3');

link.forEach( el => {
    el.addEventListener('click',() => {
       
       

        const lingua = el.getAttribute('language');
        nome.textContent = data[lingua].nome;
        projetos.textContent = data[lingua].projetos;
        projetos1.textContent = data[lingua].projetos1;
        projetos2.textContent = data[lingua].projetos2;
        contato.textContent = data[lingua].contato;
        contato1.textContent = data[lingua].contato1;
        contato2.textContent = data[lingua].contato2;
        traducao.textContent = data[lingua].traducao;
        sobremim.textContent = data[lingua].sobremim;
        numero.textContent = data[lingua].numero;
        suamensagem.textContent = data[lingua].suamensagem;
        todososdireitos.textContent = data[lingua].todososdireitos;
        submit.textContent = data[lingua].submit;
        info2.textContent = data[lingua].info2;
        endemail.textContent = data[lingua].endemail;
        textpanificadora.textContent = data[lingua].textpanificadora;
        texto2.textContent = data[lingua].texto2;
        texto3.textContent = data[lingua].texto3;
        visualizar1.textContent = data[lingua].visualizar1;
        visualizar2.textContent = data[lingua].visualizar2;
        visualizar3.textContent = data[lingua].visualizar3;

        

    });
});

var data = {

    "portugues":{
        "nome":"Nome Completo",
        "projetos": "Projetos",
        "projetos1": "Projetos",
        "projetos2": "Projetos",
        "contato": "Contatos",
        "contato1": "Contatos",
        "contato2": "Contatos",
        "traducao": "Idiomas",
        "sobremim": "Sobre-mim",
        "nomecompleto": "Nome Completo",
        "numero": "Numero",
        "suamensagem": "Sua Mensagem",
        "todososdireitos":"Copyright © 2021 Diego Murilo Font-end Developer. Todos os direitos reservados.",
        "submit": "Enviar",
        "info2": "Informações",
        "endemail": "Endereço de E-mail",
        "textpanificadora": "Este projeto foi desemvolvido no 1º semestre da faculdade, onde aplicamos os primeiros conceitos de HTML, CSS e Javascript.",
        "texto2": "Este belo projeto foi desemvolvido no 2º semestre, este ano. Utilizamos Vue, Nuxt.js e Tailwind para o desemvolvimento do projeto.",
        "texto3": "Este belo projeto foi desemvolvido no 2º semestre, este ano. Utilizamos Vue, Nuxt.js e Tailwind para o desemvolvimento do projeto.",
        "visualizar1": "Visualizar",
        "visualizar2": "Visualizar",
        "visualizar3": "Visualizar",

     },
    "english":{
        "nome": "Name",
        "projetos": "Projects",
        "projetos1": "Projects",
        "projetos2": "Projects",
        "contato": "Contacts",
        "contato1": "Contacts",
        "contato2": "Contacts",
        "traducao": "Languages",
        "sobremim": "About me",
        "numero": "Number",
        "suamensagem": "Your message",
        "todososdireitos": "Copyright © 2021 Diego Murilo Font-end Developer. All rights reserved.",
        "submit": "Send",
        "info2": "Informaction",
        "endemail": "Email address",
        "textpanificadora": "This project was developed in the 1st semester of college, where we applied the first concepts of HTML, CSS and Javascript.",
        "texto2": "This beautiful project was developed in the 2nd semester this year. We use Vue, Nuxt.js and Tailwind to develop the project.",
        "texto3": "This beautiful project was developed in the 2nd semester this year. We use Vue, Nuxt.js and Tailwind to develop the project.",
        "visualizar1": "To view",
        "visualizar2": "To view",
        "visualizar3": "To view",

    }
}
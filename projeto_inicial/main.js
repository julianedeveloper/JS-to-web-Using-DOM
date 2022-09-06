import botaoConclui from "./componentes/concluirTarefa.js";
import BotaoDeleta from "./componentes/deletarTarefa.js";


    function criarTarefa(evento) {

    evento.preventDefault(); //here I stop the behavior default of the event form (that it's reload automatically)
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const tarefa = document.createElement('li');
    tarefa.classList.add('task'); //here I specify which class the new <li> will belong the new knot, the new child
    const conteudo = `<p class ="content">${valor}</p>`; //here I say to content receive 'valor' that comes from input


    //template string above, is to catch this field 'valor' on js and exhibit on html//
    //tarefa.innerHTML = conteudo; //here I say to exhibit the content received from user
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(botaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa); //here a declare that the new li will be a child from <ul> the parent. In DOM this is crucial.
    input.value = " ";
}
const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener ('click', criarTarefa);









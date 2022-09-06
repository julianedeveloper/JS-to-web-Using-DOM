const BotaoConclui = ()=>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Conluir';
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
    }

const concluirTarefa = (evento)=>{
    const botaoConclui = evento.target; //descubro qual elemento foi clicado
    const tarefaCompleta = botaoConclui.parentElement; //identifico o pai do elemento clicado
    tarefaCompleta.classList.toggle('done');

}

export default BotaoConclui;
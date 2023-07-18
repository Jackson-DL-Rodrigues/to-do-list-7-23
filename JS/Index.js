const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-task')

let minhaListadeItens = []

function AdicionarNovaTarefa() {
    minhaListadeItens.push({
        tarefa: input.value,
        concluida: false
    })

    MostrarTarefas()
}

function MostrarTarefas() {
    let NovaLi = ''


    minhaListadeItens.forEach((item, posicao) => {
        NovaLi = NovaLi + `
            <li class="task ${item.concluida && "done"}">
                <img src="./css/imagens/icons8-aceitar-50.png" alt="Tarefa Concluida" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="./css/imagens/icons8-rejeitar-50.png" alt=" Deletar Tarefa" onclick="deletarItem(${posicao})">
            </li>
            `
    })

    ListaCompleta.innerHTML = NovaLi

    localStorage.setItem('lista', JSON.stringify(minhaListadeItens))
}

function concluirTarefa(posicao){
    minhaListadeItens[posicao].concluida = !minhaListadeItens[posicao].concluida
    MostrarTarefas()
}


function deletarItem(posicao){
    minhaListadeItens.splice(posicao, 1)
    MostrarTarefas()
}

function RecarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista')
    if(tarefasLocalStorage){
    minhaListadeItens = JSON.parse(tarefasLocalStorage)
    }
    MostrarTarefas()
}

RecarregarTarefas()

button.addEventListener('click', AdicionarNovaTarefa)
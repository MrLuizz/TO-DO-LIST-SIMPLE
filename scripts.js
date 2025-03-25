const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listcompleta = document.querySelector('.list-tasks')
let minhalistadeitens = []



function adicionarnovatarefa() {
    minhalistadeitens.push({
        tarefa: input.value,
        concluida: false
    })


    input.value = ''

    mostrartarefas()
}
function mostrartarefas() {
    let novali = ''

    // ['comprar café', 'estudar programação']

    minhalistadeitens.forEach((item, posicao) => {
        novali = novali + `
    

    <li class="tasks ${item.concluida && "done"}">
        <img src="bi bi-check-circle-fill">" alt="check-na-tarefa" onclick= "concluirtarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="/img/trash.png" alt="tarefa-para-lixo" onclick="deletaritem(${posicao})">
    </li>

     `
    })


    listcompleta.innerHTML = novali


    localStorage.setItem('lista', JSON.stringify(minhalistadeitens))

}
function concluirtarefa(posicao) {
    minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida 


    mostrartarefas()


}

function deletaritem(posicao) {
    minhalistadeitens.splice(posicao, 1)

    mostrartarefas()
}

function recarregartarefas() {
    const tarefasdolocalstorage = localStorage.getItem('lista')

    if (tarefasdolocalstorage) {
        minhalistadeitens = JSON.parse(tarefasdolocalstorage)
    }
    
    mostrartarefas()
}

recarregartarefas()
button.addEventListener('click', adicionarnovatarefa)

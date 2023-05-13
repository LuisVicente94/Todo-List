$(document).ready(function(){
    
    // variavel que controla os IDs de cada TODO

    var listItemId = 1;

    // adicionar um todo novo

    $('#addTodo').on("click", function(){
    // Capturar o valor digitado no input

        var newTodo = $('#newTodo').val();

        if(newTodo == ''){
            alert('Please add to do item')
            return false

    // se não estiver vazio, adiciona todo nova

        }
        $('#TodoList').append(`
        <li id="li${listItemId}">
        <p class="todotext">${newTodo}</p>
        <button type="button" class="doneTodo" data-id="li${listItemId}"> <i class="ph ph-check"></i> </button>
        <button type="button" class="removeTodo" data-id="li${listItemId}"> <i class="ph ph-minus"></i> </button>
        </li>
        `)

    // incrementa a variavel dos ids

       listItemId ++


    // limpar e focar no input

        $('#newTodo').val('').focus()


        var todos = $('#TodoList').html();
        localStorage.setItem('nomeDaTabela', todos)
    
    })

 
    // marcar como completado

    $(document).on('click', ".doneTodo", function(){

    
    var completedItemId = "#" + $(this).attr('data-id') + " .todotext"

    $(completedItemId).toggleClass('lineThrough')

    var todos = $('#TodoList').html();
    localStorage.setItem('nomeDaTabela', todos)

})

    //Deletar TODO
    $(document).on('click', '.removeTodo', function(){

    var check = confirm('Are you sure want to delete this')


    //Verificar se o check é verdadeiro

    if(check){
    //remover o todo
    var removeItemId = "#" + $(this).attr('data-id')
    $(removeItemId).remove();
    }else
    {return false}
    

    //Atualizar o LocalStorage com o novo valor
    var todos = $('#TodoList').html();
    localStorage.setItem('nomeDaTabela', todos)

})




//buscar os itens do LocalStorage

//Verifica se existe a chave "nomeDaTabela"
if(localStorage.getItem('nomeDaTabela'))
//Se existir, ele captura a ul chamada todoList e insere um HTML através do.html(), os itens retornados do localStorage com o getItem('nomeDaTabela)
$('#todoList').html(localStore.getItem('nomeDaTabela'))

})
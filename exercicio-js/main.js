const form = document.getElementById('form-exercicio');
let message = document.getElementById('success-message');
message.style.display = 'none'

form.addEventListener('submit', function(e){
    e.preventDefault();
    let num1 = document.getElementById('first-number');
    let num2 = document.getElementById('second-number');
    const errorMessage = `[ERRO] Você não passou pelo puzzle! Tente novamente!`
    const successMessage = `O segundo número é maior que o primeiro! Você pode seguir!`

    if (num2.value > num1.value) {
        message.innerHTML = successMessage;
        message.style.display = 'block';

    }else{
        message.innerHTML = errorMessage
        message.style.backgroundColor = 'red';
        message.style.display = 'block';
    }
})
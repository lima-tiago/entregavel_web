document.querySelector('form').addEventListener('submit',function(evento){
    evento.preventDefault()

    
    alert('Obrigado pela sua opiniãi meu caro internauta!')
    this.reset()
    campos[0].focus()
    return false
})
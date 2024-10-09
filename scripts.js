const myObserver = new IntersectionObserver((informacoes)=>{
    informacoes.forEach( (informe)=>{
        if(informe.isIntersecting){
            informe.target.classList.add('Show')
        } else {
            informe.target.classList.remove('Show')
        }
    })
})
const elements = document.querySelectorAll('.Hidden')
elements.forEach((elements)=> myObserver.observe(elements))
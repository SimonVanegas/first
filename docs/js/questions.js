(function(){
  const titleQuestions = [...document.querySelectorAll('.questions__title')];

  //question seria el elemento h3, osea el titulo, y answer seria el siguiente osea parrafo o hermano (mismo nivel)
  titleQuestions.forEach(question =>{
    question.addEventListener('click', ()=>{
      let height = 0;
      let answer = question.nextElementSibling;
      let addPadding = question.parentElement.parentElement;

      addPadding.classList.toggle('questions__padding--add')
      //pa que rote la flecha
      question.children[0].classList.toggle('questions__arrow--rotate');

      if(answer.clientHeight === 0){
        height = answer.scrollHeight;//nos da el alto minimo para que un elemento se muestre
      }
      answer.style.height = `${height}px`;
    })
  });
})();
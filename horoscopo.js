let botaoEl = document.querySelector("#resultado");
let mensagemEl = document.querySelector("#mensagem");
function calcula(){

  let signoDaPessoaEl = document.querySelector("#signoP");
  let signoDoConsagradoEl = document.querySelector("#signoC");

  let p = signoDaPessoaEl.value;
  let c = signoDoConsagradoEl.value;
  let verifica = 0;

  if(p === 'aries' && c === 'leao'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'touro' && c === 'virgem'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'gemeos' && c === 'libra'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'cancer' && c === 'escorpiao'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'leao' && c === 'aries'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'virgem' && c === 'touro'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'libra' && c === 'gemeos'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'escorpiao' && c === 'cancer'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p == 'sagitario' && c === 'aries'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p ==='capricornio' && c === 'touro'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'aquario' && c === 'gemeos'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

  else if(p === 'peixes' && c === 'cancer'){
    mensagemEl.value = 'Match!!';
    verifica = 1;
  }

   else{
    mensagemEl.value = 'Sorry! No Match!'
  }

}

botaoEl.addEventListener('click',calcula);

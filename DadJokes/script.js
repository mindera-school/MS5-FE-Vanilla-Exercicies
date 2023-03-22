const piadas = [
    "Como se chama a neta do super Mário? -Marioneta",
    "Quem é o mais velho, o sol ou a lua? -A Lua, porque já pode sair à noite.",
    "Qual o nome do peixe que caiu do décimo andar? -Aaaaaaaaah, Tum!",
    "O que é que uma mãe feiticeira diz à filha feiticeira? -Não devias ter feito isso!",
    "O que diz um tomate para o outro? -Tu matas-me.",
    "O que diz o tubarão para a “tubaroa”? -Tu baralhas-me.",
    "Conheces a piada do iogurte? –É natural…",
    "Porque é que ninguém se perde na Polónia? -Porque há muitas “polacas” de sinalização.",
    "Sabem porque é que a pizza chora no funeral? -Porque é familiar.",
    "Porque é que as pombas não matam os outros animais? -Porque têm pena.",
    "Conheces o Mário???"
  ];
  
  const piadaElement = document.getElementById('piada');
  const botaoElement = document.getElementById('botao');
  
  botaoElement.addEventListener('click', () => {
    const piadaAleatoria = piadas[Math.floor(Math.random() * piadas.length)];
    piadaElement.innerHTML = piadaAleatoria;
  });
  
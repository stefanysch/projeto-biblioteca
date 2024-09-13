function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var produto = getParameterByName('produto');

document.getElementById("resumoLivro").hidden = false;
switch (produto){
  case "O Corvo": document.getElementById("imagemLivro").src = "../images/livro (1).png";
    document.getElementById("resumoLivro").textContent = "“O Corvo” é um poema narrativo de Edgar Allan Poe, publicado pela primeira vez em 1845. A história é contada por um narrador solitário que está sofrendo com a perda de sua amada Lenore. Em uma noite sombria de dezembro, ele é visitado por um corvo misterioso que entra em seu quarto e pousa em um busto de Palas Atena";
    document.getElementById("tituloLeitura").textContent = "O Corvo";
  break;
  case "Extraoridinário": document.getElementById("imagemLivro").src = "../images/livro (2).png";
    document.getElementById("resumoLivro").textContent = "O livro “Extraordinário” de R.J. Palacio conta a história de August Pullman, um menino de 10 anos que nasceu com uma deformidade facial. Com uma narrativa emocionante e inspiradora, o livro aborda temas como aceitação, amizade e superação. A história se desenrola a partir do momento em que August decide ir para a escola pela primeira vez.Ele enfrenta diversos desafios ao lidar com o preconceito e o bullying por causa de sua aparência, mas também encontra apoio e amizade verdadeira.";
    document.getElementById("tituloLeitura").textContent = "Extraordinário";
      
  break;
  case "O menino do pijama listrado": document.getElementById("imagemLivro").src = "../images/livro (3).png";
    document.getElementById("resumoLivro").textContent = "O Menino do Pijama Listrado é um livro escrito por John Boyne que se passa durante a Segunda Guerra Mundial. A história é contada do ponto de vista de Bruno, um menino de nove anos, filho de um oficial nazista. Quando seu pai é promovido, a família se muda para uma casa próxima a um campo de concentração.";
    document.getElementById("tituloLeitura").textContent = "O Menino do Pijama Listrado";
    break;
  case "O pequeno príncipe": document.getElementById("imagemLivro").src = "../images/livro (4).png";
    document.getElementById("resumoLivro").textContent = "O Pequeno Príncipe é um livro da literatura infantil europeia que narra a história de um menino originário do asteroide B 6121. Após a queda de um avião no deserto do Saara, o piloto faz amizade com essa sábia criança, que consegue ver o que os adultos são incapazes. A obra ultrapassa a classe de narrativa lúdica e infantil para ser um marco Ocidental quando tratamos de análise e crítica social, psicanálise e autoconhecimento. O livro é mágico, sensível, comovente, às vezes triste, e só aparentemente infantil.";
    document.getElementById("tituloLeitura").textContent = "O Pequeno Príncipe";
      
  break;
  case "O meu pé de laranja lima": document.getElementById("imagemLivro").src = "../images/livro (5).png";
    document.getElementById("resumoLivro").textContent = "Um clássico da literatura brasileira, com adaptações para a televisão, o cinema e o teatro, O Meu Pé de Laranja Lima é desses livros que marcam época. Lançado em 1968, trata-se de uma história fortemente autobiográfica, que demonstra a mão de um escritor experiente, ciente do efeito que pode provocar nos leitores com suas cenas e a composição de seus personagens. O protagonista Zezé tem 6 anos e mora num bairro modesto, na zona norte do Rio de Janeiro. O pai está desempregado, e a família passa por dificuldades. O menino vive aprontando, sem jamais se conformar com as limitações que o mundo lhe impõe – viaja com sua imaginação, brinca, explora, descobre, responde aos adultos, mete-se em confusões, causa pequenos desastres.";
    document.getElementById("tituloLeitura").textContent = "O Meu Pé de Laranja Lima";
  break;
  case "O menino maluquinho": document.getElementById("imagemLivro").src = "../images/livro (6).png";
    document.getElementById("resumoLivro").textContent = "Um menininho traquinas, diziam. Tinha macaquinhos no sótão, deitava e rolava, fazendo confusão. Um anjinho, um saci? Alegria da casa, liderava a garotada. Namorador, fazia versinhos, compunha canções, inventava brincadeiras. Era sabido, um amigão. “Menino Maluquinho”, diziam sorrindo as pessoas. Não era, não! Só mais tarde descobriram que tinha sido um garotinho muito amado e, por isso mesmo, muito feliz.";
    document.getElementById("tituloLeitura").textContent = "O Menino Maluquinho";
  break;
  case "Memórias póstumas de Brás Cubas": document.getElementById("imagemLivro").src = "../images/livro (7).png";
    document.getElementById("resumoLivro").textContent = "Em 1881, Machado de Assis lançou aquele que seria um divisor de águas não só em sua obra, mas na literatura brasileira: Memórias póstumas de Brás Cubas . Ao mesmo tempo em que marca a fase mais madura do autor, o livro é considerado a transição do romantismo para o realismo. Num primeiro momento, a prosa fragmentária e livre de Memórias póstumas , misturando elegância e abuso, refinamento e humor negro, causou estranheza, inclusive entre a crítica. Com o tempo, no entanto, o defunto autor que dedica sua obra ao verme que primeiro roeu as frias carnes de seu cadáver tornou-se um dos personagens mais populares da nossa literatura.";
    document.getElementById("tituloLeitura").textContent = "Memórias póstumas de Brás Cubas";
  break;
  case "Mr Mercedes": document.getElementById("imagemLivro").src = "../images/livro (8).jpg";
    document.getElementById("resumoLivro").textContent = "Ainda é madrugada e, em uma falida cidade do Meio-Oeste, centenas de pessoas fazem fila em uma feira de empregos, desesperadas para conseguir trabalho. De repente, um único carro surge, avançando para a multidão. O Mercedes atropela vários inocentes, antes de recuar e fazer outra investida. Oito pessoas são mortas e várias ficam feridas. O assassino escapa. Meses depois, o detetive Bill Hodges ainda é atormentado pelo fracasso na resolução do caso, e passa os dias em frente à TV, contemplando a ideia de se matar. Ao receber uma carta de alguém que se autodenomina o Assassino do Mercedes, Hodges desperta da aposentadoria deprimida, decidido a encontrar o culpado. Mr. Mercedes narra uma guerra entre o bem e o mal, e o mergulho de Stephen King na mente obsessiva e psicótica desse assassino é tão arrepiante quanto inesquecível.";
    document.getElementById("tituloLeitura").textContent = "Mr Mercedes";
  break;
  case "The Witcher": document.getElementById("imagemLivro").src = "../images/livro (9).jpg";
    document.getElementById("resumoLivro").textContent = "Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava. Um mundo em que nem todos os que parecem monstros são maus e nem todos os que parecem anjos são bons...";
    document.getElementById("tituloLeitura").textContent = "The Witcher";
  break;
  case "Alice no País das Maravilhas": document.getElementById("imagemLivro").src = "../images/livro (12).jpg";
    document.getElementById("resumoLivro").textContent = "Uma menina, um coelho e uma história capazes de fazer qualquer um de nós voltar a sonhar. Alice é despertada de um leve sono ao pé de uma árvore por um coelho peculiar. Uma criatura alva e falante com roupas engraçadas, que consulta seu relógio e reclama do próprio atraso. Curiosa como toda criança, Alice segue o animal até cair em um buraco sem fim que mudou para sempre a literatura infantil. Mais de 150 anos depois, Alice no País das Maravilhas continua repleto de ensinamentos para aqueles que ousaram seguir o Coelho Branco até sua toca.";
    document.getElementById("tituloLeitura").textContent = "Alice no País das Maravilhas";
  break;
  case "1984": document.getElementById("imagemLivro").src = "../images/livro (13).jpg";
    document.getElementById("resumoLivro").textContent = "Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário.";
    document.getElementById("tituloLeitura").textContent = "1984";
  break;
  case "O Sanatório": document.getElementById("imagemLivro").src = "../images/livro (14).jpg";
    document.getElementById("resumoLivro").textContent = "Um resort isolado no alto dos Alpes Suíços é o último lugar em que Elin Warner gostaria de estar. Mas ao receber o convite inesperado para comemorar o noivado do irmão, Isaac, a quem não vê há anos, ela sente que o melhor que pode fazer é aceitar. Assim que chega, em meio a uma forte nevasca, Elin é imediatamente acometida por uma onda de tensão. Além do relacionamento estremecido com Isaac, algo no hotel a deixa nervosa. Antes um sanatório abandonado, o lugar tem um passado sinistro, que só alimenta o clima macabro que o permeia. Quando eles acordam na manhã seguinte e descobrem que Laure, a noiva do irmão, desapareceu sem deixar vestígios, a inquietação de Elin aumenta. Em pouco tempo, a tempestade impede qualquer um de chegar ou sair do hotel, e quanto mais tempo Laure permanece desaparecida e situações estranhas acontecem, mais o pânico se instaura entre os hóspedes e os funcionários confinados no lugar. Para piorar, ninguém notou ainda o desaparecimento de outra mulher. E ela é a única que poderia tê-los alertado sobre as ameaças à espreita. Agora, todos estão em perigo. E qualquer um pode ser a próxima vítima.";
    document.getElementById("tituloLeitura").textContent = "O Sanatório";
  break;
  case "A Sombra do Vento": document.getElementById("imagemLivro").src = "../images/livro (15).jpg";
    document.getElementById("resumoLivro").textContent = "Barcelona, 1945. Daniel Sempere acorda na noite de seu aniversário de onze anos e percebe que já não se lembra do rosto da falecida mãe. Para consolá-lo, o pai leva o menino pela primeira vez ao Cemitério dos Livros Esquecidos. É lá que Daniel descobre A sombra do vento, romance escrito por Julián Carax, que logo se torna seu autor favorito, sua obsessão. No entanto, quando começa a buscar outras obras do escritor, Daniel descobre que alguém anda destruindo sistematicamente todos os exemplares de todos os livros que Carax já publicou, e que o que tem nas mãos pode muito bem ser o último volume sobrevivente. Junto com seu amigo Fermín, Daniel percorre a cidade, adentrando as ruelas e os segredos mais obscuros de Barcelona. Anos se passam e sua investigação inocente se transforma em uma trama de mistério, magia, loucura e assassinato. E o destino de seu autor favorito de repente parece intimamente conectado ao dele.";
    document.getElementById("tituloLeitura").textContent = "A Sombra do Vento";
  break;
  case "Factótum": document.getElementById("imagemLivro").src = "../images/livro (16).jpg";
    document.getElementById("resumoLivro").textContent =  "Factótum narra a história de Henry Chinaski, um alter ego de Bukowski, em sua busca por emprego e significado na sociedade. A narrativa é repleta de humor ácido ? e observações perspicazes sobre a natureza humana e a alienação no mundo do trabalho."
    document.getElementById("tituloLeitura").textContent = "Factótum";
  break;
  case "Dom Casmurro": document.getElementById("imagemLivro").src = "../images/livro (17).jpg";
    document.getElementById("resumoLivro").textContent = "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.";
    document.getElementById("tituloLeitura").textContent = "Dom Casmurro";
  break;
  case "Rangers": document.getElementById("imagemLivro").src = "../images/livro (18).jpg";
    document.getElementById("resumoLivro").textContent = "Rangers narra a empolgante jornada de Will, um aprendiz destemido, que descobre o poder extraordinário das habilidades de arqueiro. Cada livro da série é uma exploração fascinante de coragem, amizade e determinação, em um mundo repleto de desafios e magia. O autor, com mais de 15 milhões de livros vendidos, cria um universo rico e envolvente que captura a imaginação dos leitores, transportando-os para um mundo onde cada escolha e cada flecha lançada pode mudar o destino de reinos inteiros.";
    document.getElementById("tituloLeitura").textContent = "Rangers";
  break;
  case "A Máscara": document.getElementById("imagemLivro").src = "../images/poema 1.png";
    document.getElementById("resumoLivro").hidden = true;
    document.getElementById("tituloLeitura").textContent = "A Máscara";
  break;
  case "Soneto de Fidelidade": document.getElementById("imagemLivro").src = "../images/poema 2.png";
      document.getElementById("resumoLivro").hidden = true;
      document.getElementById("tituloLeitura").textContent = "A Máscara";
  break;
  case "Soneto de Fidelidade": document.getElementById("imagemLivro").src = "../images/poema 2.png";
    document.getElementById("resumoLivro").hidden = true;
    document.getElementById("tituloLeitura").textContent = "Soneto de Fidelidade";
  break;
  case "Leilão de Jardim": document.getElementById("imagemLivro").src = "../images/poema 3.png";
    document.getElementById("resumoLivro").hidden = true;
    document.getElementById("tituloLeitura").textContent = "Leilão de Jardim";
  break;
  case "Proposta": document.getElementById("imagemLivro").src = "../images/poema 4.png";
    document.getElementById("resumoLivro").hidden = true;
    document.getElementById("tituloLeitura").textContent = "Proposta";
  break;
  case "Quadrilha": document.getElementById("imagemLivro").src = "../images/poema 5.png";
    document.getElementById("resumoLivro").hidden = true;
    document.getElementById("tituloLeitura").textContent = "Quadrilha";
  break;
  case "Tudo Repousa no Silêncio": document.getElementById("imagemLivro").src = "../images/poema 6.png";
    document.getElementById("resumoLivro").hidden = true;
    document.getElementById("tituloLeitura").textContent = "Quadrilha";
  break;
  case "Aceite Senhora": document.getElementById("imagemLivro").src = "../images/poema 7.jpg";
    document.getElementById("resumoLivro").hidden = true;
    document.getElementById("tituloLeitura").textContent = "Aceite Senhora";
  break;
    case "Lábaro das Estrelas": document.getElementById("imagemLivro").src = "../images/poema 8.jpg";
      document.getElementById("resumoLivro").hidden = true;
      document.getElementById("tituloLeitura").textContent = "Lábaro das Estrelas";
    break;
  }


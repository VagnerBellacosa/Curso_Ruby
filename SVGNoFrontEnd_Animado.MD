# SVG 

## Começando com SVG no Front-End - Parte 3 - Animações com mo.js (Motion Graphics)
##### Akira Hanashiro

Aprenda a criar animações incríveis e interativas de forma bem simples para a web utilizando o mo.js

## O que é mo.js?

mo.js é uma biblioteca JavaScript para criar belas animações com ótima performance com uma API bem simples. Podemos animar elementos HTML, mas sua principal função é animar elementos SVG. No exemplo abaixo podemos ver o poder desta biblioteca, tudo feito com SVG e utilizando apenas o mo.js.

## Iniciando com mo.js

### Instalação

Primeiro é preciso inserir a biblioteca do mo.js no seu projeto. Você pode adicionar com 

~~~
<script src="https://cdn.jsdelivr.net/npm/@mojs/core"></script> 
~~~

ou instalando com o npm executando npm i @mojs/core e importando com import mojs from '@mojs/core.

### Criando Formas

Vamos começar criando um círculo (circle). Para isso utilizamos o método .Shape(), para o qual passamos um objeto com algumas configurações.

~~~
new mojs.Shape({
	shape: 'circle',
	fill:  '#F64040',
  	radius: 20,
  	isShowStart: true,
})
~~~

Há outras formas como rect, polygon, line, cross, equal, curve e zigzag. Também podemos criar nossa própria forma com SVG e registrar com o nome que quisermos, nos permitindo animá-la.

O código acima terá o seguinte resultado:

Vamos entender o que passamos para o método .Shape():

- shape indica a forma que queremos criar. Pode ser uma das já existentes ou o nome de uma forma que nós registramos com nosso próprio SVG.
	- fill indica a cor de preenchimento do elemento, assim como vimos nos posts anteriores. Então você pode usar aqui outras propriedades do SVG, como stroke, strokeWidth, etc
	- radius é usado para indicar o raio da forma
	- isShowStart indica se a forma deve iniciar visível na tela, pois você pode querer que a forma apenas seja exibida quando a animação iniciar

No exemplo que fizemos, o círculo foi criado e injetado no corpo da nossa página, mas provavelmente você vai querer ter controle sobre onde nossa forma será inserida. Para isso basta adicionar ao objeto de configuração a propriedade parent. Você pode passar o seletor do elemento que receberá a forma, como “#meu-id”, ou passar o próprio elemento HTML.

## Animando Formas

Quando executamos o método .Shape() teremos como retorno um objeto com as configurações que criamos e métodos que podemos usar para executar a animação. Então vamos salvar esse retorno:

~~~
const animation = new mojs.Shape({
	...
~~~

Para iniciar a animação basta executar o método .start() do retorno que salvamos em animation. Então vamos criar um botão para executarmos a animação quando quisermos.

~~~
<button onclick="startAnimation()" >Iniciar</button>
~~~

~~~
function startAnimation(){
	animation.start();
}
~~~

Obviamente que não acontecerá nada, pois nós ainda não indicamos quais propriedades queremos animar. Para animar uma propriedade nós passamos um objeto, onde a chave será o valor inicial e o valor será o valor final.

Pense como exemplo a propriedade radius, que indicamos o valor inicial como 20. Se quisermos animar esta propriedade, precisamos mudar o 20 para um objeto. Vamos fazer algumas alterações e depois entender o que foi feito:

~~~
const animation = new mojs.Shape({
  shape: 'circle',
  fill: {
    '#F64040': '#FC46AD'
  },
  radius: {
    20: 80
  },
  duration: 2000,
  isYoyo: true,
  isShowStart: true,
  easing: 'elastic.inout',
  repeat: 1,
})
~~~

Mudamos o valor de fill de apenas #F64040 para um objeto que possui como chave #F64040 e #FC46AD como valor. Isso fará a animação iniciar com o valor da chave e ir para o valor de #FC46AD.

O mesmo fizemos com o radius, fazendo com que na animação ele vá de 20 para 80.

Adicionamos a propriedade duration, indicando que queremos uma animação com duração de 2 segundos (2000 milisegundos).

Também adicionamos outras propriedades que podem ajudar a deixar a animação interessante: isYoyo indica se queremos que a animação, ao chegar ao final, faça o caminho inverso, voltando ao estado inicial. easing nos permite indicar uma função de animação e repeat indica quantas vezes queremos que a animação seja repetida.

Dentro do objeto de configuração também podemos passar funções que serão executadas a cada momento da animação, como onProgress, onStart, onFirstUpdate, onUpdate, onComplete, etc, nos possibilitando ter mais controle da animação.

## Burst

Também temos outras funcionalidades que nos facilitam a criação de animações mais complexas. O Burst nos ajuda a criar um efeito parecido com uma explosão, como no exemplo abaixo:

Para conseguir esse resultado, primeiro vamos mudar o .Shape para .Burst e mudar um pouco as nossas configurações:

~~~
const animation = new mojs.Burst({
  radius: { 0: 100 },
  count: 5,
  angle: { 360: 0 },
  children: {
    shape: 'circle',
    fill: { '#F64040': '#FC46AD' },
    radius: { 20: 80 },
    duration: 2000
  }
})
~~~

Veja que as propriedades relacionadas à nossa forma circle foram para dentro de um campo children. Agora ele é um elemento filho da nossa animação.

Na parte de fora nós configuramos a explosão. radius do lado de fora indica o tamanho do elemento da explosão, enquanto o radius dentro de children está indicando o raio de cada um dos círculos.

Usamos angle para girar o nosso elemento, e count nos permite indicar quantos círculos nós queremos.

Esta foi uma introdução bem simples ao mo.js. Brinque com suas propriedades e veja exemplos que há no site da biblioteca para ter ideias. Compartilhe aí nos comentários com a gente a sua criação.

[Artigo original](https://www.treinaweb.com.br/blog/comecando-com-svg-no-front-end-parte-3-animacoes-com-mo-js-motion-graphics) 
# SVG

## O que é SVG?
##### Akira Hanashiro

O nome SVG vem de Scalable Vector Graphics (Gráficos Vetoriais Escaláveis). Ele é basicamente um formato de imagem vetorial suportado pelos navegadores e que pode ser animado/modificado por CSS e JavaScript. Para saber mais sobre imagens vetoriais e a diferença em relação às imagens comuns, dê uma olhadinha no nosso post sobre O que são imagens vetoriais?.

## Quais as vantagens do SVG?
O SVG possui várias vantagens, como:


- podem ser animados por CSS e modificados por JavaScript
- por serem imagens vetoriais, você pode alterar o tamanho livremente sem perda de qualidade da imagem
- podem ser embutidos no HTML, diminuindo a quantidade de requisições
- você não precisa de um super editor de imagens para trabalhar com SVG. Algumas coisas simples você pode editar com o seu próprio editor de código ou usar até mesmo um programa gratuito online
- possui várias funcionalidades que ainda são impossíveis ou muito complexas de se fazer com HTML e CSS, nos permitindo criar formas e efeitos mais complexos para nossas páginas web
- como pode ser integrado com CSS, podemos usar Media Queries para criar imagens responsivas

## Começando com SVG

Não precisamos de editor de imagem para começar com SVG. Você pode usar o mesmo programa que usa para escrever seu HTML.

Podemos criar uma imagem SVG em um arquivo .svg e depois chamar em nosso HTML usando a tag <img>, mas também pode-se, dentro do seu próprio HTML, criar uma tag <svg> e começar a escrever o código dentro dele.

Vamos começar a declarar um retângulo. Para isso usamos o elemento <rect>.

~~~
<svg>
	 <rect width="200" height="100"  fill="red" x="10" y="30" stroke="green" stroke-width="5" ></rect>
</svg>
~~~

## Vamos entender o que fizemos:

- <rect> declara que queremos criar um retângulo
	- width e height servem para declararmos a largura e altura do elemento
	- fill serve para declararmos a cor do preenchimento do elemento
	- x e y servem para indicarmos a posição do elemento
	- stroke nos permite declarar a cor da linha de contorno do elemento
	- stroke-width declara a grossura da linha de contorno do elemento

Outro elemento muito comum é o <circle>, que serve para criar um círculo.

~~~
<svg>
	<circle r="30" cx="50" cy="40" fill="blue" stroke="orange" stroke-width="5" ></circle>
</svg>
~~~

Vamos entender o que fizemos:

- <circle> declara que queremos criar um círculo- 
	- r indica o raio do círculo, então é por aqui que indicamos o tamanho
	- ao invés de posicionarmos o círculo com x e y, são usadas as propriedades cx e cy
	- Há outros elementos também como line, polyline, polygon, path e text.
	
## SVG com CSS e JavaScript

Como dito anteriormente, o SVG pode facilmente ser integrado com CSS e JavaScript, permitindo que a gente o controle como quisermos.

Como exemplo, vamos criar um outro círculo, mas ao invés de escrever as propriedades diretamente na tag <circle>, vamos adicionar uma classe CSS e escrever essas propriedades no CSS.

~~~
<svg>
  <circle class="meu-circulo" ></circle>
</svg>
~~~

~~~
.meu-circulo{
  r: 30;
  cx: 50;
  cy: 40;
  fill: lightgreen;
  stroke: orange;
  stroke-width: 5;
}
~~~

Lembre-se que podemos fazer animações com CSS. Vamos criar uma transição simples para quando passarmos a seta do mouse por cima do círculo, mudando sua posição e cores:

~~~
.meu-circulo{
  r: 30;
  cx: 50;
  cy: 40;
  fill: lightgreen;
  stroke: orange;
  stroke-width: 5;
  transition: all 1s ease;
}

.meu-circulo:hover{
  cx: 70;
  fill: green;
  stroke-width: 10;
}
~~~

Também podemos integrar com JavaScript. Vamos pegar esse <circle> e criar uma função que aumente o r dele ao clicarmos:

~~~
const circle = document.querySelector('.meu-circulo');
let r = 30;

circle.addEventListener('click', () => {
	r += 10;
	circle.style.r = r;
})
~~~

É importante saber que só podemos integrar o SVG com CSS e JavaScript se ele estiver no corpo do HTML, como fizemos. Se você chamar uma imagem SVG com a tag <img> não dará certo.

No próximo post veremos como começar a trabalhar com o Inkscape, um software gratuito para a criação de imagens vetoriais que utiliza o SVG como formato de arquivo.

[Artigo original](https://www.treinaweb.com.br/blog/comecando-com-svg-no-front-end-parte-1)
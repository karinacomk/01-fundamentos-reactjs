# Nova trilha de React JS

```jsx
npm create vite@latest
npm run dev
npm audit fix
```

- [x] CSS modules
  - [x] usar className
  - [x] para evitar q estilos afetem outros componentes, pode se usar o mesmo className
  - [x] Atalhos: `alt+0` zoom default
  - [x] ‣
- [x] sidebar
  - [x] 1 rem = 16px, se tem 32 px, então 2 rem
  - [x] `npm audit fix`
- [x] post
  - [x] primeiro: o q vou precisar de html para mostrar isso em tela?
  - [x] segundo: css
  - [x] terceiro: funcionamento
  - [x] tecla `win` pra selecionar várias linhas ao mesmo tempo
- [x] estilizações do post
- [x] comment
  - [x] reload window→ recarrega tudo no VC code
- [x] estilizações do comentário (fim da parte estrutural = html css)

## Os motores do React

- [x] iterando no jsx
  - [x] foreach não tem retorno
- [x] propriedades do post
- [x] useState
  - [x] estado são variáveis que eu quero que o componente monitore
- [x] inserindo comentários
<aside>
event.target vai trazer qual é o component que está chamando aquele método
event.target.comment acessa o conteúdo do componente cujo name é comment
event.target.comment.value pega o valor contido no componente
</aside>

# programacao imperativa

o que deve ser feito (passo-a-passo)

## receita de bolo

1. ligar o forno
2. abrir a porta do forno
3. colocar a massa numa forma

event.target.comment.value = ' '
isso é imperativo

devemos evitar a imperativa

# programacao declarativa

só declaro o resultado q eu espero e não o passo-a-passo
quais as condições para o resultado final

## receita de bolo

1. o forno precisa estar a 180 graus
2. quando o forno estiver quente, eu posso colocar a massa para assar
3. quando a massa estiver pronta, eu posso retirar ela do forno

# Entendendo a key

a key serve para comparar os itens de uma lista renderizada e não precisar renderizar tudo novamente, ajuda a entender o que já estava em tela e o que não estava.
a key não é exposta, a não ser com a extensão reactDevTools (aba components e profiler no devtools) dá pra ver a key.

3 momentos que a tela é renderizada:

1. quando o estado altera tudo é executado novamente
2. quando a propriedade altera
3. quando o componente pai renderiza novamente

pq não usar o index do map como key? E nem números aleatórios?
vamos supor que alteramos a ordem de valores de um array, o
indice continuará o mesmo, mas o React vai achar que mudou e vai renderizar tudo de novo.

# Comunicação entre componentes

HANDLE colocar esse prefixo no nome do método de um botão clicado pelo usuário é uma boa prática.
comunicar um componente com o outro é SEMPRE através das propriedades (passar a função como propriedade).
componente filho chama função que está no componente pai.
boa prática: começar o nome da propriedade com o prefixo ON no componente filho.

# Removendo comentários (imutabilidade)

setComments() não recebe o comentário que quer se removido ou adicionado, ela recebe a lista de comentários atualizada, o que chamamos de imutabilidade. As coisas não sofrem mutação. Não alteramos o valor da variável, criamos um novo espaço na memória, ao chamar setComments() estamos fazendo isso.

Pq? Imutabilidade traz performance já que React faz muitas comparações, comparar valor assim é mais rápido.

Criar uma nova lista sem o comentário que se deseja remover é a solução. Não se altera um informação, se cria uma nova informação.

# Validando formulário

console.log(event)
no console em Target vai mostrar qual é o elemento (textarea)
em prototype vai mostrar os método, em setCustomValidity() vai mostra a mensagem

# Realizando likes nos comentários

handleLikecomment x handleLikecomment():
handleLikecomment é uma função
handleLikecomment() é a execução de uma função, aqui ele não espera o click acontecer e aí dá erro, não pode
outra opção é criar um arrow função
por legibilidade, criar a função é melhor.

# Entendendo closures no React

setLikeComment()
setLikeComment()

chamar várias x não vai fazer o like ser o dobro, porque é o mesmo contexto.

como solucionar isso?
state devolve o valor mais atual

sempre q for atualizar uma info e ela depende do valor anterior (dela mesmo) é melhor usar esse padrão de função. Por ex, pra atualizar likes, eu preciso do valor anterior de likes:

```js
setLikeCount((state) => {
  return state + 1;
});
```

# Fundamentos do TypeScript

https://www.typescriptlang.org/

typescript é um super set = conjunto ferramental para adicionar tipagem estática
na barra inferior do vscode tem a opção de selecionar a linguagem
melhor User[] do que Array<User>
inferência de tipos: quando o ts entende automaticamente o tipo

# TypeScript no React

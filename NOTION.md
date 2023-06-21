# Nova trilha de React JS

```jsx
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

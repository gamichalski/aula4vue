const buttonNovoItem = document.getElementById('novo_item')
const buttonRemoverUltimoItem = document.getElementById('remover_ultimo_item')

const divPosts = document.getElementById('posts')

const posts = [{ autor: 'Autor 1', mensagem: 'Mensagem 1' }]

const createPost = (autor, mensagem) => {
  let divCard = document.createElement('div');
  divCard.className = "card"
  divCard.innerHTML = `
    <div class="card-content">
      <p class="title">
        ${autor}
      </p>
      <p class="subtitle">
        ${mensagem}
      </p>
    </div>`
  return divCard;
}

const render = () => {
  divPosts.innerHTML = '';
  posts.forEach(({ autor, mensagem }) => {
    const post = createPost(autor, mensagem)
    divPosts.append(post)
  })
}

buttonNovoItem.onclick = () => {
  const autor = document.getElementById('autor').value
  const mensagem = document.getElementById('mensagem').value

  posts.push({ autor, mensagem })
  render();
}

buttonRemoverUltimoItem.onclick = () => {
  posts.pop()
  render()
}

render()
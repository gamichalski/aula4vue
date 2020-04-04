const buttonNovoItem = document.getElementById('novo_item')
const divPosts = document.getElementById('posts')

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

buttonNovoItem.onclick = () => {
  const autor = document.getElementById('autor').value
  const mensagem = document.getElementById('mensagem').value
  const divPost = createPost(autor, mensagem)

  divPosts.append(divPost);
}
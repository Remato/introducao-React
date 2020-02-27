import React, { Component} from 'react';
import '../styles/postlist.css';
import Post from './Post.js'

class PostList extends Component{

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Renato Barboza',
          avatar: 'https://avatars3.githubusercontent.com/u/8043534?s=460&v=4',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar:
                'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
            },
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Alexei Abianna',
          avatar:
            'https://avatars0.githubusercontent.com/u/48830898?s=460&v=4',
        },
        date: '04 Jun 2019',
        content: `Fala galera, beleza?
        
Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar:
                'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=closeup-photo-of-woman-with-brown-coat-and-gray-top-733872.jpg&fm=jpg',
            },
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            id: 2,
            author: {
              name: 'Andressa Gaspar',
              avatar:
                'https://avatars3.githubusercontent.com/u/40497345?s=400&v=4',
            },
            content:
              'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Renato Barboza',
          avatar: 'https://avatars3.githubusercontent.com/u/8043534?s=460&v=4',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  };


  render(){
    const { posts } = this.state;
    return (
        <div className="Postlist">
          {posts.map(post => (<Post key={post.id} data={post}/>))}
        </div>
    );
  };
}
export default PostList;
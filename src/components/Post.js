import React from 'react'
import Comment from './Comment.js';
import '../styles/post.css';


function Post({ data }){
  return(
    <div id={data.id} className="Post" >
      <div className="AuthorContent">
        <div>
          <img className="Avatar"src={data.author.avatar}></img>
          <li>
            <span className="Author">{data.author.name}</span>
            <span className="Date">{data.date}</span>
          </li>
        </div>
        <span className="AuthorText">{data.content}</span>
      </div>
      <hr/> 
      <ul className="CommentList">
        {data.comments.map(c => <Comment key={c.id} data={c}/>)}
      </ul>
    </div>
    
  );
}

export default Post;
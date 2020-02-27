import React from 'react';
import '../styles/comment.css'

function Comment({ data }){
  return(
    <div className="Comment">
      <img className="Avatar"src={data.author.avatar}></img>
      <div>
        <span className="Author">{data.author.name}</span>
        <span className="CommentText">{data.content}</span>
      </div>
    </div>  
  );
}

export default Comment;
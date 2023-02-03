import React from "react";

interface Props {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const Card: React.FC<Props> = ({post}) => {
    return (
        <div className="card">
            <div className="cardHeader">
                <h2>{post.title}</h2>
              
            </div>
            <hr></hr>
            <p>id: {post.id}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Card;

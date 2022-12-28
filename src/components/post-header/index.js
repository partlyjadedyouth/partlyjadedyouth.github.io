import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostHeader({ post, viewCount }) {
  return (
    <header className="post-header">
      <div className="info">
        <div className="categories">
          Category | &nbsp;
          {post.categories.map((category) => (
            <Link className="category" key={category} to={`/posts/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </div>

      <h1 className="title">{post.title}</h1>
      <div className="info">
        {post.date}
        {viewCount && ` · ${viewCount} views`}
      </div>
    </header>
  );
}
export default PostHeader;

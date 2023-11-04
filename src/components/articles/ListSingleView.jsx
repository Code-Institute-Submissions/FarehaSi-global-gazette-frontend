import React from 'react';

const ListSingleView = ({ author, title, snippet, date, likes, shares, tags, thumbnail }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h6>{author}</h6>
          <h2>{title}</h2>
          <p>{snippet}</p>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span>{date}</span>
            <div>
              <span className="mr-3">❤️ {likes}</span>
              <span>🔄 {shares}</span>
            </div>
          </div>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge badge-primary mr-1">{tag}</span>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <img src={thumbnail} alt={title} className="img-thumbnail" style={{ width: '100%', maxWidth: '200px', height: 'auto' }} />
        </div>
      </div>
    </div>
  )
}

export default ListSingleView;

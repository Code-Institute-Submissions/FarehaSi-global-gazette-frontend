import React, { useState } from 'react'
import apiFetch from '../../utils/api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Notification from '../../components/Profile/Notification';

const CreateNewArticle = () => {
    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: '', type: '' });

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    tags.forEach(tag => formData.append('tags', tag));
    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }
    try {
        await apiFetch('/articles/', {
          method: 'POST',
          body: formData
        });
        setNotification({ message: 'Article created successfully!', type: 'success' });
      } catch (error) {
        console.error(error);
      }
    };
  return (
        <div className="container mt-5">
      <form onSubmit={handleSubmit}>
      <Notification message={notification.message} type={notification.type} />
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            value={tags.join(',')}
            onChange={e => setTags(e.target.value.split(','))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            type="file"
            className="form-control-file"
            id="thumbnail"
            onChange={e => setThumbnail(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreateNewArticle
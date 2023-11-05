import React from 'react';
import './Slideover.css';

const Slideover = ({ isOpen, onClose, children }) => {
  return (
    <div className={`slideover-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`slideover-content py-5 ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  )
}

export default Slideover
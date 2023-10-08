import React from 'react';

const CommitModal = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
        <h3>Commit Details</h3>
  
        <button >Close</button>
      </div>
    </div>
  );
};
export default CommitModal;
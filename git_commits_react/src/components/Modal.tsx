import React from 'react';
import { Commit } from '../types/Commit';


type CommitModalProps = {
  isOpen: boolean;
  onClose: () => void;
  commit: Commit;
};

const CommitModal: React.FC<CommitModalProps> = ({ isOpen, onClose, commit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity ease-out duration-300 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`bg-white p-6 rounded shadow-lg w-1/2 relative z-10 transform transition-all ease-out duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h2 className="text-2xl mb-4">Modal Title</h2>
       
        <h2>Commit Details</h2>
        <p><strong>SHA:</strong> {commit.sha}</p>
        <p><strong>Message:</strong> {commit.message}</p>
        <p><strong>Author Name:</strong> {commit.authorName}</p>
        <p><strong>Author Email:</strong> {commit.authorEmail}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CommitModal;

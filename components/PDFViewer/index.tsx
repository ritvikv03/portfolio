import React, { FC } from 'react';

interface PDFViewerProps {
  src: string;
  onClose: () => void;
}

const PDFViewer: FC<PDFViewerProps> = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative w-full h-full max-w-4xl max-h-4xl">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">Close</button>
        <iframe src={src} className="w-full h-full" />
      </div>
    </div>
  );
};

export default PDFViewer;

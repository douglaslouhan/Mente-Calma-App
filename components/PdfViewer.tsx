
import React from 'react';
import { CloseIcon, DownloadIcon } from './icons';

interface PdfViewerProps {
  visible: boolean;
  url: string;
  title: string;
  onClose: () => void;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ visible, url, title, onClose }) => {
  if (!visible) return null;

  const downloadUrl = url.replace("/preview", "/view");

  return (
    <div className="fixed inset-0 bg-[#F8F7FC] z-50 flex flex-col">
      <div className="flex justify-between items-center p-4 bg-white shadow-md flex-shrink-0">
        <h3 className="text-base font-semibold truncate pr-4">{title}</h3>
        <button onClick={onClose} className="bg-none border-none text-lg cursor-pointer text-[#555]">
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
      <iframe src={url} className="flex-grow w-full border-none" title={title}></iframe>
      <a
        href={downloadUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 p-4 bg-[#A185D7] text-white text-center font-semibold flex-shrink-0 hover:bg-[#8a6ec1]"
      >
        <DownloadIcon className="w-5 h-5" />
        Baixar PDF
      </a>
    </div>
  );
};

export default PdfViewer;

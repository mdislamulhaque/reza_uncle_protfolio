import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { ResumePDF } from './ResumePDF';

export const DownloadCVButton = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const printContent = resumeRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>CV - Muhammad Abdullah Reza</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @page { size: A4; margin: 10mm; }
            body { -webkit-print-color-adjust: exact; }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
          <script>
            setTimeout(() => {
              window.print();
              window.close();
            }, 500);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div>
      {/* আসল বাটন */}
      <button
        id="resume-btn-desktop"
        onClick={handleDownload}
        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-indigo-600 dark:bg-white dark:hover:bg-indigo-500 text-white dark:text-gray-900 dark:hover:text-white rounded-full font-sans font-medium text-sm transition-all duration-300 shadow-md hover:shadow-indigo-600/25 dark:hover:shadow-indigo-500/20"
      >
        <span>CV</span>
        <Download className="w-4 h-4" />
      </button>

      {/* ব্যাকগ্রাউন্ডে হিডেন অবস্থায় থাকবে যা প্রিন্ট/ডাউনলোডে কাজ করবে */}
      <div className="hidden">
        <ResumePDF ref={resumeRef} />
      </div>
    </div>
  );
};
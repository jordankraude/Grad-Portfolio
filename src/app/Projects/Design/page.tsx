'use client';

import React, { useEffect, useState } from 'react';
import './loading.css';
import Link from 'next/link';

interface Design {
  id: string;
  graphicAlt: string;
  graphicName: string;
  graphicSummary: string;
  pdfFile: string; // Base64 string
}

const DesignPage: React.FC = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const designsPerPage = 3;

  useEffect(() => {
    const fetchDesigns = async (page: number) => {
      setLoading(true);
      try {
        const response = await fetch(`/api/Design/prod?page=${page}&limit=${designsPerPage}`);
        const data = await response.json();
        setDesigns(data.designs);
        setTotalPages(Math.ceil(data.total / designsPerPage));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching designs:', error);
        setLoading(false);
      }
    };

    fetchDesigns(currentPage);
  }, [currentPage]);

  const base64ToBlob = (base64: string, contentType: string) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  };

  const base64ToUrl = (base64: string) => {
    const blob = base64ToBlob(base64, 'application/pdf');
    return URL.createObjectURL(blob);
  };

  const openModal = (design: Design) => {
    setSelectedDesign(design);
  };

  const closeModal = () => {
    setSelectedDesign(null);
  };

  const toggleFullScreen = (element: HTMLElement) => {
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return (
      <div className='min-h-screen'>
        <div className="e-loadholder">
          <div className="m-loader">
            <span className="e-text">Loading</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-4">
      <h2 className="text-4xl font-bold text-center mt-10">Graphic Designs</h2>
      <h4 className='text-xl text-center'>Click the print button to see designs in proper scale</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {designs.map((design) => (
          <div
            key={design.id}
            className="design-card flex flex-col items-center p-4"
            onClick={() => openModal(design)}
          >
            <div className="w-[400px] h-[400px] relative">
              {/* Placeholder for image preview */}
              <div className="overlay">
                <h3 className="text-xl font-semibold">{design.graphicName}</h3>
                <p className="text-sm text-gray-200">{design.graphicSummary}</p>
              </div>
              {/* PDF preview */}
              <iframe
                src={base64ToUrl(design.pdfFile)}
                className="pdf-preview"
                title={design.graphicName}
                style={{ border: 'none' }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullScreen(e.currentTarget as HTMLElement);
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button 
          className={`mx-2 p-2 ${currentPage === 1 ? 'cursor-not-allowed' : ''}`} 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-xl mx-2">{currentPage} / {totalPages}</span>
        <button 
          className={`mx-2 p-2 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`} 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <h1 className='text-center text-2xl mt-10'>Want to see more designs? Check out my web designs here: </h1>
      <Link href="/Projects/Web" passHref>
        <div className="hover-slide bg-[#B5D99C] text-black flex items-center justify-center p-10 w-48 h-20 m-auto mt-10 text-xl font-semibold cursor-pointer">
          <div className="content">Websites</div>
        </div>
      </Link>

      {selectedDesign && (
        <div className="modal open">
          <span className="modal-close" onClick={closeModal}>&times;</span>
          <iframe
            src={base64ToUrl(selectedDesign.pdfFile)}
            className="w-full h-full"
            title={selectedDesign.graphicName}
            style={{ border: 'none' }}
            onClick={(e) => {
              e.stopPropagation();
              toggleFullScreen(e.currentTarget as HTMLElement);
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DesignPage;

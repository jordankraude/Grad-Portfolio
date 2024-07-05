'use client';

import React from 'react';

const OtherProjects: React.FC = () => {
  return (
    <div className="w-full min-h-screen h-auto p-40 bg-white text-black">
      <section className="h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
        <div className="w-full max-w-7xl mx-auto text-center p-4">
          <h2 className="text-4xl font-bold mb-6">Other Projects</h2>
          <div className="w-full">
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLKf4Cr3485GyRFN9rvHHeC3LAcrOSTh-Ykx599m70WB97jnkot5UASkKKgkFDpZU3H4VtsvdcO3A3/pubhtml?widget=true&amp;headers=false"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="auto"
              className="rounded-lg"
              title="Embedded Google Sheet"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjects;

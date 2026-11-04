import React, { useState, useEffect } from 'react';
import { clientImagesAPI } from '@/lib/api';

const TrustedClients = ({ selectedIds = [] }) => {
  const [clients, setClients] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      const data = await clientImagesAPI.getAll();
      if (data && data.length > 0) {
        if (selectedIds && selectedIds.length > 0) {
          setClients(data.filter(client => selectedIds.includes(client.id)));
        } else {
          setClients(data);
        }
      }
    } catch (error) {
      console.error('Error loading clients:', error);
    }
  };

  if (clients.length === 0) return null;

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 font-semibold uppercase tracking-widest mb-10 text-sm">
          Trusted by Top Real Estate Companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <div key={index} className="w-32 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img
                src={`${API_BASE_URL}${client.path}`}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;


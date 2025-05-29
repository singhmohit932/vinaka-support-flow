"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from 'react';

interface ContactFormContextType {
  isOpen: boolean;
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const openContactForm = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeContactForm = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    isOpen,
    openContactForm,
    closeContactForm,
  }), [isOpen, openContactForm, closeContactForm]);

  return (
    <ContactFormContext.Provider value={contextValue}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  
  if (context === undefined) {
    const error = new Error('useContactForm must be used within a ContactFormProvider');
    console.error(error);
    throw error;
  }
  
  return context;
};

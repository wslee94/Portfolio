import { useState, createContext } from 'react';

export const CurrentPageContext = createContext();

export function CurrentPageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('about');
  const changeCurrentPage = (page) => setCurrentPage(page);
  return (
    <CurrentPageContext.Provider value={{ currentPage, changeCurrentPage }}>{children}</CurrentPageContext.Provider>
  );
}

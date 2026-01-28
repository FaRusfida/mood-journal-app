import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { email, name }
  const [journalEntries, setJournalEntries] = useState([]); // [{ id, promptId, date, mood, notes, timestamp }]

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('moodJournalUser');
    const savedEntries = localStorage.getItem('moodJournalEntries');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedEntries) {
      setJournalEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('moodJournalUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('moodJournalUser');
    }
  }, [user]);

  // Save entries to localStorage when they change
  useEffect(() => {
    localStorage.setItem('moodJournalEntries', JSON.stringify(journalEntries));
  }, [journalEntries]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addEntry = (entry) => {
    const newEntry = {
      ...entry,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    setJournalEntries([newEntry, ...journalEntries]);
  };

  const deleteEntry = (entryId) => {
    setJournalEntries(journalEntries.filter(entry => entry.id !== entryId));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        journalEntries,
        login,
        logout,
        addEntry,
        deleteEntry,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

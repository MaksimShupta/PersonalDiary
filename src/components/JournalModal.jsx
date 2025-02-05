import React, { useState, useEffect } from 'react';
import Form from './Form';
import Button from './Button';

const JournalModal = () => {
  const [entries, setEntries] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('Entries updated:', entries);
  }, [entries]);

  // Handling the button to start a journal (this could be the glass)
  const openJournal = () => {
    const today = new Date().toISOString().split('T')[0];
    if (entries[today]) {
      alert('Your cup is full, please return tomorrow.');
      return;
    }
    setShowModal(true);
  };

  // Receiving form data, to be saved in state
  const handleFormSubmit = (entryData) => {
    const today = new Date().toISOString().split('T')[0];
    setEntries((prevEntries) => ({
      ...prevEntries,
      [today]: entryData,
    }));
    setShowModal(false);
    alert('Entry Submitted: enjoy your peace of mind!');
  };

  return (
    <div>
      {/* Global Start Journal Button */}
      <Button text="Start Journal" onClick={openJournal} />

      {showModal && (
        <div className="modal">
          <Form onSubmit={handleFormSubmit} />
        </div>
      )}

      {/* Aggregated Journal Entries display */}
      <div className="aggregate">
        <h2>All Journal Entries</h2>
        {Object.entries(entries)
          .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
          .map(([date, entry]) => (
            <div key={date}>
              <h3>{entry.title}</h3>
              <p>{entry.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JournalModal;
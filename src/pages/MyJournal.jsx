import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Button from "../components/Button";

const MyJournal = () => {
  const [entries, setEntries] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //console.log('Entries updated:', entries);
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries"));
    if (savedEntries) {
      setEntries(savedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const openJournal = () => {
    const today = new Date().toISOString().split("T")[0];
    if (entries[today]) {
      alert("Your cup is full, please return tomorrow.");
      return;
    }
    setShowModal(true);
  };

  const handleFormSubmit = (entryData) => {
    const today = new Date().toISOString().split("T")[0];
    const updatedEntries = { ...entries, [today]: entryData };
    setEntries(updatedEntries);
    //setEntries((prevEntries) => ({
    //  ...prevEntries,
    //  [today]: entryData,
    //}));
    setShowModal(false);
    alert("Entry Submitted: enjoy your peace of mind!");
  };

  return (
    <div className="pt-16">
      <Button text="Start Journal" onClick={openJournal} />

      {/* Journal Modal */}
      {showModal && (
        <div className="modal">
          <Form onSubmit={handleFormSubmit} />
        </div>
      )}

      {/* Aggregated Journal Entries Display */}
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

export default MyJournal;

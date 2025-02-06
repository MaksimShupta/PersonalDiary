import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Button from "../components/Button";

const MyJournal = () => {
  const [entries, setEntries] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
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
    setShowModal(false);
    alert("Entry Submitted: enjoy your peace of mind!");
  };

  return (
    <div className="min-h-screen p-6">
      {/* Global Start Journal Button */}
      <div className="mb-6 flex justify-center">
        <Button text="Start Journal" onClick={openJournal} />
      </div>

      {/* Journal Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Write Your Journal Entry</h2>
            <Form onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}

      {/* Aggregated Journal Entries Display */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">All Journal Entries</h2>
        {Object.entries(entries)
          .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
          .map(([date, entry]) => (
            <div key={date} className="p-4 mb-4 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-blue-600">{entry.title}</h3>
              <p>{entry.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyJournal;
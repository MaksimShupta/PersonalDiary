import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../components/Form";
import Button from "../components/Button";

const MyCalendar = () => {
  const [diaryEntries, setDiaryEntries] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries"));
    if (savedEntries) {
      setDiaryEntries(savedEntries);
    }
  }, []);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(date);
    setSelectedEntry(diaryEntries[formattedDate] || null);
    setIsFormVisible(false);
  };

  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const entry = diaryEntries[formattedDate];
    return entry
      ? `calendar-tile mood-${entry.mood}`
      : "calendar-tile no-entry";
  };

  const handleSubmit = (entryData) => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    const updatedEntries = {
      ...diaryEntries,
      [formattedDate]: entryData,
    };

    // Update state and localStorage
    setDiaryEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));

    setSelectedEntry(entryData);
    setIsFormVisible(false);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsFormVisible(true);
    setIsEditing(true);
  };

  return (
    <div className="calendar-page container mx-auto px-4">
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">My Journal Calendar</h2>

        {/* Calendar Section */}
        <div className="calendar-container bg-white rounded-lg shadow p-6 mb-8">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
            className="w-full border-none mx-auto"
          />
        </div>

        {/* Entry Display Section */}
        {(selectedEntry || isFormVisible) && (
          <div className="entry-section bg-white rounded-lg shadow p-6">
            {isFormVisible ? (
              <Form
                onSubmit={handleSubmit}
                initialData={isEditing ? selectedEntry : undefined}
              />
            ) : selectedEntry ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {selectedEntry.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="calendar-edit-button">
                    <Button text="Edit Entry" onClick={handleEdit} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="mb-4">
                      <span className="font-semibold text-gray-700">
                        Mood:{" "}
                      </span>
                      <span className="capitalize">{selectedEntry.mood}</span>
                    </div>
                    <div className="mb-4">
                      <span className="font-semibold text-gray-700">
                        Inspiration:{" "}
                      </span>
                      {selectedEntry.inspiration}
                    </div>
                  </div>
                  {selectedEntry.imageURL && (
                    <div>
                      <img
                        src={selectedEntry.imageURL}
                        alt="Entry"
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {selectedEntry.content}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        )}

        <style jsx>{`
          .calendar-page .calendar-container .react-calendar {
            width: 100%;
            max-width: 800px;
            background: white;
            border: none;
            font-family: inherit;
            padding: 1rem;
          }

          .calendar-page .calendar-container .react-calendar__tile {
            padding: 2em 0.5em;
            border-radius: 0.25rem;
            height: 100px;
            position: relative;
            color: white;
          }

          .calendar-page .calendar-container .calendar-tile.no-entry {
            background-color: #4a5568 !important;
            opacity: 0.7;
          }

          .calendar-page .calendar-container .calendar-tile.mood-happy {
            background-color: #ffd700 !important;
            color: black !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-sad {
            background-color: #4682b4 !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-excited {
            background-color: #ff69b4 !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-bored {
            background-color: #808080 !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-scared {
            background-color: #800080 !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-unsure {
            background-color: #98fb98 !important;
            color: black !important;
          }

          .calendar-page
            .calendar-container
            .react-calendar__tile:enabled:hover,
          .calendar-page
            .calendar-container
            .react-calendar__tile:enabled:focus {
            opacity: 0.8;
          }

          .calendar-page .calendar-container .react-calendar__tile--active {
            opacity: 1 !important;
            box-shadow: 0 0 0 2px white inset;
          }

          .calendar-page .entry-section form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 800px;
            margin: 0 auto;
          }

          .calendar-page .entry-section form div {
            display: flex;
            flex-direction: column;
          }

          .calendar-page .entry-section form label {
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #374151;
          }

          .calendar-page .entry-section form input,
          .calendar-page .entry-section form select,
          .calendar-page .entry-section form textarea {
            padding: 0.75rem;
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            background-color: #f9fafb;
          }

          .calendar-page .entry-section form textarea {
            min-height: 200px;
          }

          .calendar-page .calendar-edit-button .btn {
            background-color: #2563eb;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .calendar-page .calendar-edit-button .btn:hover {
            background-color: #1d4ed8;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MyCalendar;

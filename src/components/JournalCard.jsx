import React from "react";

// Convert the date into a readable format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const JournalCard = ({ entry }) => {
  return (
    <div className="p-4 mb-4 rounded-lg shadow-md bg-white bg-opacity-50 flex w-full max-w-7xl">
      {entry.imageURL && (
        <div className="w-1/3">
          <img
            src={entry.imageURL}
            alt="Journal Entry"
            className="object-cover w-full h-64 rounded-md"
          />
        </div>
      )}
      <div className="ml-4 w-2/3">
        <h3 className="text-lg font-medium text-gray-800">{entry.title}</h3>
        <p className="text-sm text-gray-600">{entry.content}</p>
        <p className="mt-2 text-sm text-gray-500">Date: {formatDate(entry.date)}</p>
      </div>
    </div>
  );
};

export default JournalCard;
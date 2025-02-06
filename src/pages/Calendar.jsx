import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Form from "../components/Form";
import Button from "../components/Button";

const initializeData = () => {
  const sampleData = {
    "2025-01-28": {
      title: "Creative Writing Workshop",
      date: "2025-01-28",
      mood: "excited",
      inspiration: "Creative Expression",
      content:
        "Attended an amazing online writing workshop today. The exercises we did really helped unlock some creative blocks I've been experiencing. The instructor shared some brilliant techniques for character development and story structure. Can't wait to apply these to my own writing!",
      imageURL:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format",
    },
    "2025-01-29": {
      title: "Nature Photography Day",
      date: "2025-01-29",
      mood: "happy",
      inspiration: "Natural Beauty",
      content:
        "Spent the whole day at the botanical gardens with my new camera. The winter flowers are stunning, and I caught some amazing shots of frost patterns on the leaves. Photography really helps me see the world differently.",
      imageURL:
        "https://images.unsplash.com/photo-1420745981456-b95fe23f5753?w=800&auto=format",
    },
    "2025-01-30": {
      title: "Health Journey Milestone",
      date: "2025-01-30",
      mood: "excited",
      inspiration: "Personal Health",
      content:
        "Hit my fitness goal for the month! Three months of consistent workouts and healthy eating are really paying off. Not just physically - I feel more energetic and focused throughout the day. Small steps really do lead to big changes.",
      imageURL:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format",
    },
    "2025-01-31": {
      title: "Late Night Stargazing",
      date: "2025-01-31",
      mood: "unsure",
      inspiration: "Cosmic Wonder",
      content:
        "Drove out to the countryside to watch the meteor shower. The sky was incredibly clear, and we saw dozens of shooting stars. Something about looking up at the vast universe really puts things in perspective. Feeling both small and significant at the same time.",
      imageURL:
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&auto=format",
    },
    "2025-02-01": {
      title: "Great Achievement Today!",
      date: "2024-02-01",
      mood: "excited",
      inspiration: "Personal Growth",
      content:
        "Finally completed my first major coding project! The satisfaction of seeing everything work smoothly after weeks of learning and troubleshooting is incredible. This journey has taught me so much about persistence and problem-solving. Can't wait to start the next project!",
      imageURL:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format",
    },
    "2025-02-02": {
      title: "Peaceful Weekend",
      date: "2025-02-02",
      mood: "happy",
      inspiration: "Self-Care",
      content:
        "Spent the morning at my favorite café, reading and people-watching. The weather was perfect - sunny with a gentle breeze. Later went for a long walk in the park and practiced mindfulness. These simple moments really make life beautiful.",
      imageURL:
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&auto=format",
    },
    "2025-02-03": {
      title: "Challenging Day",
      date: "22025-02-03",
      mood: "unsure",
      inspiration: "Learning Experience",
      content:
        "Had a tough meeting at work today. Not everything went as planned, but I'm trying to see it as a learning opportunity. Tomorrow is a new day with new possibilities. Need to focus on what I can control and improve.",
      imageURL:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format",
    },
    "2025-02-04": {
      title: "Family Dinner Night",
      date: "2024-02-04",
      mood: "happy",
      inspiration: "Family Bonds",
      content:
        "Hosted a family dinner tonight. Mom's secret recipe was a hit as always! We shared stories, laughed, and just enjoyed being together. These moments are precious and remind me of what truly matters in life.",
      imageURL:
        "https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&auto=format",
    },
    "2025-02-05": {
      title: "Community Garden Project",
      date: "2025-02-05",
      mood: "happy",
      inspiration: "Community Service",
      content:
        "Joined the neighborhood's community garden initiative today. We planned out the spring planting schedule and built some new raised beds. It's amazing to see how gardening brings people together. Looking forward to watching our shared space grow and flourish.",
      imageURL:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format",
    },
  };

  const savedData = localStorage.getItem("journalEntries");
  if (!savedData) {
    localStorage.setItem("journalEntries", JSON.stringify(sampleData));
    return sampleData;
  }

  return { ...sampleData, ...JSON.parse(savedData) };
};

const MyCalendar = () => {
  const [diaryEntries, setDiaryEntries] = useState(initializeData);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDateChange = (date) => {
    const formattedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    setSelectedDate(date);
    setSelectedEntry(diaryEntries[formattedDate] || null);
    setIsFormVisible(false);
  };

  const tileClassName = ({ date }) => {
    const formattedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
    const entry = diaryEntries[formattedDate];
    return entry
      ? `calendar-tile mood-${entry.mood}`
      : "calendar-tile no-entry";
  };

  const handleSubmit = (entryData) => {
    const formattedDate = new Date(
      selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];
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
            height: 90px;
            position: relative;
            color: #1a1a1a;
            font-weight: 500;
          }

          .calendar-page .calendar-container .calendar-tile.no-entry {
            background-color: #e5e7eb !important;
            opacity: 0.7;
          }

          .calendar-page .calendar-container .calendar-tile.mood-happy {
            background-color: #fde047 !important; /* warm yellow */
            color: #1a1a1a !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-sad {
            background-color: #60a5fa !important; /* soft blue */
            color: white !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-excited {
            background-color: #f472b6 !important; /* vibrant pink */
            color: white !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-bored {
            background-color: #9ca3af !important; /* neutral gray */
            color: white !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-scared {
            background-color: #7c3aed !important; /* deep purple */
            color: white !important;
          }

          .calendar-page .calendar-container .calendar-tile.mood-unsure {
            background-color: #a7f3d0 !important; /* mint green */
            color: #1a1a1a !important;
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

          .calendar-page .entry-section {
            max-width: 800px;
            margin: 0 auto;
          }

          .calendar-page .entry-section .prose {
            max-width: 65ch;
            margin: 0 auto;
            line-height: 1.75;
          }

          .calendar-page .entry-section img {
            max-height: 400px;
            width: 100%;
            object-fit: contain;
            border-radius: 0.5rem;
            margin: 1rem 0;
          }

          .calendar-page .entry-section p {
            margin-bottom: 1.5rem;
            overflow-wrap: break-word;
            word-wrap: break-word;
            hyphens: auto;
          }

          .calendar-page .entry-section .grid {
            align-items: start;
            gap: 2rem;
          }

          .calendar-page .entry-section .grid > div:first-child {
            background-color: #f8fafc;
            padding: 1.5rem;
            border-radius: 0.5rem;
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

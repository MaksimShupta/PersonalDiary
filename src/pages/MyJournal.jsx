import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../components/Form";
import Button from "../components/Button";
import JournalCard from "../components/JournalCard";

const initializeData = () => {
  const sampleData = {
    "2025-01-28": {
      title: "Creative Writing Workshop",
      date: "2025-01-28",
      mood: "excited",
      inspiration: "Creative Expression",
      content:
        "Attended an amazing online writing workshop today. The exercises we did really helped unlock some creative blocks I've been experiencing. The instructor shared some brilliant techniques for character development and story structure. Can't wait to apply these to my own writing!",
      imageURL: "https://picsum.photos/200/300",
    },
    "2025-01-29": {
      title: "Nature Photography Day",
      date: "2025-01-29",
      mood: "happy",
      inspiration: "Natural Beauty",
      content:
        "Spent the whole day at the botanical gardens with my new camera. The winter flowers are stunning, and I caught some amazing shots of frost patterns on the leaves. Photography really helps me see the world differently.",
      imageURL: "https://picsum.photos/200/301",
    },
    "2025-01-30": {
      title: "Health Journey Milestone",
      date: "2025-01-30",
      mood: "excited",
      inspiration: "Personal Health",
      content:
        "Hit my fitness goal for the month! Three months of consistent workouts and healthy eating are really paying off. Not just physically - I feel more energetic and focused throughout the day. Small steps really do lead to big changes.",
      imageURL: "https://picsum.photos/200/302",
    },
    "2025-01-31": {
      title: "Late Night Stargazing",
      date: "2025-01-31",
      mood: "unsure",
      inspiration: "Cosmic Wonder",
      content:
        "Drove out to the countryside to watch the meteor shower. The sky was incredibly clear, and we saw dozens of shooting stars. Something about looking up at the vast universe really puts things in perspective. Feeling both small and significant at the same time.",
      imageURL: "https://picsum.photos/200/303",
    },
    "2025-02-01": {
      title: "Great Achievement Today!",
      date: "2024-02-01",
      mood: "excited",
      inspiration: "Personal Growth",
      content:
        "Finally completed my first major coding project! The satisfaction of seeing everything work smoothly after weeks of learning and troubleshooting is incredible. This journey has taught me so much about persistence and problem-solving. Can't wait to start the next project!",
      imageURL: "https://picsum.photos/200/304",
    },
    "2025-02-02": {
      title: "Peaceful Weekend",
      date: "2025-02-02",
      mood: "happy",
      inspiration: "Self-Care",
      content:
        "Spent the morning at my favorite café, reading and people-watching. The weather was perfect - sunny with a gentle breeze. Later went for a long walk in the park and practiced mindfulness. These simple moments really make life beautiful.",
      imageURL: "https://picsum.photos/200/305",
    },
    "2025-02-03": {
      title: "Challenging Day",
      date: "22025-02-03",
      mood: "unsure",
      inspiration: "Learning Experience",
      content:
        "Had a tough meeting at work today. Not everything went as planned, but I'm trying to see it as a learning opportunity. Tomorrow is a new day with new possibilities. Need to focus on what I can control and improve.",
      imageURL: "https://picsum.photos/200/306",
    },
    "2025-02-04": {
      title: "Family Dinner Night",
      date: "2024-02-04",
      mood: "happy",
      inspiration: "Family Bonds",
      content:
        "Hosted a family dinner tonight. Mom's secret recipe was a hit as always! We shared stories, laughed, and just enjoyed being together. These moments are precious and remind me of what truly matters in life.",
      imageURL: "https://picsum.photos/200/307",
    },
    "2025-02-05": {
      title: "Community Garden Project",
      date: "2025-02-05",
      mood: "happy",
      inspiration: "Community Service",
      content:
        "Joined the neighborhood's community garden initiative today. We planned out the spring planting schedule and built some new raised beds. It's amazing to see how gardening brings people together. Looking forward to watching our shared space grow and flourish.",
      imageURL: "https://picsum.photos/200/308",
    },
  };

  const savedData = localStorage.getItem("journalEntries");
  if (!savedData) {
    localStorage.setItem("journalEntries", JSON.stringify(sampleData));
    return sampleData;
  }

  // Merge saved data with sample data, prioritizing saved data
  return { ...sampleData, ...JSON.parse(savedData) };
};

const MyJournal = () => {
  const [entries, setEntries] = useState(initializeData);
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
      toast.info("Your cup is full, please return tomorrow.");
      return;
    }
    setShowModal(true);
  };

  const handleFormSubmit = (entryData) => {
    const today = new Date().toISOString().split("T")[0];
    const updatedEntries = { ...entries, [today]: entryData };
    setEntries(updatedEntries);
    setShowModal(false);
    toast.success("Entry Submitted: enjoy your peace of mind!");
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            <h2 className="text-xl font-semibold mb-4">
              Write Your Journal Entry
            </h2>
            <Form onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}

      {/* Updated Entries Display Section */}
      <div className="mt-8 w-full max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-[#411F31] font-caudex mb-8 text-center">
          All Journal Entries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(entries)
            .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
            .map(([date, entry]) => (
              <JournalCard key={date} entry={entry} />
            ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyJournal;

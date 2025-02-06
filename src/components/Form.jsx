import { useState } from "react";
import Button from "./Button";

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); 
  const [mood, setMood] = useState("happy");
  const [inspiration, setInspiration] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!title || !date || !mood || !inspiration || !imageURL || !content) {
      alert('Please complete all fields');
      return;
    }

    const entryData = {
      title, 
      date,
      mood,
      inspiration,
      imageURL,
      content,
    };

    onSubmit(entryData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="title">
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="date">
        <label htmlFor="date" className="block text-sm font-semibold text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="mood">
        <label htmlFor="mood" className="block text-sm font-semibold text-gray-700">Mood</label>
        <select
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
          <option value="bored">Bored</option>
          <option value="scared">Scared</option>
          <option value="unsure">Unsure</option>
        </select>
      </div>
      <div className="inspiration">
        <label htmlFor="inspiration" className="block text-sm font-semibold text-gray-700">Inspiration</label>
        <input
          type="text"
          id="inspiration"
          value={inspiration}
          onChange={(e) => setInspiration(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="image-url">
        <label htmlFor="imageURL" className="block text-sm font-semibold text-gray-700">Image URL</label>
        <input
          type="url"
          id="imageURL"
          placeholder="Enter a URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div className="content">
        <label htmlFor="content" className="block text-sm font-semibold text-gray-700">Journal Entry</label>
        <textarea
          id="content"
          placeholder="What's on your mind?"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      <div>
        <Button text="Submit" />
      </div>
    </form>
  );
};

export default Form;
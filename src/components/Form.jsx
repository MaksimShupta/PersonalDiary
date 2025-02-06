import { useState } from "react";
import Button from "./Button";

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("happy");
  const [inspiration, setInspiration] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !date || !mood || !inspiration || !imageURL || !content) {
      alert("Please complete all fields");
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
    <form onSubmit={handleSubmit}>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="date">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mood">
        <label htmlFor="mood">Mood</label>
        <select
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
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
        <label htmlFor="inspiration">Inspiration</label>
        <input
          type="text"
          id="inspiration"
          value={inspiration}
          onChange={(e) => setInspiration(e.target.value)}
        />
      </div>
      <div className="image-url">
        <label htmlFor="imageURL">Image URL</label>
        <input
          type="url"
          id="imageURL"
          placeholder="Enter a URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div className="content">
        <label htmlFor="content">Journal Entry</label>
        <textarea
          id="content"
          placeholder="What's on your mind?"
          rows="10"
          cols="50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <Button text="Submit" />
      </div>
    </form>
  );
};

export default Form;

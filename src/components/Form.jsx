import Button from "./Button";

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); //prevent page reload
        alert("Submission success: enjoy your peace of mind!");
    };

return (
    <form onSubmit={handleSubmit}>
        <div className="title">
            <label>Title</label>
            <input type="text"/>
        </div>
        <div className="date">
            <label>Date</label>
            <input 
                type="date"/>
        </div>
        <div className="mood">
                <label>Mood</label>
                <select>
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="Excited">Excited</option>
                    <option value="Bored">Bored</option>
                    <option value="Scared">Scared</option>
                    <option value="unsure">Unsure</option>
                </select>
        </div>
        <div className="inspiration">
            <label>Inspiration</label>
            <input type="text"/>
        </div>
        <div className="image-url">
            <label>Image URL</label>
            <input
                type="url"
                alt="upload an image"
                placeholder="Enter a URL"/>
        </div>
        <div className="content">
            <label>Journal Entry</label>
            <textarea
                placeholder="What's on your mind?"
                rows="10"
                cols="50">
            </textarea>
        </div>
        <div>
            <Button text="Submit" />
        </div>
    </form>
    )
}

export default Form;
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
            <label>Today's Date</label>
            <input 
                type="date"/>
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
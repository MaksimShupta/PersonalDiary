const Button = ({ text, onClick }) => {

return (
<button 
    id="button" 
    className="button" 
    type="button" 
    onClick={onClick}
>
    {text}
</button>
)
}

export default Button;
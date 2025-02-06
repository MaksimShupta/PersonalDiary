const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn p-4 rounded-lg bg-white hover:bg-slate-500 hover:bg-opacity-20 bg-opacity-20">
      {text}
    </button>
  );
};

export default Button;
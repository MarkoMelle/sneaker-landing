function Button({ label, iconURL, alt, onClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    e.currentTarget.blur()
    // onClick();
  }
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:bg-coral-red-dark focus:ring-coral-red-light focus:ring-offset-coral-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2" onClick={(e)=> handleClick(e)}>

      {label}
      {iconURL && <img className="ml-2 rounded-full w-5 h-5"
      src={iconURL} alt={alt} /> }
    </button>
  );
}

export default Button;

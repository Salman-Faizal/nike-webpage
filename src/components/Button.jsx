const Button = ( {label, iconURL, backgroundColor, textColor, borderColor, fullWidth} ) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
    ${backgroundColor ? 
      `${backgroundColor} ${textColor} ${borderColor}` :
      "bg-coral-red text-white border-coral-red"}
    ${fullWidth && 'w-full'}`}>
      {label}
      {iconURL && <img
        src={iconURL}
        alt="arrow right icon"
        className="w-5 h-5 ml-2 rounded-full"
      />}
    </button>
  )
}

export default Button
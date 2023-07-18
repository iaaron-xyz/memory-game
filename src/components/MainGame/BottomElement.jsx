import { useState } from "react"

const BottomElement = () => {

  const [infoToggle, setInfoToggle] = useState(false);

  let messageClass = infoToggle ? 'show-message' : 'hide-message';
  let animateBtnClass = infoToggle ? 'animate-bounce' : null;
  let BtnContent = infoToggle ? 'X' : '?';
  
  return (
    <div className="flex-none flex p-6">
      <button
        className={`help-btn ml-auto bg-accent rounded-full text-2xl shadow-lg ${animateBtnClass}`}
        onClick={() => setInfoToggle(!infoToggle)}>
          {BtnContent}
      </button>
      <div className={`absolute right-24 bottom-24 text-4xl bg-accent text-purple-700 p-4 rounded-lg ${messageClass}`}>
        Don&apos;t Click a Card Twice!
      </div>
    </div>
  )
}

export default BottomElement
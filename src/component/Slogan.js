import { useState, useEffect } from "react";
import './Slogan.css'

const TypingSlogan = () => {
    const slogans = ["make embedded devops easier", "manage devices remotely", "make life easier"];
    const [direction, setDirection] = useState("forward");
    const [offset, setOffset] = useState(0);
    const [line, setLine] = useState(0);
    const [hold, setHold] = useState(100);

    let next = (direction === "forward")? offset + 1: offset - 1;
    let sentence = slogans[line].slice(0, next + 1) || " ";
    useEffect(() => {
        setTimeout(() => {
            if(slogans[line][next] === undefined) {
                if(direction === "backward") {
                    let nextLine = (line < slogans.length - 1)? (line + 1): 0;
                    setLine(nextLine);
                    setOffset(0);
                    setDirection("forward");
                    console.log({line});
                } else {
                    setOffset(offset - 1);
                    setDirection("backward");
                }

            } else {
                setOffset(next);
            }
            
            if( (direction === "forward" && offset === slogans[line].length - 2 ) ||
                (direction === "backward" && offset === 1 ) ){
                    setHold(1500);
            } else {
                setHold(100);
            }
        }, hold)
    }, [offset, direction]);


    return  <span> &#128149; {sentence} &#128149; </span>;

};

function Slogan() {
    return (
      <div className="Slogan">
          <TypingSlogan />
      </div>
    );
}
  
export default Slogan;
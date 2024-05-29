import {useEffect, useState} from 'react';

function Typewriter({
    text,
    typingSpeed = 100,
    deletingSpeed = 50
}){
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false); 
    const [index, setIndex] = useState(0);
    useEffect(() =>{
        const handleTyping = () =>{
            
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting? deletingSpeed : typingSpeed
        );
    })
    return(
        <div className="typewriter-effect">
            <span className="caret"></span>
        </div>
    );
}

export default Typewriter;
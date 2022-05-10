import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import "./SendMessage.css"

function SendMessage (props) {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    let { name } = useParams();
    
    useEffect( () => {
        if(showModal){
            setTimeout(()=>setShowModal(false), 2000);
        }
    }, [showModal]);
    
    const handleSendButton = () => {
        setMessage("");
        setShowModal(true);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    return (
    <div className="SendMessage">
        {showModal && <div className="message-sent-modal">Wysłano!</div>}
        <div className="message-recipient"><h4>Odbiorca: {name}</h4></div>
        <textarea type={"text"} placeholder="Wprowadź wiadomość..." className="form-control" rows={4} onChange={handleMessageChange} value={message} autoFocus={true}></textarea>
        <div className="send"><button type="button" className="btn btn-dark" onClick={handleSendButton}>Wyślij</button></div>
    </div>
    );
};

export default SendMessage;
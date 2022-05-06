import { useShow} from "./context/ShowContext";

function Message() {
const {visible} = useShow()

   if (visible===false) return null
    return ( 
        <div className="message">
        Hi, friend
        </div>
     ) 
     ;
}

export default Message;
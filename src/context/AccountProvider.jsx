import { createContext,useState, useRef , useEffect} from "react";
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);


const AccountProvider =({children})=>{

    const [account,setAccount] = useState();

    const [person, setPerson] = useState({});

    const [activeUsers, setActiveUsers] = useState([]);

    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const [deleteMessageFlag, setDeleteMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('https://quickall-m9pn.onrender.com');
    }, []);

    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag,
            deleteMessageFlag,
            setDeleteMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;
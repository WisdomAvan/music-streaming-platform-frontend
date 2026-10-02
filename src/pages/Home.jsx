import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser, loggedOut } from "../features/auth/authSlice";

export default function Home() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleLogout(){
        dispatch(loggedOut());
        navigate("/login");
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center">
            <h1 className="text-2xl font-semibold">Welcome Home</h1>
            <p className="text-neutral-400">Logged in as user ID: {user?.id}</p>

            <button onClick={handleLogout}
            className="rounded-full bg-neutral-800 px-6 py-2 text-sm hover:bg-neutral-700"
            
            
            >


                Log out
            </button>

        </div>
    );


}
import css from './MainLayout.module.css'
import {Outlet, Link, NavLink, useNavigate} from "react-router-dom";

const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={css.header}>
                {/*// <a href={"/home"}>Home</a> /!* Reload page when clicked, bad variant *!/*/}
                {/*// <Link to="/home">Home</Link>    /!* Analog, but not reload page when clicked, good variant *!/*/}
                <NavLink to="home">Home</NavLink>  {/* Like LINK but add to element class 'active' when clicked*/}
                <NavLink to="posts">Posts</NavLink>    {/* Adding '/post' to current url */}
            </div>
            <hr/>   {/* Make style without css file */}
            <div style={{background: 'lightgray', padding: '10px'}}>
                <button onClick={() => navigate(-1)}>PrevHistoryPage</button>
                <button onClick={() => navigate(1)}>NextHistoryPage</button>
            </div>
            <Outlet/>   {/* Place for drawing internal ROUTE of MainLayout */}
        </div>
    );
};

export {MainLayout};
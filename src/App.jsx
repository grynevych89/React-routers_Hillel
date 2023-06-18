import {Routes, Route, NavLink} from 'react-router-dom'
import Home from "./pages/Home/Home.jsx";
import Users from "./pages/Users/Users.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import User from "./pages/User/User.jsx";

function App() {

    return (
        <div>
            <div>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/users'>Users</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts'>Posts</NavLink>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/users/:userId' element={<User/>}/>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App

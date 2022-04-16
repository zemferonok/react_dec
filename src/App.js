import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";

import {HomePage, NotFoundPage, SinglePostPage, PostsPage} from "./pages";
import {MainLayout} from "./Layouts";


const App = () => {
    return (
        <BrowserRouter> {/* Must wrap all APP component, usually use in src/index.js */}
            <Routes>    {/* Contain ROUTE elements */}
                {/* Every open ROUTE must have in its element <Outlet/> */}
                <Route path={'/'} element={<MainLayout/>}>  {/* Root path of url */}
                    <Route path={'home'} element={<HomePage/>}/>    {/* The closed ROUTE */}
                    <Route path={'posts'} element={<PostsPage/>}>   {/* The opened ROUTE */}
                        <Route path={':id'} element={<SinglePostPage/>}/> {/* :{key} is any data */}
                    </Route>    {/* All url path for SinglePostPage is '.../home/{id}' */}
                    <Route path={'*'} element={<NotFoundPage/>}/>   {/* For any not using url */}
                    <Route index element={<Navigate to={'home'}/>}/>    {/* Default loading */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
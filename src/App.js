import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router-dom";

import {HomePage, NotFoundPage, SinglePostPage, PostsPage} from "./pages";
import {MainLayout} from "./Layouts";


const App = () => {
    return (
        <BrowserRouter> {/* Must wrap all APP component, usually use in src/index.js */}
            <Routes>    {/* Contain ROUTE elements */}
                {/* Every opened ROUTE must have into own element <Outlet/> */}
                <Route path={'/'} element={<MainLayout/>}>  {/* Root path of url */}
                    <Route path={'home'} element={<HomePage/>}/>    {/* The closed ROUTE */}
                    <Route path={'posts'} element={<PostsPage/>}>   {/* The opened ROUTE */}
                        <Route path={':id'} element={<SinglePostPage/>}/> {/* :{key} is any data */}
                    </Route>    {/* All path for url SinglePostPage is '.../posts/{id}' */}
                    <Route path={'*'} element={<NotFoundPage/>}/>   {/* For any not decelerated url */}
                    <Route index element={<Navigate to={'home'}/>}/>    {/* Default page for load */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
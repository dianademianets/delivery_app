import {FC} from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';

import {
    ShopsList,
    ProductsList,
    UserInfo,
    NotFound,
    Layout,
} from './pages';

const App: FC = () => {
        return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path={'shops'} element={<ShopsList/>}>
                        <Route path={':shopId/products'} element={<ProductsList/>}>
                    </Route>
                    </Route>

                    <Route path={'users'} element={<UserInfo/>}>
                    </Route>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;

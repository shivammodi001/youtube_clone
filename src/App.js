import React from 'react';
import Header from './component/Header';
import Body from './component/Body';
import { Provider } from 'react-redux';
import store from './util/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './component/MainContainer';
import WatchPage from './component/WatchPage';
import NetworkStatus from './component/NetworkStatus';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    < NetworkStatus />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Body />}>
                            <Route path="/" element={<MainContainer />} />
                            <Route path="watch" element={<WatchPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;

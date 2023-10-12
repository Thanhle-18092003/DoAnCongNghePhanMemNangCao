import { Routes, Route, Link } from 'react-router-dom';
// import './css/Mains.css';
import Main from './pages/trangChu'
import DSXe from './pages/danhMucXe'
import LienHe from './pages/lienHe'
import DSCuaHang from './pages/danhSachCuaHang'
import DangKy from './pages/Register'
import DangNhap from './pages/Login'

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
    return (
        <>
            {/*phần bao quanh toàn bộ trang chủ*/}
            <div id="trangchu">
                <HeaderComponent/>

                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/dmxe" element={<DSXe/>} />
                    <Route path="/lienhe" element={<LienHe/>} />
                    <Route path="/dscuahang" element={<DSCuaHang/>} />
                    <Route path="/dangky" element={<DangKy/>} />                    
                    <Route path="/dangnhap" element={<DangNhap/>} />                    
                </Routes>

                <FooterComponent />
            </div>
        </>
    );
}

export default App;

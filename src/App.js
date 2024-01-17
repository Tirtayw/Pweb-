// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import ContentDetail from './components/ContentDetail';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Pegunungan from './components/Pegunungan';
import Pantai from './components/Pantai';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('HOME');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className="navbar-container">
        <ul className="ul-navbar">
          <li className="li-navbar">
            <a href="/" className="a-navbar">
              HOME
            </a>
          </li>
          <li className="li-navbar">
            <a href="/login" className="a-navbar">
              LogOut
            </a>
          </li>
          <li className="li-navbar">
            <a href="/register" className="a-navbar">
              REGISTER
            </a>
          </li>
          <li className="li-navbar">
            <select
              id="pilihan"
              name="pilihan"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="pegunungan">Pegunungan</option>
              <option value="pantai">Pantai</option>
              <option value="lainnya">Wisata Lainnya</option>
            </select>
            <p>
              Pilih: <span id="hasil">{selectedOption}</span>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Content selectedOption={selectedOption} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Other routes can be added here */}
        </Routes>
        <div className="content">
          <div className="textBox">
            <h1>The Beauty and Wealth Of Indonesia😎✌️</h1>
          </div>
        </div>
        {/* CONTENT 1 */}
        {selectedOption === 'pegunungan' && <Pegunungan />} 
        {/* CONTENT 2 */}
        {selectedOption === 'pantai' && <Pantai />}
        <ContentDetail
          imageUrl="assets/borobudur.jpg"
          altText="Text1"
          description="Candi Borobudur adalah sebuah candi Buddha yang terletak di Borobudur, Magelang, Jawa Tengah, Indonesia. Candi ini terletak kurang lebih 100 km di sebelah barat daya Semarang, 86 km di sebelah barat Surakarta, dan 40 km di sebelah barat laut Yogyakarta. Candi dengan banyak stupa ini didirikan oleh para penganut agama Buddha Mahayana sekitar tahun 800-an Masehi pada masa pemerintahan wangsa Syailendra. Borobudur adalah candi atau kuil Buddha terbesar di dunia, sekaligus salah satu monumen Buddha terbesar di dunia."
        />
        <ContentDetail
          imageUrl="assets/lombok.jpg"
          altText="Text2"
          description="Lombok adalah sebuah pulau di kepulauan Sunda Kecil atau Nusa Tenggara yang terpisahkan oleh Selat Lombok dari Bali di sebelah barat dan Selat Alas di sebelah timur dari Sumbawa. Pulau ini kurang lebih berbentuk bulat dengan semacam 'ekor' di sisi barat daya yang panjangnya kurang lebih 70 km."
        />
        <ContentDetail
          imageUrl="assets/rajaampat.jpg"
          altText="Text3"
          description="Kepulauan Raja Ampat adalah gugusan kepulauan yang berlokasi di barat bagian Semenanjung Kepala Burung (Vogelkoop) Pulau Papua. Secara administrasi, gugusan ini berada di bawah Kabupaten Raja Ampat dan Kota Sorong, Provinsi Papua Barat Daya. Kepulauan ini sekarang menjadi tujuan para penyelam yang tertarik akan keindahan pemandangan bawah lautnya. Empat gugusan pulau yang menjadi anggotanya dinamakan menurut empat pulau terbesarnya, yaitu Pulau Waigeo, Pulau Misool, Pulau Salawati, dan Pulau Batanta."
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;

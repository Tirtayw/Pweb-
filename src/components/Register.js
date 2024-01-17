// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/stylelogin.css";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Lakukan logika registrasi di sini
        // Misalnya, hanya untuk keperluan contoh, kita akan anggap registrasi berhasil jika kedua bidang diisi
        if (username.trim() !== '' && password.trim() !== '' && password === confirmPassword) {
            // Lakukan proses registrasi, misalnya mengirim data ke server
            // Setelah registrasi berhasil, bisa redirect ke halaman login atau halaman lainnya
            navigate("/login");
        } else {
            alert('Registrasi gagal. Harap isi semua bidang dan pastikan kata sandi sesuai.');
        }
    };

    return (
        <div className="register-container" style={{ backgroundImage: `url(/assets/gn.merbabu.jpg)` }}>
            <h2>Register</h2>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;

// Login.js
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import "../css/stylelogin.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Lakukan logika otentikasi di sini
        // Misalnya, hanya untuk keperluan contoh, kita akan anggap login berhasil jika kedua bidang diisi
        if (username.trim() !== '' && password.trim() !== '') {
        navigate("/")
        } else {
            alert('Login gagal. Harap masukkan nama pengguna dan kata sandi.');
        }
    };

    return (
        <div className="login-container" style={{backgroundImage: `url(/assets/gn.merbabu.jpg)`}}>
            <h2>Login</h2>
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
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;

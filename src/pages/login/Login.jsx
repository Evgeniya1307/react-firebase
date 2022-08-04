import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"


//страница входа
const Login = () => {
  //состояние ошибка 
  const [error, setError] = useState(false);//вначале ложно не увижу ошибки
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)
//метод на отправку для входа в систему примет событие используя базу 
  const handleLogin = (e) => { 
    e.preventDefault(); //событие предотвращения по умолчанию при нажатие не было обновления

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>{/*метод при отправке обр-ть вход в систему   */}
        {/*2 ввода email и пароль */}
      <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>{/*тип будет отправлен и сохранить */}
        {error && <span>Неправильный адрес электронной почты или пароль</span>}{/*если есть ошибка покажи этот диапазон,в этом случае ложь   */}
      </form>
    </div>
  );
};

export default Login;

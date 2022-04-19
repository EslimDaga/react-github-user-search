import { useState } from "react";
import Toggle from "./components/ToggleMode";
import axios from "axios";
import CardInfoGithub from "./components/CardInfoGithub";
import InputSearch from "./components/InputSearch";

const App = () => {
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  const searchUser = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${user}`).then((r) => {
      setUserInfo([r.data]);
    }).catch(function(){
      setError(true);
      setTimeout(() => {
        setError(false);
      },5000)
    })
  }

  return (
    <main className="bg-color-body-light dark:bg-color-body-dark h-screen flex justify-center items-center">
      <div className="max-w-[45.625rem] md:max-h-[30.063rem] lg:max-h-[26.188rem] flex flex-col justify-center gap-9 md:m-auto w-full">
        <div className="flex justify-between h-10 items-center mx-6 sm:mx-6 md:mx-0 lg:mx-0">
          <h1 className="font-space font-bold text-[1.625rem] text-color-text-third-light dark:text-white">
            devfinder
          </h1>
          <Toggle />
        </div>
        <InputSearch
          searchUser={searchUser}
          handleChange={handleChange}
          error={error}
          user={user}
        />
        <CardInfoGithub user={user} userInfo={userInfo} />
      </div>
    </main>
  );
}

export default App;
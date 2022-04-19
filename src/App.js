import { useState } from "react";
import Toggle from "./components/ToggleMode";
import SearchIcon from "./assets/images/icon-search.svg";
import axios from "axios";
import CardInfoGithub from "./components/CardInfoGithub";

const App = () => {

  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  const searchUser = (e) => {
    e.preventDefault();
    console.log("Searching:" , user);
    axios.get(`https://api.github.com/users/${user}`).then((r) => {
      console.log(r);
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
        <form onSubmit={searchUser}>
          <div className="relative shadow-input-search dark:shadow-none rounded-[15px] mx-6 sm:mx-6 md:mx-0 lg:mx-0">
            <div className="absolute top-[20px] sm:top-[20px] md:top-[23px] lg:top-[23px] left-4 sm:left-4 md:left-8 lg:left-8">
              <img
                src={SearchIcon}
                alt=""
                className="w-[20.05px] sm:w-[20.05px] md:w-[20.05px] lg:w-[20.05px]"
              />
            </div>
            <input
              type="text"
              className="w-full bg-white dark:bg-color-second-dark h-[3.75rem] sm:h-[3.75rem] md:h-[4.313rem] lg:h-[4.313rem] rounded-[15px] pl-[45px] sm:pl-[45px] md:pl-20 lg:pl-20 font-space font-medium text-[13px] sm:text-[13px] md:text-lg lg:text-lg text-color-text-primary-light dark:text-white placeholder:font-space placeholder:font-normal md:placeholder:text-lg lg:placeholder:text-lg focus:outline-none cursor-pointer"
              placeholder="Search github username..."
              onChange={handleChange}
            />
            {error && (
              <p className="absolute right-[95px] sm:right-[95px] md:right-[140px] lg:right-[140px] top-[21px] sm:[21px] md:top-6 lg:top-6 text-color-error font-space font-bold text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] hidden sm:block md:block lg:block">
                No results
              </p>
            )}
            <div className="absolute bottom-[7.5px] sm:bottom-[7.5px] md:bottom-[9.5px] lg:bottom-[9.5px] right-2">
              <button
                type="submit"
                className={
                  error || user.length > 0
                    ? "pl-[18px] sm:pl-[18px] md:pl-[24px] lg:pl-[24px] pr-[14px] sm:pr-[14px] md:pr-[23px] lg:pr-[23px] py-[12.5px] rounded-[10px] bg-color-hover-button text-white font-space font-bold text-sm sm:text-sm md:text-base lg:text-base"
                    : "pl-[18px] sm:pl-[18px] md:pl-[24px] lg:pl-[24px] pr-[14px] sm:pr-[14px] md:pr-[23px] lg:pr-[23px] py-[12.5px] rounded-[10px] bg-color-primary-light text-white font-space font-bold text-sm sm:text-sm md:text-base lg:text-base"
                }
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <CardInfoGithub user={user} userInfo={userInfo} />
      </div>
    </main>
  );
}

export default App;
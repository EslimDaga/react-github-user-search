import { useState } from "react";
import Toggle from "./components/ToggleMode";
import SearchIcon from "./assets/images/icon-search.svg";
import OctoCatIcon from "./assets/images/icon-octocat.svg";
import axios from "axios";

const App = () => {

  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const handleChange = (e) => {
    setUser(e.target.value);
  }

  const searchUser = (e) => {
    e.preventDefault();
    console.log("Searching:" , user);
    axios.get(`https://api.github.com/users/${user}`).then((r) => {
      setUserInfo([r.data]);
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
              className="w-full bg-white dark:bg-color-second-dark h-[3.75rem] sm:h-[3.75rem] md:h-[4.313rem] lg:h-[4.313rem] rounded-[15px] pl-[45px] sm:pl-[45px] md:pl-20 lg:pl-20 font-space font-medium text-[13px] sm:text-[13px] md:text-lg lg:text-lg text-color-text-primary-light dark:text-white placeholder:font-space placeholder:font-normal md:placeholder:text-lg lg:placeholder:text-lg focus:outline-none"
              placeholder="Search github username..."
              onChange={handleChange}
            />
            <div className="absolute bottom-[7.5px] sm:bottom-[7.5px] md:bottom-[9.5px] lg:bottom-[9.5px] right-2">
              <button
                type="submit"
                className="pl-[18px] sm:pl-[18px] md:pl-[24px] lg:pl-[24px] pr-[14px] sm:pr-[14px] md:pr-[23px] lg:pr-[23px] py-[12.5px] rounded-[10px] bg-color-primary-light text-white font-space font-bold text-sm sm:text-sm md:text-base lg:text-base"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div
          key={user.login}
          className="relative bg-white dark:bg-color-second-dark w-auto sm:w-auto md:w-full lg:w-full md:[30.063rem] lg:h-auto rounded-[15px] shadow-content dark:shadow-none md:pt-10 lg:pt-11 mx-6 sm:mx-6 md:mx-0 lg:mx-0"
        >
          <div className="absolute left-6 sm:left-6 md:left-12 lg:left-12 mt-8 sm:mt-8 md:mt-0 lg:mt-0">
            <img
              src={
                userInfo.length > 0
                  ? userInfo.map((user) => user.avatar_url)
                  : OctoCatIcon
              }
              alt=""
              className="w-[70px] sm:w-[70px] md:w-[117px] lg:w-[117px] h-[70px] sm:h-[70px] md:h-[117px] lg:h-[117px] rounded-full bg-color-body-light"
            />
          </div>
          <div className="w-full md:block lg:flex justify-between pl-[113px] sm:pl-[113px] md:pl-[202px] lg:pl-[202px] md:pt-3 lg:pt-0 pr-12 mt-8 sm:mt-8 md:mt-0 lg:mt-0 mb-[23px] sm:mb-[23px] md:mb-0 lg:mb-5">
            <div className="mb-[4px]">
              <h1 className="font-space font-bold text-base sm:text-base md:text-[26px] lg:text-[26px] md:mb-[8px] text-color-text-default-light dark:text-white">
                {userInfo.length > 0
                  ? userInfo.map((user) => `${user.login}`)
                  : "The OctoCat"}
              </h1>
              <h3 className="font-space font-normal text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] text-color-primary-light">
                {userInfo.length > 0
                  ? userInfo.map((user) => `@${user.login}`)
                  : "@octocat"}
              </h3>
            </div>
            <h1 className="font-space font-normal text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] text-color-text-second-light dark:text-white">
              {userInfo.length > 0
                ? userInfo.map((user) => `${user.created_at}`)
                : "Joined 25 Jan 2011"}
            </h1>
          </div>
          <div className="ml-6 sm:ml-6 md:ml-10 lg:ml-[202px] md:pt-[38px] lg:pt-0 mb-[23px] sm:mb-[23px] md:mb-8 lg:mb-8 mr-6 sm:mr-6 md:mr-12 lg:mr-12">
            <h1 className="font-space font-normal text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] text-color-text-primary-light dark:text-white">
              {userInfo.length > 0
                ? userInfo.map((user) => {
                    let bio = "";

                    if (user.bio === null) {
                      bio = "This profile has no bio";
                    } else if (user.bio.length > 0) {
                      bio = user.bio;
                    }

                    return bio;
                  })
                : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
            </h1>
          </div>
          <div className="md:w-auto lg:w-[480px] pt-[18px] sm:pt-[18px] md:pt-[15px] lg:pt-[15px] ml-6 sm:ml-6 md:ml-10 lg:ml-[202px] pb-[17px] mb-6 sm:mb-6 md:mb-[30px] lg:mb-[37px] mr-6 sm:mr-6 md:mr-12 lg:mr-0 px-[15px] sm:px-[15px] md:px-8 lg:px-8 rounded-[10px] bg-color-body-light dark:bg-color-body-dark">
            <div className="grid w-auto sm:w-auto md:w-auto lg:w-auto grid-cols-3 text-center sm:text-center md:text-left lg:text-left">
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light dark:text-white mb-2 sm:mb-2 md:mb-0 lg:mb-0">
                  Repos
                </h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light dark:text-white">
                  {userInfo.length > 0
                    ? userInfo.map((user) => `${user.public_repos}`)
                    : "8"}
                </h1>
              </div>
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light dark:text-white mb-2 sm:mb-2 md:mb-0 lg:mb-0">
                  Followers
                </h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light dark:text-white">
                  {userInfo.length > 0
                    ? userInfo.map((user) => `${user.followers}`)
                    : "3938"}
                </h1>
              </div>
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light dark:text-white mb-2 sm:mb-2 md:mb-0 lg:mb-0">
                  Following
                </h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light dark:text-white">
                  {userInfo.length > 0
                    ? userInfo.map((user) => `${user.following}`)
                    : "9"}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full pl-6 sm:pl-6 md:pl-10 lg:pl-[202px] pr-6 sm:pr-6 md:pr-0 lg:pr-[0px]">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-[19px] gap-4 mb-12">
              <div className="flex">
                {userInfo.length > 0 ? (
                  userInfo.map((user) => {
                    let location = "";
                    if (user.location === null) {
                      location = (
                        <div key={user.login} className="flex">
                          <svg
                            className="fill-color-text-primary-light dark:fill-white opacity-50 mr-[25px] sm:mr-[25px] md:mr-[26.12px] lg:mr-[26.12px]"
                            height="20"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" />
                          </svg>
                          <h1
                            key={user.login}
                            className="font-space font-normal text-[15px] opacity-50 text-color-text-primary-light dark:text-white"
                          >
                            Not Available
                          </h1>
                        </div>
                      );
                    } else if (user.location) {
                      location = (
                        <div key={user.login} className="flex">
                          <svg
                            className="fill-color-text-primary-light dark:fill-white mr-[25px] sm:mr-[25px] md:mr-[19.12px] lg:mr-[19.12px]"
                            height="20"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" />
                          </svg>
                          <h1
                            key={user.login}
                            className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white"
                          >
                            {user.location}
                          </h1>
                        </div>
                      );
                    }
                    return location;
                  })
                ) : (
                  <>
                    <svg
                      className="fill-color-text-primary-light dark:fill-white mr-[25px] sm:mr-[25px] md:mr-[26.12px] lg:mr-[26.12px]"
                      height="20"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" />
                    </svg>
                    <h1 className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white">
                      San Francisco
                    </h1>
                  </>
                )}
              </div>
              <div className="flex">
                {userInfo.length > 0 ? (
                  userInfo.map((user) => {
                    let twitter_username = "";
                    if (user.twitter_username === null) {
                      twitter_username = (
                        <div key={user.login} className="flex">
                          <svg
                            className="fill-color-text-primary-light dark:fill-white opacity-50 mr-[19.12px]"
                            height="18"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" />
                          </svg>
                          <h1
                            key={user.login}
                            className="font-space font-normal text-[15px] opacity-50 text-color-text-primary-light dark:text-white"
                          >
                            Not Available
                          </h1>
                        </div>
                      );
                    } else if (user.twitter_username) {
                      twitter_username = (
                        <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" key={user.login} className="flex hover:underline cursor-pointer" rel="noreferrer">
                          <svg
                            className="fill-color-text-primary-light dark:fill-white mr-[19.12px]"
                            height="18"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" />
                          </svg>
                          <h1 className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white">
                            {user.twitter_username}
                          </h1>
                        </a>
                      );
                    }
                    return twitter_username;
                  })
                ) : (
                  <>
                    <svg
                      className="fill-color-text-primary-light dark:fill-white mr-[19.12px]"
                      height="18"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" />
                    </svg>
                    <h1 className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white">
                      Not Available
                    </h1>
                  </>
                )}
              </div>
              <div className="flex">
                {userInfo.length > 0 ? (
                  userInfo.map((user) => {
                    let blog = "";
                    if (user.blog === "") {
                      blog = (
                        <div key={user.login} className="flex">
                          <svg
                            className="fill-color-text-primary-light dark:fill-white opacity-50 mr-[14.12px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
                              <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
                            </g>
                          </svg>
                          <h1
                            key={user.login}
                            className="font-space font-normal text-[15px] opacity-50 text-color-text-primary-light dark:text-white"
                          >
                            Not Available
                          </h1>
                        </div>
                      );
                    } else if (user.blog) {
                      blog = (
                        <a href={user.blog} key={user.login} target="_blank" className="flex hover:underline cursor-pointer" rel="noreferrer">
                          <svg
                            className="fill-color-text-primary-light dark:fill-white mr-[14.12px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
                              <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
                            </g>
                          </svg>
                          <h1 className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white">
                            {user.blog}
                          </h1>
                        </a>
                      );
                    }
                    return blog;
                  })
                ) : (
                  <>
                    <svg
                      className="fill-color-text-primary-light dark:fill-white mr-[19.12px]"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z" />
                        <path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z" />
                      </g>
                    </svg>
                    <h1 className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white">
                      https://github.com
                    </h1>
                  </>
                )}
              </div>
              <div className="flex">
                {userInfo.length > 0 ? (
                  userInfo.map((user) => {
                    let company = "";
                    if (user.company === null) {
                        company = (
                          <div key={user.login} className="flex">
                            <svg
                              className="fill-color-text-primary-light dark:fill-white opacity-50 mr-[19.12px]"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
                              </g>
                            </svg>
                            <h1
                              key={user.login}
                              className="font-space font-normal text-[15px] opacity-50 text-color-text-primary-light dark:text-white"
                            >
                              Not Available
                            </h1>
                          </div>
                        );
                    } else if (user.company) {
                        company = (
                          <div key={user.login} className="flex">
                            <svg
                              className="fill-color-text-primary-light dark:fill-white mr-[19.12px]"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g>
                                <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
                              </g>
                            </svg>
                            <h1 className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white">
                              {user.company}
                            </h1>
                          </div>
                        );
                    }
                    return company;
                  })
                ) : (
                  <>
                    <svg
                      className="fill-color-text-primary-light dark:fill-white mr-[19.12px]"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z" />
                      </g>
                    </svg>
                    <h1 className="font-space font-normal text-[15px] text-color-text-primary-light dark:text-white">
                      https://github.com
                    </h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
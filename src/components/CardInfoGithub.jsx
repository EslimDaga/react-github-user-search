import OctoCatIcon from "../assets/images/icon-octocat.svg";
import CardInfoGithubOthers from "./CardInfoGithubOthers";

const CardInfoGithub = ({ user, userInfo }) => {
  return (
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
        <CardInfoGithubOthers userInfo={userInfo} />
      </div>
    </div>
  );
};

export default CardInfoGithub;

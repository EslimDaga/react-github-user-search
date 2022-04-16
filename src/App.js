import Toggle from "./components/ToggleMode";
import SearchIcon from "./assets/images/icon-search.svg";
import LocationIcon from "./assets/images/icon-location.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import WebsiteIcon from "./assets/images/icon-website.svg";
import CompanyIcon from "./assets/images/icon-company.svg";

const App = () => {
  return (
    <main className="bg-color-body-light dark:bg-color-body-dark h-screen flex justify-center items-center">
      <div className="max-w-[45.625rem] flex flex-col justify-center gap-9 md:m-auto w-full">
        <div className="flex justify-between h-10 items-center">
          <h1 className="font-space font-bold text-[1.625rem]">devfinder</h1>
          <Toggle />
        </div>
        <div className="relative shadow-input-search rounded-[15px]">
          <div className="absolute top-[23px] left-8">
            <img src={SearchIcon} alt="" />
          </div>
          <input
            type="text"
            className="w-full h-[4.313rem] rounded-[15px] pl-20 placeholder:font-space placeholder:font-normal placeholder:text-lg focus:outline-none"
            placeholder="Search gitHub username..."
          />
          <div className="absolute bottom-[9.5px] right-2">
            <button className="pl-[24px] pr-[23px] py-[12.5px] rounded-[10px] bg-color-primary-light text-white font-space font-bold text-base">
              Search
            </button>
          </div>
        </div>
        <div className="w-full h-[26.188rem] rounded-[15px] shadow-input-search bg-white px-12 pt-11">
          <div className="w-full flex justify-between mb-5">
            <div>
              <h1 className="font-space font-bold text-[26px] text-color-text-default-light">
                The Octocat
              </h1>
              <h3 className="font-space font-normal text-[15px] text-color-primary-light">
                @octocat
              </h3>
            </div>
            <h1 className="font-space font-normal text-[15px] text-color-text-second-light">
              Joined 25 Jan 2011
            </h1>
          </div>
          <div className="mb-8">
            <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">
              This profile has no bio
            </h1>
          </div>
          <div className="w-full pt-[15px] pb-[17px] mb-[37px] px-8 rounded-[10px] bg-color-body-light">
            <div className="grid grid-cols-3">
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light">Repos</h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light">8</h1>
              </div>
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light">Followers</h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light">3938</h1>
              </div>
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light">Followers</h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light">9</h1>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-y-[19px]">
              <div className="flex">
                <img src={LocationIcon} alt="" className="mr-[19.12px]"/>
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">San Fransisco</h1>
              </div>
              <div className="flex">
                <img src={TwitterIcon} alt="" className="mr-[19.12px]"/>
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">Not Available</h1>
              </div>
              <div className="flex">
                <img src={WebsiteIcon} alt="" className="mr-[19.12px]"/>
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">https://github.com</h1>
              </div>
              <div className="flex">
                <img src={CompanyIcon} alt="" className="mr-[19.12px]"/>
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">@github</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
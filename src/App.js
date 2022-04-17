import Toggle from "./components/ToggleMode";
import SearchIcon from "./assets/images/icon-search.svg";
import LocationIcon from "./assets/images/icon-location.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import WebsiteIcon from "./assets/images/icon-website.svg";
import CompanyIcon from "./assets/images/icon-company.svg";
import OctoCatIcon from "./assets/images/icon-octocat.svg";

const App = () => {
  return (
    <main className="bg-color-body-light dark:bg-color-body-dark h-screen flex justify-center items-center">
      <div className="max-w-[45.625rem] md:max-h-[30.063rem] lg:max-h-[26.188rem] flex flex-col justify-center gap-9 md:m-auto w-full">
        <div className="flex justify-between h-10 items-center mx-6 sm:mx-6 md:mx-0 lg:mx-0">
          <h1 className="font-space font-bold text-[1.625rem] text-color-text-third-light dark:text-white">
            devfinder
          </h1>
          <Toggle />
        </div>
        <div className="relative shadow-input-search rounded-[15px] mx-6 sm:mx-6 md:mx-0 lg:mx-0">
          <div className="absolute top-[20px] sm:top-[20px] md:top-[23px] lg:top-[23px] left-4 sm:left-4 md:left-8 lg:left-8">
            <img
              src={SearchIcon}
              alt=""
              className="w-[20.05px] sm:w-[20.05px] md:w-[20.05px] lg:w-[20.05px]"
            />
          </div>
          <input
            type="text"
            className="w-full h-[3.75rem] sm:h-[3.75rem] md:h-[4.313rem] lg:h-[4.313rem] rounded-[15px] pl-[45px] sm:pl-[45px] md:pl-20 lg:pl-20 font-space font-medium text-[13px] sm:text-[13px] md:text-lg lg:text-lg placeholder:font-space placeholder:font-normal md:placeholder:text-lg lg:placeholder:text-lg focus:outline-none"
            placeholder="Search gitHub username..."
          />
          <div className="absolute bottom-[7.5px] sm:bottom-[7.5px] md:bottom-[9.5px] lg:bottom-[9.5px] right-2">
            <button className="pl-[18px] sm:pl-[18px] md:pl-[24px] lg:pl-[24px] pr-[14px] sm:pr-[14px] md:pr-[23px] lg:pr-[23px] py-[12.5px] rounded-[10px] bg-color-primary-light text-white font-space font-bold text-sm sm:text-sm md:text-base lg:text-base">
              Search
            </button>
          </div>
        </div>
        <div className="relative w-auto sm:w-auto md:w-full lg:w-full md:[30.063rem] lg:h-auto rounded-[15px] shadow-input-search bg-white md:pt-10 lg:pt-11 mx-6 sm:mx-6 md:mx-0 lg:mx-0">
          <div className="absolute left-6 sm:left-6 md:left-12 lg:left-12 mt-8 sm:mt-8 md:mt-0 lg:mt-0">
            <img
              src={OctoCatIcon}
              alt=""
              className="w-[70px] sm:w-[70px] md:w-[117px] lg:w-[117px] h-[70px] sm:h-[70px] md:h-[117px] lg:h-[117px] rounded-full bg-color-body-light"
            />
          </div>
          <div className="w-full md:block lg:flex justify-between pl-[113px] sm:pl-[113px] md:pl-[202px] lg:pl-[202px] md:pt-3 lg:pt-0 pr-12 mt-8 sm:mt-8 md:mt-0 lg:mt-0 mb-[23px] sm:mb-[23px] md:mb-0 lg:mb-5">
            <div className="mb-[4px]">
              <h1 className="font-space font-bold text-base sm:text-base md:text-[26px] lg:text-[26px] md:mb-[3px] text-color-text-default-light">
                The Octocat
              </h1>
              <h3 className="font-space font-normal text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] text-color-primary-light">
                @octocat
              </h3>
            </div>
            <h1 className="font-space font-normal text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] text-color-text-second-light">
              Joined 25 Jan 2011
            </h1>
          </div>
          <div className="ml-6 sm:ml-6 md:ml-10 lg:ml-[202px] md:pt-6 lg:pt-0 mb-[23px] sm:mb-[23px] md:mb-8 lg:mb-8 mr-6 sm:mr-6 md:mr-12 lg:mr-12">
            <h1 className="font-space font-normal text-[13px] sm:text-[13px] md:text-[15px] lg:text-[15px] text-color-text-primary-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </h1>
          </div>
          <div className="md:w-auto lg:w-[480px] pt-[18px] sm:pt-[18px] md:pt-[15px] lg:pt-[15px] ml-6 sm:ml-6 md:ml-10 lg:ml-[202px] pb-[17px] mb-6 sm:mb-6 md:mb-[30px] lg:mb-[37px] mr-6 sm:mr-6 md:mr-12 lg:mr-0 px-[15px] sm:px-[15px] md:px-8 lg:px-8 rounded-[10px] bg-color-body-light">
            <div className="grid w-auto sm:w-auto md:w-auto lg:w-auto grid-cols-3 text-center sm:text-center md:text-left lg:text-left">
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light mb-2 sm:mb-2 md:mb-0 lg:mb-0">
                  Repos
                </h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light">
                  8
                </h1>
              </div>
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light mb-2 sm:mb-2 md:mb-0 lg:mb-0">
                  Followers
                </h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light">
                  3938
                </h1>
              </div>
              <div>
                <h1 className="font-space font-normal text-[13px] text-color-text-primary-light mb-2 sm:mb-2 md:mb-0 lg:mb-0">
                  Following
                </h1>
                <h1 className="font-space font-bold text-[22px] text-color-text-default-light">
                  9
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full pl-6 sm:pl-6 md:pl-10 lg:pl-[202px] pr-6 sm:pr-6 md:pr-0 lg:pr-[0px]">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-[19px] mb-12">
              <div className="flex">
                <img
                  src={LocationIcon}
                  alt=""
                  className="mr-[25px] sm:mr-[25px] md:mr-[19.12px] lg:mr-[19.12px]"
                />
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">
                  San Fransisco
                </h1>
              </div>
              <div className="flex">
                <img src={TwitterIcon} alt="" className="mr-[19.12px]" />
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">
                  Not Available
                </h1>
              </div>
              <div className="flex">
                <img src={WebsiteIcon} alt="" className="mr-[19.12px]" />
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">
                  https://github.com
                </h1>
              </div>
              <div className="flex">
                <img src={CompanyIcon} alt="" className="mr-[19.12px]" />
                <h1 className="font-space font-normal text-[15px] text-color-text-primary-light">
                  @github
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
import marker from './location-dot-solid.svg'
const Header = () => {
  return(
      <div>
      {/*    Card   */}
          <div className={"container flex justify-start py-12 w-full md:w-1/4 md:mx-16"}>
              <div className={"shadow-md bg-white p-6 w-auto rounded-md mt-24"}>
                  <p className={"text-2xl font-bold tracking-wide"}>Good Morning</p>
                  <p className={"text-4xl font-extrabold tracking-wide mb-2"}>Let's explore good food near you.</p>
                  <div className={"flex flex-wrap items-stretch w-full h-15 bg-white items-center rounded mb-4 pr-1 border border-gray-200"}>
                      <div className={"flex  justify-center w-15"}>
                          <span
                              className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                          >
                              <span className={marker}></span></span>

                      </div>
                      <input type={"text"} className={"flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-gray-200 h-10 px-3 self-center font-roboto text-sm outline-none"} placeholder={"Type your location"}></input>
                      <div className="flex -mr-px">
              <span
                  className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
              >
                <img className="" src={"https://food.grab.com/static/images/icons/icon-geo-button.svg"} alt={"location"}/>
                </span>
                      </div>
                  </div>

                  <button type={"button"} className={"bg-custom-green p-3 mt-2 w-full rounded-md font-bold tracking-wide text-white hover:bg-custom-green-light"}>Search</button>
              </div>
          </div>
      </div>
  )
}

export default Header;
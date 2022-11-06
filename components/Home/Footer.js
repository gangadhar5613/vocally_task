

function Footer()
{
    return (
      <footer className="bg-blue-950 md:p-6 md:h-1/6 p-6 py-4" id="goingDown">
        <section className="">
            <div className="flex pb-4 md:py-0 flex-col md:flex-row md:items-baseline md:pb-1  justify-center items-center">
              <div className="mb-2">
                <img className="" alt="OpenAuto Logo" src="/images/logo.svg" />
              </div>
              
              <div className="flex justify-between md:mr-3 md:flex md:justify-end  w-full items-center">
                <div className="flex p-4 items-center ">

                  <div className="p-1">
                    <i className="fa-solid text-gray-400 fa-phone"></i>
                  </div>
                  
                  <div className="p-1">
                    <p>
                      <a className="text-gray-300 text-md" href="tel:+7695864558">+7695864558 </a>
                    </p>
                  </div>
                </div>
                  <div className="flex justify-evenly items-center">
                      <div className="p-1">
                        <i className="fa-solid text-gray-400 fa-envelope"></i>
                      </div>
                      <div className="p-1">
                        <p>
                          <a className="text-gray-300 text-md"
                            href="mailto:service@openauto.ca">
                            service@openauto.ca
                          </a>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
        </section>
        <section className="pt-4 md:p-1 md:flex-row md:justify-between md:pb-2 md:items-baseline pb-6 flex flex-col justify-center ">
            <div className="text-center mb-6 md:ml-3">
              <span className="text-gray-400 text-sm">
                Open Auto @ all rights reserved
              </span>
            </div>
            <div className="flex md:hidden text-gray-400 justify-between p-4 items-center">
                        <span>Privacy Policy</span>
                        <span>Terms of User</span>
                        <span>Cookie Policy</span>
            </div>
            <div className="flex mt-6 md:flex-row md:justify-end md:basis-1/2 justify-between items-center ">
              <a href='#'><i className="fa-brands pr-4 fa-facebook-f text-gray-400 text-xl  "></i></a>
              <a href='#'><i className="fa-brands pr-4 fa-twitter text-gray-400 text-xl  "></i></a>
              <a href='#'><i className="fa-brands pr-4 fa-youtube text-gray-400 text-xl  "></i></a>
              <a href='#'><i className="fa-brands pr-4 fa-linkedin text-gray-400 text-xl  "></i></a>
              <a href='#'><i className="fa-brands pr-4 fa-instagram text-gray-400 text-xl "></i></a>
            </div>
        </section>
    </footer>
    )
}


export default Footer;
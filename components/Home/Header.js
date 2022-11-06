


function Header()
{
    return (
        <header className=" flex flex-col  lg:w-full   md:flex-row md:justify-between md:items-center  items-start justify-start p-10 md:p-6">
            <div className="w-2/6 md:w-2/12 ">
                 <img className="w-full" src="/images/logo.svg"></img>
            </div>
           
            <div className="hidden md:basis-1/2 md:w-full      md:flex">
                <div className="flex w-full md:basis-1/4 justify-center items-center ">
                    <div className="p-1">
                         <i class="fa-solid text-gray-400 fa-phone"></i>
                    </div>
                    <div className="p-1  ">
                        <p>
                        <a className="text-gray-300 text-sm" href="tel:+7695864558">
                            +769 586 4558
                        </a>
                        </p>
                    </div>
                </div>
                <div className="flex w-full md:basis-1/4 justify-center items-center ">
                    <div className="p-1 ">
                       <i class="fa-solid text-gray-400 fa-envelope"></i>
                    </div>
                    <div className="p-1">
                        <a
                            className="text-gray-300 text-sm"
                            href="mailto:service@openauto.ca"
                        >
                            service@openauto.ca
                        </a>
                    </div>
                </div>
                <div className="md:w-full md:ml-2 md:basis-2/4 ">
                    <a className="text-gray-400 md:border font-bold md:border-gray-600 md:pl-6 md:pr-6 md:pt-2 md:pb-3 md:rounded-full" href="#">Download the mobile app</a>
                </div>
            </div>
        
        </header>
    )
}


export default Header;
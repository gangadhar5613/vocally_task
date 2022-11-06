import Form from './Form'

function Main()
{
    return (
        <main className='h-fit'>
               <section className="bg-black md:p-8 my-5 md:my-1 md:basis-1/2 py-5 bg-[url('/images/bg-world.png')] bg-center   p-4 flex-col items-center justify-center text-center md:flex md:flex-row  md:justify-between md:items-center   ">
                    <section className=" flex md: md:flex-col md:items-start   h-4/6 flex-col md:text-start   md:w-full items-center justify-start ">
                            <h2 className="text-4xl pb-2 mt-6 md:text-5xl leading-normal md:leading-snug 
                                font-bold text-gray-300  p-1 ">
                                Vehicle Maintenance From The Comfort of Your Home
                            </h2>
                            <p className=" mt-4 md:mt-0 pl-8 font-semibold  pr-8 md:pr-1 md:pl-1 w-full md:text-base text-base mb-2 md:mb-0 p-3 text-gray-400">
                                Open Auto Soothes the hassle of maintaining your vechile and helps
                                you deal with unpected repairs worry-free
                            </p>
                            <Form />
                    </section>

                    <section className=" flex md:flex-col   flex-col mt-8 items-center justify-center">  
                        <div className="w-3/4 md:4/6 ">
                            <img
                            className="w-full md:w-full"
                            src="/images/Pickup_Illustration.png"
                            />
                        </div>
                        <div className='w-3/4  md:flex md:justify-between md:items-center'>
                                <div className=" hidden md:flex ">
                                    <a
                                    href="#goingDown"
                                    className="text-xl border text-white rounded-full   p-2"
                                    >
                                    <i className="fa-solid fa-arrow-down"></i>
                                    </a>
                                </div>
                                <div className=" flex justify-center md:justify-end w-full ">
                                    <i className="fa-brands p-4 fa-facebook-f text-gray-400 text-xl"></i>
                                    <i className="fa-brands  p-4  fa-twitter text-gray-400 text-xl"></i>
                                    <i className="fa-brands  p-4  fa-youtube text-gray-400 text-xl "></i>
                                    <i className="fa-brands  p-4  fa-linkedin text-gray-400 text-xl "></i>
                                    <i className="fa-brands  p-4  fa-instagram text-gray-400 text-xl "></i>
                                </div>
                        </div>
                    </section> 
                         
                </section>
                <article className="flex  md:flex-row md:pt-20 h-full flex-col-reverse p-6 justify-center items-center text-center bg-blue-950">
                    <section className="w-4/6 md:basis-1/3 mt-2 pb-8  h-full ">
                            <div >
                                <img
                                className="w-full "
                                src="/images/pickupservice.png"
                                />
                            </div>
                    </section>

                    <section className="w-full md:basis-1/2 md:pl-32 flex md:text-start md:items-start flex-col   justify-center items-center h-full mb-4 pt-8 ">
                            <h3 className="text-gray-400 md:pb-2 w-4/6 md:w-3/6 leading-normal  text-4xl font-bold">
                                Focused on Time Saving
                            </h3>
                            <p className="text-gray-500 md:text-base text-center md:text-start md:leading-8   md:indent-1     pt-6 p-6 md:p-0 md:pb-4 leading-9  text-xl">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit praesent dis,
                                metus primis platea gravida pellentesque sapien iaculis et cubilia
                                ut, porta interdum volutpat habitasse taciti class porttitor
                                dapibus. Purus duis odio ultricies consequat aliquam fames habitasse
                                quam aliquet, tortor nibh dapibus hac egestas sociis phasellus
                                parturient natoque lectus, sed blandit proin
                            </p>
                            <div className='border  text-center md:w-3/6 font-bold my-3  w-5/6  pt-4 md:pt-3 md:pb-3 pb-4 rounded-full text-gray-400'>
                                <a
                                    className=" "
                                    href="#"
                                >
                                    Download the mobile app
                                </a>
                            </div>
                    </section>
                </article>
                <hr className=" border border-gray-800" />
        </main>
    )
}


export default Main;
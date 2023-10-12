import React from 'react'

const FooterComponent = () => {
  return (
    <div>
        {/* FOOTER OF TRANG CHỦ */}
        <footer className="bg-white dark:bg-gray-900">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0">
                                <a href="https://flowbite.com/">
                                    <img src={require('../assets/images/logoFooter.png')} className="h-28 mr-3 w-60 shadow-2xl" alt="FlowBite Logo" />
                                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                                </a>
                                <div className="text-center">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-black">1900 9034</p>
                                    <p className="text-sm font-semibold text-gray-500 dark:text-black">Tổng đài hỗ trợ 8PM-11PM</p>
                                </div>

                            </div>
                            <div className="grid grid-cols-4 gap-4 sm:gap-4 sm:grid-cols-4">
                                {/* col 1 */}
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Chính sách
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="https://flowbite.com/" className="hover:underline">Chính sách và quy định</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Quy chế hoạt động</a>
                                        </li>
                                        <li>
                                            <a href="https://tailwindcss.com/" className="hover:underline">Bảo mật thông tin</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* col2 */}
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Chúng tôi
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                                                Moun Blog</a>
                                        </li>
                                        <li>
                                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Tuyển dụng</a>
                                        </li>
                                    </ul>
                                </div>
                                {/*col 3  */}
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Đối tác</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="/" className="hover:underline">Đăng ký chủ xe</a>
                                        </li>
                                        <li>
                                            <a href="/" className="hover:underline">Đăng ký GPS/4G</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* col 4 */}
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Tìm hiểu thêm</h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a href="/" className="hover:underline">Hướng dẫn chung</a>
                                        </li>
                                        <li>
                                            <a href="/" className="hover:underline">Hướng dẫn đặt xe</a>
                                        </li>
                                        <li>
                                            <a href="/" className="hover:underline">Hướng dẫn thanh toán</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a
                                href="https://flowbite.com/" className="hover:underline"> </a>. All Rights Reserved.
                            </span>
                            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                                <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    Số GCNĐKKD: 0317307544
                                </a>
                                <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    Ngày cấp: 24-05-22
                                </a>
                                <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    Nơi cấp: Sở kế hoạch và đầu tư TPHCm
                                </a>
                                <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                    </svg>
                                    <span className="sr-only">Discord community</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
    </div>
  )
}

export default FooterComponent
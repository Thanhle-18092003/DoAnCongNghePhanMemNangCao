import React from 'react'

const danhSachCuaHang = () => {
    return (
        <>
            {/* <!-- PAGE 1 CỦA TRANG CỬA HÀNG --> */}
            <div className="pageOneOfTrangCuaHang">
                {/* <!-- logo --> */}
                <div>
                    <img className="h-40 w-80 my-0 mx-auto" src={require('../assets/images/logoFooter.png')} alt="" />
                </div>
                {/* <!-- tiêu đề danh mục  --> */}
                <div className="danhMucXe">
                    <i className='bx bx-arrow-back justify-center'></i>
                    <h1
                        className="font-sans text-2xl font-semibold leading-snug uppercase my-0 mx-auto pt-2">
                        Hệ thống cửa hàng</h1>
                    <i className='bx bx-arrow-back justify-center'></i>
                </div>
                {/* <!-- các item danh mục cửa hàng --> */}
                <div
                    className="my-5 text-lg font-medium text-gray-900 bg-white border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {/* <!-- item 1 --> */}
                    <a href="#" aria-current="true"
                        className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className="w-5/6 flex my-0 mx-auto">
                            <img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={require('../assets/images/garage1.jpg')} />
                            <div
                                className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-black font-bold text-xl mb-2">
                                        518 Cách Mạng Tháng 8 Quận 3
                                    </div>
                                    <div className="text-black text-sm mb-2">
                                        Hotline: 07534564534
                                    </div>
                                    <div className="text-red-600 text-sm mb-2">
                                        Giờ làm việc: 9h sáng đến 12h tối
                                    </div>
                                </div>

                            </div>
                        </div>
                    </a>

                    {/* item 2 */}
                    <a href="#"
                        className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className="w-5/6 flex my-0 mx-auto">
                        <img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={require('../assets/images/garage2.jpg')} />                            
                            <div
                                className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-black font-bold text-xl mb-2">
                                        518 Cách Mạng Tháng 8 Quận 3
                                    </div>
                                    <div className="text-black text-sm mb-2">
                                        Hotline: 07534564534
                                    </div>
                                    <div className="text-red-600 text-sm mb-2">
                                        Giờ làm việc: 9h sáng đến 12h tối
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* item 3 */}
                    <a href="#"
                        className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className="w-5/6 flex my-0 mx-auto">
                        <img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={require('../assets/images/garage1.jpg')} />
                            <div
                                className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-black font-bold text-xl mb-2">
                                        518 Cách Mạng Tháng 8 Quận 3
                                    </div>
                                    <div className="text-black text-sm mb-2">
                                        Hotline: 07534564534
                                    </div>
                                    <div className="text-red-600 text-sm mb-2">
                                        Giờ làm việc: 9h sáng đến 12h tối
                                    </div>
                                </div>

                            </div>
                        </div>
                    </a>

                    {/* item 4 */}
                    <a href="#"
                        className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <div className="w-5/6 flex my-0 mx-auto">
                        <img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24" src={require('../assets/images/garage1.jpg')} />
                            <div
                                className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-black font-bold text-xl mb-2">
                                        518 Cách Mạng Tháng 8 Quận 3
                                    </div>
                                    <div className="text-black text-sm mb-2">
                                        Hotline: 07534564534
                                    </div>
                                    <div className="text-red-600 text-sm mb-2">
                                        Giờ làm việc: 9h sáng đến 12h tối
                                    </div>
                                </div>

                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}

export default danhSachCuaHang
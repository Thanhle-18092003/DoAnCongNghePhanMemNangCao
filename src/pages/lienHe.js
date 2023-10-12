import React from 'react'

const lienHe = () => {
  return (
    <>
                {/* <!-- PAGE 1 CỦA TRANG LIÊN HỆ --> */}
        <div className="pageOneOfLienHe">
            {/* <!-- logo --> */}
            <div>
                <img className="h-40 w-80 my-0 mx-auto" src={require('../assets/images/logoFooter.png')} alt="logo" />
            </div>
            <div className="danhMucXe">
                <i className='bx bx-arrow-back justify-center'></i>
                <h1
                    className="font-sans text-2xl font-semibold leading-snug uppercase my-0 mx-auto pt-2">
                    Liên Hệ</h1>
                <i className='bx bx-arrow-back justify-center'></i>
            </div>
            {/* <!-- form liên hệ --> */}
            <div className="text-center mt-5">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        Vui lòng liên hệ
                    </span> với chúng tôi
                </h1>                
                <div className="grid grid-cols-3 grid-rows-1 gap-4">
                    {/* <!-- logo thương hiệu --> */}
                    <div className="col-span-1">
                        <img className="rounded-full w-96 h-96 my-5 mx-16" src={require('../assets/images/logothuonghieu.png')}
                            alt="image description" />
                    </div>
                    {/* <!-- form nhập thông tin  -->/ */}
                    <div className="col-span-2 my-10">
                        <form>
                            <div className="mb-6 flex">
                                <label for="password"
                                    className="block w-60 mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                                    Họ và Tên</label>
                                <input type="password" id="password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required />
                            </div>
                            <div className="mb-6 flex">
                                <label for="repeat-password"
                                    className="block w-60 mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                                    Số điện thoại</label>
                                <input type="password" id="repeat-password"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    required />
                            </div>
                            <div className="mb-6 flex">     
                                <label for="email"
                                    className="block w-60 mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                                    Gmail liên hệ
                                </label>
                                <input type="email" id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="name@flowbite.com" required />
                            </div>
                            <div className="mb-6 flex">     
                                <label for="email"
                                    className="block w-60 mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                                    Thông tin thắc mắc
                                </label>
                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                            </div>
                            
                            <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Gửi Yêu Cầu</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

        {/* <!-- PAGE 2 CỦA TRANG LIÊN HỆ --> */}
        <div className="pageHaiOfLienHe bg-black p-5">
            <div
                className="my-5 mx-auto relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-6">
                    <h6
                        className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        Moon chào bạn
                    </h6>
                    <h4
                        className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        BẠN MUỐN TÌM HIỂU CÁCH ĐẶT XE ???
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Hơn 5,000 chủ xe đang cho thuê hiệu quả trên MiotoĐăng kí trở thành đối tác của chúng tôi
                        ngay hôm nay để gia tăng thu nhập hàng tháng.
                    </p>
                    <a className="flex" href="#">
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Tìm Hiểu Thêm
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                    </a>
                </div>
                <div
                    className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img src={require('../assets/images/image2OfPage5.png')} alt="image" className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    </>
  )
}

export default lienHe
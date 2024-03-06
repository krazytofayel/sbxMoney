import { Link } from "react-router-dom"
import error from '../../../public/404.png'
const NotFoundpage = () => {
  return (
   <>
   <section className="bg-gradient-to-b from-[#cdffdb] to-transparent ">
    <div >
        <div className="flex justify-center items-center h-screen">
            <div className="text-center p-2 lg:p-0">
            {/* <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 transition-all duration-1000 animate-bounce">404</h1> */}
            <img src={error} className="transition-all duration-1000 animate-bounce" alt="" />
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something &#39;s missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, we can&#39;t find that page. You&#39;ll find lots to explore on the home page. </p>
           <Link to={"/"} className="inline-flex text-white bg-green-400 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Back to Homepage</Link> 
            </div>
        </div>   
    </div>
</section></>
  )
}

export default NotFoundpage
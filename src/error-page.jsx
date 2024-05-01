import { useRouteError } from "react-router-dom";
import Error from './assets/error.svg'
export default function ErrorPage() {
 

  return (
    <div className='relative'>
      <img src={Error} alt='error'/>
      <div className='absolute top-0 md:text-2xl right-0 flex flex-col text-white font-black justify-center items-center bg-gray-900/30  h-full w-full'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
}
import Image from "next/image";
import headshot from "../../public/headshot.jpg";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 justify-center items-center bg-[#1E1E1F] bg-cover bg-center">
      <div className="mx-5 mt-5 p-8 flex flex-col text-center justify-center items-center bg-[#222223] rounded-lg border border-gray-600 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
        <Image
          className="mb-4 rounded-2xl"
          src={headshot}
          alt="profile picture"
        />
        <h1 className="text-4xl mb-1">Pedro Lopez</h1>
        <h2 className="text-xl">Software Engineer</h2>
      </div>
      <div className="col-span-2">
        <div className="h-[10rem] grid grid-cols-4 mx-5 mt-5 bg-[#222223] p-8 rounded-lg border border-gray-600 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
          <div className="p-1 flex flex-col justify-center items-center">
            <h2 className="text-2xl lg:text-4xl">8th Light</h2>
            <p className="text-sm lg:text-md">
              Sept 2021 -
              <wbr />
              &nbsp;Apr 2025
            </p>
          </div>
          <div className="col-span-3 flex flex-col justify-center items-center border-l border-[rgb(61,61,62)]">
            <h2 className="text-3xl">Job description</h2>
            <p>Job Desccription</p>
          </div>
        </div>
        <div className="h-[10rem] grid grid-cols-4 mx-5 mt-5 bg-[#222223] p-8 rounded-lg border border-gray-600 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
          <div className="p-1 flex flex-col justify-center items-center">
            <h2 className="text-2xl lg:text-4xl">8th Light</h2>
            <p className="text-sm lg:text-md">
              Sept 2021 -
              <wbr />
              &nbsp;Apr 2025
            </p>
          </div>
          <div className="col-span-3 flex flex-col justify-center items-center border-l border-[rgb(61,61,62)]">
            <h2 className="text-3xl">Job description</h2>
            <p>Job Desccription</p>
          </div>
        </div>
        <div className="h-[10rem] grid grid-cols-4 mx-5 mt-5 bg-[#222223] p-8 rounded-lg border border-gray-600 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
          <div className="p-1 flex flex-col justify-center items-center">
            <h2 className="text-2xl lg:text-4xl">8th Light</h2>
            <p className="text-sm lg:text-md">
              Sept 2021 -
              <wbr />
              &nbsp;Apr 2025
            </p>
          </div>
          <div className="col-span-3 flex flex-col justify-center items-center border-l border-[rgb(61,61,62)]">
            <h2 className="text-3xl">Job description</h2>
            <p>Job Desccription</p>
          </div>
        </div>
        <div className="h-[10rem] grid grid-cols-4 mx-5 my-5 bg-[#222223] p-8 rounded-lg border border-gray-600 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
          <div className="p-1 flex flex-col justify-center items-center">
            <h2 className="text-2xl lg:text-4xl">8th Light</h2>
            <p className="text-sm lg:text-md">
              Sept 2021 -
              <wbr />
              &nbsp;Apr 2025
            </p>
          </div>
          <div className="col-span-3 flex flex-col justify-center items-center border-l border-[rgb(61,61,62)]">
            <h2 className="text-3xl">Job description</h2>
            <p>Job Desccription</p>
          </div>
        </div>
      </div>
    </div>
  );
}

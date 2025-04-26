import Image from "next/image";
import headshot from "../../public/headshot.jpg";
import jobs from "../utils/resume_jobs.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161617] bg-cover bg-center">
      <div className="h-[68px]"></div>
      <main className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
        <div className="mx-5 mt-3 p-8 flex flex-col text-center justify-center items-center bg-[#222223] rounded-lg border border-gray-600 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]">
          <Image
            className="mb-4 rounded-2xl"
            src={headshot}
            alt="profile picture"
          />
          <h1 className="text-4xl mb-1">Pedro Lopez</h1>
          <h2 className="text-xl">Software Engineer</h2>
        </div>
        <div className="col-span-2 mb-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="h-[11rem] grid grid-cols-4 mx-5 mt-3 bg-[#222223] p-2 rounded-lg border border-gray-600 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),_inset_-4px_-4px_8px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl lg:text-4xl">{job.company}</h2>
                <p className="text-[11px] md:text-sm lg:text-md">
                  {job.tenure}
                </p>
              </div>

              <div className="col-span-3 flex flex-col justify-center items-center border-l border-[rgb(61,61,62)]">
                <h2 className="text-xl lg:text-3xl">{job.title}</h2>
                <p className=" mt-2 mx-4 text-justify text-[13px] md:text-sm">
                  {job.jobSummary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

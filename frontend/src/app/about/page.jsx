import React from 'react'

const page = () => {
  return (
    <div>
      <>
  {/* Testimonials */}
  <div className="bg-black">
    <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      <blockquote className="max-w-4xl mx-auto">
        <p className="mb-6 md:text-lg">
          <span className="font-semibold text-lime-400">Philip,</span>{" "}
          <span className="text-neutral-500">CEO at Day Spa</span>
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl md:leading-normal text-white">
          I'm absolutely floored by the level of care and attention to detail
          the team at Preline have put into this project and for one can
          guarantee that we will be a return customer.
        </p>
        <footer className="mt-6 md:mt-10">
          <div className="border-neutral-700">
            <button
              type="button"
              className="group inline-flex items-center gap-x-3 text-neutral-400 text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="size-8 md:size-10 flex flex-col justify-center items-center bg-white text-black rounded-full group-hover:bg-lime-400 group-focus:bg-lime-400">
                <svg
                  className="shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                </svg>
              </span>
              Watch the Video
            </button>
          </div>
        </footer>
      </blockquote>
    </div>
  </div>
  {/* End Testimonials */}
</>
<>
  {/* Image Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
    <a className="group block relative overflow-hidden rounded-lg" href="#">
      <img
        className="w-full size-40 object-cover bg-gray-100 rounded-lg"
        src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Project"
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
          <svg
            className="shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-xs">View</span>
        </div>
      </div>
    </a>
    <a className="group block relative overflow-hidden rounded-lg" href="#">
      <img
        className="w-full size-40 object-cover bg-gray-100 rounded-lg"
        src="https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Project"
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
          <svg
            className="shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-xs">View</span>
        </div>
      </div>
    </a>
    <a className="group block relative overflow-hidden rounded-lg" href="#">
      <img
        className="w-full size-40 object-cover bg-gray-100 rounded-lg"
        src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Project"
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
          <svg
            className="shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-xs">View</span>
        </div>
      </div>
    </a>
    <a className="group block relative overflow-hidden rounded-lg" href="#">
      <img
        className="w-full size-40 object-cover bg-gray-100 rounded-lg"
        src="https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Project"
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
          <svg
            className="shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-xs">View</span>
        </div>
      </div>
    </a>
    <a className="group block relative overflow-hidden rounded-lg" href="#">
      <img
        className="w-full size-40 object-cover bg-gray-100 rounded-lg"
        src="https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Project"
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
          <svg
            className="shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-xs">View</span>
        </div>
      </div>
    </a>
    <a className="group block relative overflow-hidden rounded-lg" href="#">
      <img
        className="w-full size-40 object-cover bg-gray-100 rounded-lg"
        src="https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Project"
      />
      <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
        <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg">
          <svg
            className="shrink-0 size-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-xs">View</span>
        </div>
      </div>
    </a>
  </div>
  {/* End Image Grid */}
</>

    </div>
  )
}

export default page

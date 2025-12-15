"use client"

export default function ResponsiveTask() {
  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        bg-white
        sm:bg-blue-100
        md:bg-green-100
        lg:bg-yellow-100
        xl:bg-purple-100
        2xl:bg-red-100
        transition-colors duration-500
      "
    >
      <div className="text-center space-y-6">
        <p className="text-2xl font-bold text-gray-800">
          Responsive Task Practical
        </p>

        <img
          src="/image.png"  
          alt="Sample"
          className="hidden md:block mx-auto w-40 h-40 object-cover rounded-lg shadow-lg"
        />
        <button className="hidden lg:inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition">
          Click Me
        </button>

      </div>
    </div>
  )
}

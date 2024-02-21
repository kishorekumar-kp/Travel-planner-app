const TheNavbar = () => {
  return (
    <div className="bg-dark">
        <div className="px-40 py-4 flex justify-between">
            <h1 className="text-3xl font-semibold text-gray-800 items-center">Own-Tourism</h1>
            <ul className="flex space-x-10 items-center font-medium text-lg text-gray-800 ">
                <li className="hover:text-violet-800">Home</li>
                <li className="hover:text-violet-800">Make Planner</li>
                <li className="hover:text-violet-800">View Planner</li>
            </ul>
        </div>
    </div>
  )
}

export default TheNavbar
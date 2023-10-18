const Sidebar = () => {
    return (
      <>
        <aside className="fixed top-0 left-0 w-64 h-full" aria label="Sidenav">
          <div className="overflow-y-auto py-5 px-3 h-full bg-[#040440] border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
            <li>
                <a href="#" className="flex items-center p-2 text-xl font-bold rounded-lg text-white dark:hover:bg-gray-700 group">
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg text-white dark:hover:bg-gray-700 group">
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group dark:text-white dark:hover:bg-gray-700">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Product</span>
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
                </button>
              </li>
              <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Customers</span>
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </li>
              <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Income</span>
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </li>
              <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Promote</span>
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </li>
              <li>
                <button type="button" className="flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75 group dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Help</span>
                  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </li>
            </ul>
            
          </div>
        </aside>
      </>
    )
  }
  
  export default Sidebar;
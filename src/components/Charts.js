import BarChartPlot from "./BarChartPlot";
import PieChartPlot from "./PieChartPlot";
import coin from "../images/coin.png";
import img from "../images/documents.png";
import img1 from "../images/revenue.png";
import img2 from "../images/money-bag.png";

const Charts = () => {
  return (
    <>
      <div className="bg-[#f5f6f8]">
        <section>
          <div className="flex m-4 gap-2">
            <div className="flex-1 px-2 bg-white shadow rounded h-300px flex items-center">
              <img
                src={coin}
                alt="Description"
                style={{ width: "40%", height: "80%", marginRight: "20px" }}
                className="flex-none" 
              />
              <div className="flex-1">
                <p className="text-gray-900 font-bold">Total returns</p>
                <p className="py-4 font-bold">$30,000 </p>
                <p className="text-green-300">+34.5%</p>
              </div>
            </div>

            <div className="flex-1 px-2 justify-center w-16 bg-white shadow rounded max-h-300px flex items-center">
            <img
                src={img}
                alt="Description"
                style={{ width: "40%", height: "60%", marginRight: "20px" }}
                className="flex-none" 
              />
              <div className="flex-1">
                <p className="text-gray-900 font-bold">Total sales</p>
                <p className="py-4 font-bold">$30,000 </p>
                <p className="text-green-300">+34.5%</p>
              </div>
            </div>
            <div className="flex-1 px-2 justify-center w-16  bg-white shadow rounded max-h-300px flex items-center">
            <img
                src={img1}
                alt="Description"
                style={{ width: "40%", height: "60%", marginRight: "20px" }}
                className="flex-none" 
              />
              <div className="flex-1">
                <p className="text-gray-900 font-bold">Total subscriptions</p>
                <p className="py-4 font-bold">$30,000 </p>
                <p className="text-green-300">+34.5%</p>
              </div>
            </div>
            <div className="flex-1 px-2 justify-center w-16  bg-white shadow rounded h-300px flex items-center">
            <img
                src={img2}
                alt="Description"
                style={{ width: "40%", height: "60%", marginRight: "20px" }}
                className="flex-none" 
              />
              <div className="flex-1">
                <p className="text-gray-900 font-bold">Total returns</p>
                <p className="py-4 font-bold ">$30,000 </p>
                <p className="text-green-300">+34.5%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex my-4 px-4 gap-3">
          <div className="w-3/4 h-[300px] bg-white rounded">
            <BarChartPlot />
          </div>

          <div className=" w-1/4 h-[300px] bg-white rounded">
            <PieChartPlot />
          </div>
        </section>

        <section className="flex my-4 px-4 gap-2">
          <div className=" w-full h-[250px] bg-white rounded">
            <div className="flex justify-between items-center">
              <h2 className="text-lg text-black px-6 py-3 font-bold">
                Product Sell
              </h2>
              <div className="flex items-center justify-end">
                <input
                  type="text"
                  style={{ width: "200px" }}
                  className="bg-gray-100 text-gray-100 border-white px-4 py-2 rounded-md mr-0"
                  placeholder="Search"
                />
                <input
                  type="text"
                  style={{ width: "200px" }}
                  className="bg-gray-100 text-gray-100 border-white px-4 py-2 rounded-md  mx-2"
                  placeholder="Last 30 days"
                />
              </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-grey-500 uppercase">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4">120</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-white">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">White</td>
                  <td class="px-6 py-4">$4000</td>
                  <td class="px-6 py-4">150</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">Black</td>
                  <td class="px-6 py-4">$99</td>
                  <td class="px-6 py-4">100</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">Black</td>
                  <td class="px-6 py-4">$99</td>
                  <td class="px-6 py-4">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Charts;

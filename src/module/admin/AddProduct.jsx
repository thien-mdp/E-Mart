import { Button } from "antd";
import { Fragment, useState } from "react";


const AddProduct = () =>{
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => setOpenModal(!openModal);

    return (
        <form class="w-full">
            <div class="w-full px-3 mt-6 mb-6 md:mb-0">
                <div className="mb-5">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Name Product
                    </label>
                    <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Tên sản phẩm"/>    
                </div>
                <div className="mb-5">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Product Type</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>---</option>
                        <option>3D Printer</option>
                        <option>Control Board</option>
                        <option>Extruder & Hotend</option>
                        <option>Screen & LCD</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Description
                    </label>
                    <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Mô tả"/>
                </div>
                <div className="mb-5">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Quantity</label>
                <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Số lượng"/>
                </div>
                <div className="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="product_img">Image Product</label>
                    <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="product_img_help" id="product_img" type="file"/>
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="bg-gray-300 hover:bg-gray-500 hover:text-white hover:border-transparent mr-5">Cancel</Button>
                <Button className="bg-blue-300 hover:bg-blue-500 hover:border-transparent hover:text-white">Add Product</Button>
            </div>
        </form>
    );
}
export default AddProduct;
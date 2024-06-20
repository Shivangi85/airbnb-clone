import React from "react";
import { Provider, LikeButton } from "@lyket/react";


const Rental = ({title, image, price}) => {
    return (
        <div class="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={image} alt="Product" class="h-80 w-80 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <p class="text-lg font-bold text-black truncate block capitalize">{title}</p>
                <span class="text-gray-400 mr-3 uppercase text-xs">Mountain Views</span>
                <p class="text-gray-400 mr-3 uppercase text-xs">27 Jun - 2 Jul</p>

                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">₹{price}</p>

                        <p class="text-sm text-gray-600 cursor-auto ml-2">night</p>
                        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa" className="">

                        <LikeButton
                            namespace="my-blog-post"
                            id="how-to-beat-me-at-chess"
                            component={LikeButton.templates.Twitter}
                        />
                        </Provider>

                </div>
            </div>
        </a>
    </div>
    );
};

export default Rental;

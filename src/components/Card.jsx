import { darkTheme } from "../theme/theme.js";
import { A } from "@solidjs/router";

export default (props) => {
    return (
        <div class=" rounded-xl px-4 py-4 mx-4 h-100 w-90 block relative font-serif shadow-md hover:shadow-2xl"
            classList={
                {
                    "bg-blue-900 text-white shadow-inner": darkTheme(),
                    "bg-white": !darkTheme()
                }
            }
        >
            <h2 class="flex justify-center">{props.title}</h2>
            <p class="flex justify-center mt-4">{props.content}</p>
            <div class="flex justify-center absolute bottom-4 inset-x-0">
                <A href={"/product/" + props.id} class="flex justify-center w-30 px-5 py-1 bg-blue-300 text-white rounded-2xl shadow-md hover:cursor-pointer transform hover:shadow-xl hover:scale-105 transition ease-out duration-400"
                    classList={{ "bg-sky-950": darkTheme() }}
                >read more</A>
            </div>
            {props.children}

        </div>
    );
};
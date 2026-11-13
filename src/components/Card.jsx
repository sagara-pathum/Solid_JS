export default (props) => {
    return (
        <div class="bg-white rounded-xl px-4 py-4 mx-4 h-60 block relative font-serif mt-6  w-150 shadow-md hover:shadow-2xl">
            <h2 class="flex justify-center">{props.title}</h2>
            <p class="flex justify-center mt-5">{props.content}</p>
            <div class="w-full flex justify-center absolute bottom-6">
                <a href="#" class="flex justify-center w-30 px-5 py-1 bg-blue-300 text-white rounded-2xl shadow-md hover:cursor-pointer transform hover:shadow-xl hover:scale-105 transition ease-out duration-400">read more</a>
            </div>
        </div>
    );
};
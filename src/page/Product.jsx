import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";

const fetchProduct = async (id) => {
    const res = await fetch('http://localhost:4000/products/' + id);
    const dataObj = await res.json();
    return dataObj;
}

export default () => {

    const param = useParams();
    const [product] = createResource(() => param.id, fetchProduct);

    return (
        <div>
            <Show when={product()} fallback={<div>Loading product...</div>}>
                <div>
                    <h1>{product().title}</h1>
                    <p>{product().description}</p>
                </div>
            </Show>
        </div>
    );
}
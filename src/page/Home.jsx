import Card from '../components/Card';
import { darkTheme } from '../theme/theme.js';
import { createResource, Show, For } from "solid-js";

const content_1 = "This tutorial introduces Solid.js, a high-performance JavaScript framework. It explains how Solid.js achieves superior reactivity without a virtual DOM, making it a faster, intuitive alternative to frameworks like React.";
const content_2 = "This tutorial guides you through creating a new SolidJS application, explains the core project file structure , and demonstrates how to run the development server locally.";
const content_3 = "This video explains that SolidJS applications are built using reusable components, which are functions returning JSX templates. It demonstrates nesting, naming conventions, and how components efficiently manage application state.";

const fetchProducts = async () => {
    const res = await fetch('http://localhost:4000/products');
    const dataObj = await res.json();
    return dataObj;
}

export default () => {

    const [products] = createResource(fetchProducts);

    return (
        <div class="site_body_mid">
            <p>this is body mid</p>
            <h2 class="font-bold font-serif p-4"
                classList={{
                    "text-gray-100": darkTheme(),
                    "text-gray-700": !darkTheme()
                }}
            >Learnings so far</h2>
            <div class="grid grid-cols-3 gap-y-8"> {/* cards go here */}
                <Show when={products()} fallback={<p>Loading Cards</p>}>
                    <For each={products()}>
                        {(product) => (
                            <Card title={product.title} content={product.description} />
                        )}
                    </For>
                </Show>
                <Card title="What is Solid?" content={content_1} />
                <Card title="Making a New Solid App" content={content_2} >
                    <p>I can print children as well.</p>
                </Card>
                <Card title="Components" content={content_3} />
            </div>
            <p>{console.log(products(), products.loading)}</p>
        </div >
    )
}
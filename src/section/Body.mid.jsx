import Card from '../components/Card';

const content_1 = "This tutorial introduces Solid.js, a high-performance JavaScript framework. It explains how Solid.js achieves superior reactivity without a virtual DOM, making it a faster, intuitive alternative to frameworks like React.";
const content_2 = "This tutorial guides you through creating a new SolidJS application, explains the core project file structure , and demonstrates how to run the development server locally.";
const content_3 = "This video explains that SolidJS applications are built using reusable components, which are functions returning JSX templates. It demonstrates nesting, naming conventions, and how components efficiently manage application state.";

export default () => {
    return (
        <div class="site_body_mid">
            <p>this is body mid</p>
            <h2 class="text-gray-700 font-bold font-serif p-4">Learnings so far</h2>
            <div class="flex justify-between"> {/* cards go here */}
                <Card title="What is Solid?" content={content_1} />
                <Card title="Making a New Solid App" content={content_2} />
                <Card title="Components" content={content_3} />
            </div>

        </div>
    );
}
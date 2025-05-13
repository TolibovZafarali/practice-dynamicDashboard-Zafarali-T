export default function Greeting() {
    let name = "John Doe";

    return (
        <header>
            <p>{new Date().toLocaleDateString()}</p>
            <h1>Welcome, {name}</h1>
        </header>
    );
}
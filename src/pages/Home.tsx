import "../pages/Home.css"

export default function Home() {
    return (
        <div className="page-content">
            <figure className="center-image">
                <img src="pretty-pizza.jpg" alt="A very pretty pizza, much pizazz" />
                <figcaption>Image by Ivan Torres from unsplash.com</figcaption>
            </figure>
            <p className="center-text">
                The home of Pizza's with Pizazz!
            </p>
        </div>
    )
}
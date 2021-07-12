import './index.css';

const Home = () => {
    const imgSrc = "https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif";

    return (
        <div>
            <h1>Test Giphy on React App</h1>
            <form>
                <input type="text"/>
                <button type="submit" className="button">Submit</button>
            </form>
            <br/>
            <img src={imgSrc} alt="giphy"/>
        </div>
    );
};

export default Home;
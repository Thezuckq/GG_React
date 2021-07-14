import './index.css';

const GiphyComp = () => {
    const gif = {
        id: '4HrBfVJJveBNS9ytSk',
        title: 'Nintendo Plotting GIF by Gaming GIFs',
        uploadedDate: '2018-04-03 15:21:50',
        url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
        webp: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/giphy.webp?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=giphy.webp&ct=g',
      }

    return (
        <div>
            <h1>Test Giphy on React App</h1>
            <form>
                <input type="text"/>
                <button type="submit" className="button">Submit</button>
            </form>
            <br/>
            <img src={gif.url} alt="giphy"/>
            <p>{gif.title}</p>
            <p>{gif.uploadedDate}</p>
        </div>
    );
};

export default GiphyComp;
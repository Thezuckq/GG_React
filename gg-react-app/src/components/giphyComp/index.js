import './index.css';
import data from '../../data/index';

const GiphyComp = () => {
    const renderGifs = data =>
        data
          .filter(item => item.rating === 'g')
          .map(item => 
            <li key={item.id}>
                <h2>{item.title}</h2>
                <img src={item.url} alt={item.title}/>
            </li>);
    return (
        <div>
            <ul>{renderGifs(data)}</ul>
        </div>
    );
};

export default GiphyComp;
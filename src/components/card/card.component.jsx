import './card.styles.css';

const Card = ({monster}) => {
    const { name, id, actor } = monster;

    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set1&size=180x180`} />
            <h2 className="card-title"> {name}</h2>
            <p className="card-subtitle">{actor}</p>
        </div>
    )
    
}

export default Card;
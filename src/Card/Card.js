import './Card.css';

const Card = ({idCharacter, imgCharacter, nameCharacter}) => {
    return(
        <div className='container'>
            <img id={idCharacter} src={imgCharacter} className='imgCharacter'></img>
            <p>{nameCharacter}</p>
        </div>
    )
}

export default Card;
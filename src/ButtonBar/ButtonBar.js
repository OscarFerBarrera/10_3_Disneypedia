import './ButtonBar.css';

const ButtonBar = ({previousPage,numberPage, nextPage, }) => {
    return (
        <div className='contenedor__button'>
            <button className='button__style' onClick={previousPage}>Anterior</button>
            
            <h3 className='numberPage'>{numberPage}</h3>
            
            <button className='button__style' onClick={nextPage}>Siguente</button>
        </div>
    );

}

export default ButtonBar;
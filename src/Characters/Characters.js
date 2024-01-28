import './Characters.css';
import ButtonBar from '../ButtonBar/ButtonBar';
import Card from '../Card/Card';
import React, { useEffect, useState } from "react";
// import ButtonBar from '../ButtonBar/ButtonBar';

const API_URL = "https://api.disneyapi.dev/character?page=";

const CharacterList = () => {

    // Estado para almacenar la lista de caracteres
    const [characterList, setCharacterList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [lastPage, setLastPage] = useState();

    // const [loading, setLoading] = useState(true)
    // const π[firstPage, setFirstPage] = useState(1);

    const next = () => {
        (pageNumber !== lastPage) ? setPageNumber(pageNumber + 1) : alert('No hay mas paginas')
    }
    const previous = () => {
        (pageNumber !== 1) ? setPageNumber(pageNumber - 1) : alert('Estas en la primera pagina')
    }

    // setLoading(true)

    React.useEffect(() => {

        // Llamada a la API
        fetch(`${API_URL}${pageNumber}`)
            .then((response) => response.json())
            .then((data) => {
                setCharacterList(data.data);
                //console.log('DATA:', data.data)
                //console.log('DATA:', data)
            })
            .catch((error) => {
                // setLoading(false)
                console.log('Error fetching the API: ' + error)
            })

    }, [pageNumber]);

    return (
        <div>
            <ButtonBar nextPage={next} numberPage={pageNumber} previousPage={previous} ></ButtonBar>
            
            <div className='Main'>
                {
                    characterList.map((character) => {

                        let nameCharacter = character?.name
                        let img_Character = character?.imageUrl
                        let id__Character = character?._id

                        if(img_Character !== undefined){
                            return (
                                <Card
                                    idCharacter={id__Character}
                                    imgCharacter={img_Character}
                                    nameCharacter={nameCharacter}></Card>
                            )
                        }
                    })
                }
            </div >
        </div>

    );

}

export default CharacterList;

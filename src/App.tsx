import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./data/characters.ts";
import CharacterGallery from "./components/CharacterGallery.tsx";

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <CharacterGallery  characters={characters}/>
        </>
    )
}

export default App

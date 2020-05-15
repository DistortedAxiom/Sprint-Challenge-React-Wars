// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import CharacterCard from './CharacterCard';
import Search from './Search';

const url = 'https://swapi.py4e.com/api/'
const api_key = 'people/'

export default function Character() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState([])

    useEffect(() => {
        axios.get(url + api_key)
        .then((res) => {
            setData(res.data.results);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);



    const filterCharacter = (data) => {
        return data.filter((charObj) => {
            if(!searchTerm) {
                return charObj;
            }
            if(charObj.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return charObj;
            }
        })
    }

    var result = filterCharacter(data);

    return (
        <div>
            <Search updateSearchTerm={setSearchTerm}/>
        <div className="character-list">
        {result.map((el, i) => (
            <CharacterCard data={el} key={i} />
        ), [])}
        </div>
        </div>
    )

}

/*

            {data.map((el, i) => (
                <CharacterCard data={el} key={i} />
            ), [])}
*/

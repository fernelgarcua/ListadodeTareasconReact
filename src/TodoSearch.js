import './ToDoSearch.css'
import React from 'react';

function TodoSearch (){
    const [searchValue, setSearchValue] = React.useState('');

    console.log('Los usuarios desean buscar: '+searchValue)
    return (
      <input 
        placeholder="Agregar un ToDo" 
        className="TodoSearch"
        value={searchValue}
        onChange={
          (event) => {
            setSearchValue(event.target.value)
                        
          }
        }
      />
    );
}

export {TodoSearch}
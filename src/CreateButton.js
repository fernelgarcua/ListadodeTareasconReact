import './CreateButton.css'

function CreateButtonTodo (){
    return (
      
      <button 
        className="CreateTodoButton"
        onClick={
          (event) => {
            console.log('Le diste click')
             console.log(event)
          }
        }
      >+</button>
    );
}

export {CreateButtonTodo};
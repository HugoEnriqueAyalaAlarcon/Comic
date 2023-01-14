import React,{useState , useEffect} from "react";

/**componentes */
import Card from "./componets/Cards/Card"
import Button from "./componets/Button/Button";


function App() {
  const [itemsId, setItemsId] = useState (70); //estado para el ID
  const [loading, setLoading] = useState(true); //estado para el load
  const [items, setItems] = useState([]); //estado para la tada

  useEffect(()=>{    //cuando se cambie el id consegir nueva personajes
    getItems(itemsId);
  }, [itemsId])


  async function getItems (id){ // funcion para la consegir la data
    const response = await fetch (`https://www.superheroapi.com/api.php/5812728242155150/${id}`) //busca la datos 
    const data = await response.json();
    setItems(data);
    setLoading(false);
  }

  
  return (
    <div className="App">
      <Card
      loading={loading}
      items={items}
      />
        <div className="btn-container"> 
          <Button 
          text="<< Anterior" 
          handleClick={()=> {
            (itemsId===1) ?    //preunta si el id es uno
            setItemsId(1):  //si ** id queda en 1
            setItemsId(itemsId-1); //no id -1
          }}
          />
         <h1>{items.name}</h1>
          <Button 
          text="Siguiente >>"
          handleClick={()=> {setItemsId(itemsId+1)}}
          />
        </div>
    </div>
  );
}

export default App;

import { useContext } from "react"
import { ItemContest } from "../itemsContext/itemsContext";

const Items = () => {
    const [itemList, deleteItem] = useContext(ItemContest);
    console.log('Items', itemList);
    return <>
        {itemList && itemList.map((item, index) => {
            return <><p key={index}>{item.title}</p>  <button onClick={()=>{
                deleteItem(item)
            }}>Delete</button></> 
        })}
    </>
}

export default Items
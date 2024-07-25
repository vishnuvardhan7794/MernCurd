import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { ItemContest } from './itemsContext/itemsContext';
import ConfirmationModal from './confirmationModal/confirmationModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AppRoutes from './routes/routes';

let initialState = {
  showModal: false,
  itemDetails: null
}

function reducer(state, action) {
  switch (action.type) {
    case 'showModal': {
      return { ...state, ...{ showModal: action.payload } }
    }
    case 'itemDetails': {
      return { ...state, ...{ itemDetails: action.payload } }
    }
    case 'updateData': {
      return {
        ...state, ...{
          itemDetails: action.payload.itemDetails,
          showModal: action.payload.showModal
        }
      }
    }
    default:
      break;
  }
}

function App() {
  const [itemsList, SetItemData] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteItem = (item) => {
    dispatch({
      type: 'updateData',
      payload: {
        itemDetails: item,
        showModal: true
      }
    })
  }

  const ok = (data) => {
    cancel()
    const updatedList = itemsList.filter((itm) => itm.title !== data.title);
    SetItemData(updatedList);
  }

  const cancel = () => {
    dispatch({
      type: 'updateData',
      payload: {
        itemDetails: null,
        showModal: false
      }
    })
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      return res.data.filter((post) => post.id % 2 === 1)
    }).then((res) => {
      console.log('res', res)
      SetItemData(res)
    })
  }, [])

  return (
    <div className="App">
      <ItemContest.Provider value={[itemsList, deleteItem]}>
        <AppRoutes></AppRoutes>
      </ItemContest.Provider>
      {state.showModal && <ConfirmationModal ok={ok} cancel={cancel} data={state.itemDetails} />}
    </div>
  );
}

export default App;

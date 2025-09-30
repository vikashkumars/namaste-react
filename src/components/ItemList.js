import {useDispatch} from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleItem =(item) =>{
    //Dispatch an action onclick of add
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 text-left border-gray-400 border-b-3 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="">{item.card.info.name}</span>
              <span>
                {" "}
                -💲
                {item.card.info.price
                  ? item.card.info.price / 1000
                  : item.card.info.defaultPrice / 1000}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 p-4 ">
            <div className="absolute">
              <button className=" bg-black text-white shadow-lg mx-10 rounded-lg"
              onClick={() =>handleItem(item)}
              >
                {""}
                Add +
              </button>
            </div>

            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-30 rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

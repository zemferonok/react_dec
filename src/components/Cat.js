import { useDispatch } from 'react-redux';

import {actionsCat} from "../redux/slices/cat_slice";

export const Cat = ({ cat }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {cat.name}
            <button onClick={() => dispatch(actionsCat.setCatForUpdate({ cat }))}>update</button>
            <button onClick={() => dispatch(actionsCat.deleteCat({ id: cat.id }))}>delete</button>
        </div>
    );
}
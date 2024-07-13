import style from './card.module.css';
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT, GET_MOVE } from '../../services/constructor/actions';


export const Card = ({ id, index, name, price, image }) => {
    const dispatch = useDispatch();
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: 'itemIngredient',
        collect(monitor) {
        return {
            handlerId: monitor.getHandlerId(),
        }
        },
        hover(item, monitor) {
        if (!ref.current) {
            return
        }
        const dragIndex = item.index
        const hoverIndex = index
        if (dragIndex === hoverIndex) {
            return
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }
        dispatch({type: GET_MOVE, payload: {dragIndex, hoverIndex}})
        item.index = hoverIndex;       
    }})

    const [{ isDragging }, drag] = useDrag({
        type: 'itemIngredient',
        item: () => {
        return { id, index }
        },
        collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <div className={style.auther_ingredients_item} ref={ref} style={{ opacity }} data-handler-id={handlerId}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name} 
                price={price}
                thumbnail={image}
                handleClose={() => dispatch({type: DELETE_INGREDIENT, payload: id})}
            />
        </div>
    )
}

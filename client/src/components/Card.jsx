import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
const Card = (props) => {
    const dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options)
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('');
    const handleAddCart = async () => {

        let food = [];
        for(const item of data){
            if(item.id ===props.foodItem._id){
                food = item;
                break;
            }
        }
        if(food != []){

            if(food.size === size){
                await dispatch({ type:"UPDATE", id:props.foodItem._id, price: finalPrice, qty:qty})
                return
            }
            else{
                await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
                return
            }
            return
        }
        else{
            await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size });
            //    await console.log(data)
        }
    
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "450px" }}>
                <img src={props.foodItem.img} className="card-img-top cardimg" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.foodItem.description}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success text-white rounded' onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                }
                                )
                            }
                        </select>
                        <select className='m-2 h-100 bg-success text-white rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Rs.{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,incrementBy } from '../redux/features/counter.feature';

const CounterRedux = () => {
    // get data from redux store
    let counterState = useSelector( (state) => {
        return state["counter"];
    });

    let { count} = counterState;
    let dispatch = useDispatch();

    // const [state,setState] =useState({
    //     count : 0
    // });

    const clickInc = () => {
        // setState({
        //     count : state.count + 1
        // });

        dispatch(increment());

    };
    const clickDec = () => {
        // setState({
        //     count : state.count - 1
        // });
        dispatch(decrement());
    };

    const clickIncByFive = () => {
        // setState({
        //     count : state.count + 5
        // });
        dispatch(incrementBy(5));
    };
    return(
        <React.Fragment>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <p className='h3'>{count}</p>
                                <button className='btn btn-success m-1' onClick={clickInc}>Increment</button>
                                <button className='btn btn-warning m-1' onClick={clickDec}>Decrement</button>
                                <button className='btn btn-danger m-1' onClick={clickIncByFive}>Increment by 5</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </React.Fragment>
    )
};

export default CounterRedux;
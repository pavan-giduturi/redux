import React,{useState} from 'react';


const Counter = () => {

    const [state,setState] =useState({
        count : 0
    });

    const clickInc = () => {
        setState({
            count : state.count + 1
        });
    };
    const clickDec = () => {
        setState({
            count : state.count - 1
        });
    };

    const clickIncByFive = () => {
        setState({
            count : state.count + 5
        });
    };
    return(
        <React.Fragment>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <p className='h3'>{state.count}</p>
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

export default Counter;
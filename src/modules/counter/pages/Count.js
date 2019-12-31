import React ,{useState, useEffect} from 'react'

export default function Count() {

    const [points,setPoints] = useState(25);

    useEffect(
        () => {
            console.log('render on init');
            return () => console.log("render after update");
        },
        [points]
    )

    return (
        <div className="text-center mt-4">
            <h4>You got {points} points</h4>
            <button className="btn btn-outline-success btn-sm" onClick={() => setPoints(points => points+1)} >Add Points</button>
        </div>
    )
}



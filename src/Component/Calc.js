import React, {useState} from 'react';

const store = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]
const Calc = () => {
    var [str, setstr] = useState(" ")
    return (
        <div>
            {
                store.map(function (item, index) {
                    return [
                        <button onClick={function () {
                            setstr(str + item)
                        }}>{item}</button>
                    ]
                })
            }
        </div>
    );
};

export default Calc;
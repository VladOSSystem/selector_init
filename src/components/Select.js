import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import data from '../utils/data.json';
import selectHelper from '../utils/selectHelper';

const options = [
    {value: "All", label: "All departaments"}
];

const SelectFC = () => {
    const [selectedOption, setSelectedOption] = useState({value: "All", label: "All departaments"});
    const [showSelected, setShowSelected] = useState(null);

    useEffect(() => {
       return () => {
        for (let key in data) {
            options.push({value: key, label: key})
        }
       }
    }, []);

    useEffect(() => {
        setShowSelected(selectHelper(selectedOption, data));
    }, [selectedOption]);
    console.log(showSelected)

    return (
        <div className='select'>
             <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="react-select-container"
            />
            {showSelected ? showSelected.map((job, index) => (
                <p key={index}>{Object.values(job)}</p>
            )) : <p>no jobs</p>}
        </div>
    )
}

export default SelectFC;
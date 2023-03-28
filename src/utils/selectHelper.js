
const selectHelper = (select, data) => {
    const { value } = select;
    
    const filteredJobs = [];
    if (value === "All") {
        for (let key in data) {
            filteredJobs.push(...data[key]);
        }
    } else {
        for (let key in data) {
            if (key === value) {
                filteredJobs.push(...data[key]);
            }
        }
    }
    return filteredJobs;
}

export default selectHelper;
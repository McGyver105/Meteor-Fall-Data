const fetchDataFromNasa = (startYear, endYear) => {
    const array = []
        return fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$select=name,id,mass,year,recclass%20where%20year%20between%20%27${startYear}-01-01T00:00:00.000%27%20and%20%27${endYear}-01-01T00:00:00.000%27`)
            .then(res => {
                array.push(res.json())
                return array
            })
            .then(res => {
                return Promise.all(res)
            })
}

export default fetchDataFromNasa;
import React, { useState, useEffect } from 'react'

const useFetchApi = (url) => {
    const [data, setData] = useState(null);
    const getData = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        getData()
    },[url])
    return [data]

}

export default useFetchApi
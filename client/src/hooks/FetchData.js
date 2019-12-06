import React, { useState, useEffect } from "react"
import axios from "axios"


export const FetchData = (url) => {

    const [data, setData] = useState({})
    useEffect(() => {

        axios
        .get(url)
        .then(res => {
            setData(res)
        })
        .catch(err => console.log(err.message))
    }, [])

  return [data, setData]
}

  

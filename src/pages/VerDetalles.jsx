import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailedContainer from '../components/ItemListContainer/ItemDetailedContainer'

const VerDetalles = () => {
    const { id } = useParams()
    return (
        <div>
            <ItemDetailedContainer id={id}/>
        </div>
    )
    }

export default VerDetalles
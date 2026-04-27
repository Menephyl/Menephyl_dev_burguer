import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('/categories') // chamar as categorias do backend
            console.log(response.data) // mostrar categorias no console
            setCategories(response.data)
        }
        loadCategories() // chamar função
    }, [])




    return (
        <div>
            <h1>{categories[0].name}</h1>
        </div>
    )
}
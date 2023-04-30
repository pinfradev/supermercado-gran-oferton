import React from "react";

function useProductInformation() {
    const [products, setProducts] = React.useState([]);
    const [shouldFetchProducts, setFetchProducts] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true)
    const url = 'http://localhost:8089/oferton/api/products/all'
    React.useEffect(() => {
        if (!shouldFetchProducts) {
            console.log('not needed fetch')
            return
        }

        fetch(url)
        .then(data => {
            return data.json()
        })
        .then(products => {
            const filteredProducts = products.filter(product => product.isActive)
            setProducts(filteredProducts)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setFetchProducts(false)
            setIsLoading(false)
        })
    }, [shouldFetchProducts])

    return {
        products,
        setFetchProducts,
        isLoading
    }
}

export {useProductInformation}
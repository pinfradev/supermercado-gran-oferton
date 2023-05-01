import React from "react"

function useManageProduct() {
    const getProductUrl = 'http://localhost:8089/oferton/api/products/get/'
    const getProduct = async (id)=> {
       const data = await fetch(getProductUrl + id)
       return new Promise((resolve, reject) => {
            try {
                const currentProduct = data.json()
                resolve(currentProduct)
            } catch(error) {

                reject(error)
            }
       })
    }

    return {
        getProduct,
    }
}

export {useManageProduct}
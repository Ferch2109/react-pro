import React from 'react'
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components'

const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Coffee Mug - Card',
        img: './coffee-mug.png',
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>
                
                <ProductCard product={product}>
                    <ProductCard.Image/>
                    <ProductCard.Title title='Dot type'/>
                    <ProductCard.Buttons/>
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage

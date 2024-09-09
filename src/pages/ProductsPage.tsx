import React from "react";
import { useContext } from 'react';
import { CreateProduct } from "../components/CreateProduct";
import { Error } from "../components/Error"; 
import { Loader } from "../components/Loader"; 
import { Modal } from "../components/Modal"; 
import { Product } from "../components/Product"; 
import { useProducts } from "../hooks/products"; 
import { IProduct } from "../models"; 
import { ModalContext } from "../context/ModalContext"; 

export function ProductsPage() {

  const {loading, error, products, addProduct} = useProducts()

  const {modal, open, close} = useContext(ModalContext)

  const CreateHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <Error error={error} /> }
      { products.map(product => <Product product={product} key={product.id} />) }
      { modal && <Modal title='Create new product:' onClose={close}>
        <CreateProduct onCreate={CreateHandler} />
      </Modal> }
      <button 
      className='fixed top-14 right-5 p-5 bg-gray-700 text-white text-2xl' 
      onClick={open}>
        +
      </button>
    </div>
  )
}
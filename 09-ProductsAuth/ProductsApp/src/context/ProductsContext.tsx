import React, { createContext, useState, useEffect } from 'react';
import { Product, ProductsResponse } from '../interfaces/appInterfaces';
import cafeApi from '../api/cafeApi';
import { ImagePickerResponse } from 'react-native-image-picker';

type ProductsContextProps = {
    products: Product[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<Product>;
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    loadProductById: (id: string) => Promise<Product>;
    uploadImage: (data: any, id: string) => Promise<void>; // TODO: cambiar ANY
}



export const ProductsContext = createContext({} as ProductsContextProps);



export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const resp = await cafeApi.get<ProductsResponse>('productos?limite=50');
        setProducts([...resp.data.productos]);

    };

    const addProduct = async (categoryId: string, productName: string): Promise<Product> => {


        const resp = await cafeApi.post<Product>('/productos', {
            nombre: productName,
            categoria: categoryId,
        });

        setProducts([...products, resp.data]);
        return resp.data;

    };

    const updateProduct = async (categoryId: string, productName: string, productId: string) => {

        try {
            const resp = await cafeApi.put<Product>(`/productos/${productId}`, {
                nombre: productName,
                categoria: categoryId,
            });

            setProducts(products.map(prod => {
                return (prod._id === productId)
                    ? resp.data : prod;
            }));

        } catch (error) {
            console.log(error);
        }

    };

    const deleteProduct = async (id: string) => {

    };

    const loadProductById = async (id: string): Promise<Product> => {

        const resp = await cafeApi.get<Product>(`productos/${id}`);
        return resp.data;

    };


    const uploadImage = async (data: ImagePickerResponse, id: string) => {

        const fileToUpload = {
            uri: data.uri,
            type: data.type,
            name: data.fileName
        };

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {
            const resp = await cafeApi.put(`/uploads/productos/${id}`, formData,
            );
            
        } catch (error) {
            console.log(error);
        }

    };

    


    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage,
        }}>
            { children}
        </ProductsContext.Provider>
    );
};

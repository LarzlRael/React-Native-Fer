/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useContext, useState } from 'react';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { View, Text, StyleSheet, ScrollView, TextInput, Button, Image } from
    'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';

import { Picker } from '@react-native-picker/picker';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';
import { CameraInterface } from '../interfaces/appInterfaces';



interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }

export const ProductScreen = ({ navigation, route }: Props) => {

    const { id = '', name = '' } = route.params;

    const [tempUri, setTempUri] = useState<string>();

    const { loadProductById, addProduct, updateProduct, uploadImage } = useContext(ProductsContext);



    const { categories } = useCategories();

    const { _id, categoriaId, nombre, img, onChange, setFormValue } = useForm({
        _id: id,
        categoriaId: '',
        nombre: name,
        img: '',
    });


    useEffect(() => {
        navigation.setOptions({
            title: (nombre) ? nombre : 'Nombre del producto',
        });
    }, [navigation, nombre]);

    useEffect(() => {
        loadProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const takePhoto = () => {

        launchCamera({
            mediaType: 'photo',
            quality: 0.5
        }, (resp) => {
            if (resp.didCancel) return;
            if (!resp.uri) return;

            setTempUri(resp.uri);
            uploadImage(resp, _id);
        });
    };
    const takePhotoFromGallery = () => {

        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5
        }, (resp) => {
            if (resp.didCancel) return;
            if (!resp.uri) return;

            setTempUri(resp.uri);
            uploadImage(resp, _id);
        });
    };


    const loadProduct = async () => {

        if (id.length === 0) { return; }

        const product = await loadProductById(id);

        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            img: product.img || '',
            nombre,
        });
    };


    const saveOrUpdate = async () => {
        if (id.length > 0) {
            updateProduct(categoriaId, nombre, id);

        } else {
            const tempCategoriaId = categoriaId || categories[0]._id;
            const newProduct = await addProduct(tempCategoriaId, nombre);
            onChange(newProduct._id, '_id');
        }
    };


    return (
        <View style={styles.container} >
            <ScrollView >
                <Text style={styles.label}>Nombre del producto</Text>
                <TextInput
                    placeholder="producto"
                    style={styles.textInput}
                    value={nombre}
                    onChangeText={(value) => onChange(value, 'nombre')}
                />

                <Button
                    title="Guardar"
                    onPress={saveOrUpdate}
                    color="#5856d6"

                />

                <Text style={styles.label}>Categoria: </Text>

                <Picker
                    selectedValue={categoriaId}
                    onValueChange={(value) => onChange(value, 'categoriaId')
                    }>

                    {categories.map(c => (

                        <Picker.Item
                            label={c.nombre}
                            value={c._id}
                            key={c._id}
                        />
                    ))}

                </Picker>

                {_id.length > 0 && (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}>

                        <Button
                            title="Camara"
                            //TODO por hacer
                            onPress={takePhoto}
                            color="#5856d6"
                        />

                        <View style={{ width: 10 }} />

                        <Button
                            title="Galeria"
                            //TODO por hacer
                            onPress={takePhotoFromGallery}
                            color="#5856d6"
                        />

                    </View>
                )}

                {
                    (img.length > 0 && !tempUri) &&
                    <Image
                        source={{ uri: img }}
                        style={{
                            width: '100%',
                            height: 300,
                            marginTop: 20,
                        }}
                    />
                }
                {/* Mostrar imagen temporal */}

                {
                    (tempUri) &&
                    <Image
                        source={{ uri: tempUri }}
                        style={{
                            width: '100%',
                            height: 300,
                            marginTop: 20,
                        }}
                    />
                }
            </ScrollView>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginHorizontal: 10,
    },
    label: {
        fontSize: 18,
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 15,
        color: 'black',
    },
});

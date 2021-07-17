import React from "react"
import { Form, Container, FormRow, TextInput, Title } from "../styles/Login"
import {Button,ButtonText, Header} from "../components"
import {useNavigation} from '@react-navigation/core'


export default function Login(){
    const navigation = useNavigation()
    function handleCadastrar(){
        navigation.navigate("Cadastrar")
    }
    return(
        <Container>
            <Header
                image2={require("../../assets/cabecalho1.png")}
                image={require("../../assets/logo1.png")}
            />
            <Form>
                <Title>LOGIN</Title>
                <FormRow>
                    <TextInput placeholder="Email"></TextInput>
                </FormRow>
                <FormRow>
                    <TextInput placeholder="Senha"></TextInput>
                </FormRow>
                <Button title="Entrar" onPress={handleCadastrar} />
                <ButtonText title="CADASTRAR-SE" onPress={handleCadastrar} />
            </Form>
        </Container>
    );
}
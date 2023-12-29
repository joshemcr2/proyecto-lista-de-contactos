import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.createContact(name, email, address, phone)
        setName("")
        setEmail("")
        setAddress("")
        setPhone("")

    }

    return (
        <div className="container bg-light p-5 rounded ">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName" className="form-label mt-4">Nombre y Apellido</label>
                    <input name="fullName" type="text" className="form-control" id="fullName" aria-describedby="nameHelp" placeholder="Escribe tu Nombre y Apellido" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label mt-4">Direccion</label>
                    <input name="address" type="text" className="form-control" id="address" aria-describedby="addresHelp" placeholder="Ingresa tu Direccion" value={address} onChange={(e) => { setAddress(e.target.value) }} />

                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label mt-4">Telefono</label>
                    <input name="phone" type="phone" className="form-control" id="phoneNumber" aria-describedby="phoneHelp" placeholder="Ingresa tu Telefono" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

                </div>
                <div className="d-flex justify-content-center gap-2 m-4">
                    <button type="submit" className="btn  btn-outline-success  px-5">Agregar Nuevo Contacto</button>
                    <Link to="/">
                        <span className="btn btn-outline-secondary btn-lg" href="#" role="button">
                            Atras
                        </span>
                    </Link>
                </div>


            </form>
        </div>
    );
};
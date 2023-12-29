import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const params = useParams();

    useEffect(() => {
        actions.getContactInfo(params.theid);
    }, []);

    const contact = store.contactDetails;

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = params?.theid;
        actions.editContact(id, name, email, address, phone);
        console.log(id, name, email, address, phone);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    return (
        <div className="container bg-light p-5 rounded">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName" className="form-label mt-4">
                        Nombre y Apellido
                    </label>
                    <input
                        name="fullName"
                        type="text"
                        className="form-control"
                        id="fullName"
                        aria-describedby="nameHelp"
                        placeholder="Escribe Tu Nombre y Apellido"
                        defaultValue={contact?.full_name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                        Correo
                    </label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Correo Electronico"
                        defaultValue={contact?.email}
                        onChange={handleEmailChange}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="address" className="form-label mt-4">
                        Direccion
                    </label>
                    <input
                        name="address"
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="addresHelp"
                        placeholder="Ingresa tu Direccion"
                        defaultValue={contact?.address}
                        onChange={handleAddressChange}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label mt-4">
                        Telefono
                    </label>
                    <input
                        name="phone"
                        type="phone"
                        className="form-control"
                        id="phoneNumber"
                        aria-describedby="phoneHelp"
                        placeholder="Ingresa tu Telefono"
                        defaultValue={contact?.phone}
                        onChange={handlePhoneChange}
                    />

                </div>
                <div className="d-flex gap-3 justify-content-center m-4">
                    <button type="submit" className="btn  btn-outline-warning ">
                        Actualizar Contacto
                    </button>
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" href="#" role="button">
                            Atras
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object,
};

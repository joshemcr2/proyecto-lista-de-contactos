import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ id, name, address, email, phone }) => {
    const { actions } = useContext(Context);

    const deleteContact = (id) => {
        window.alert("Seguro que deseas Eliminar este contacto?");
        actions.deleteContact(id)

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-14">
                    <div className="card mb-3">
                        <div className="card-header">ID:{id}</div>
                        <div className="card-body d-flex flex-row gap-4 justify-content-between">
                            <div>
                                <span className="d-flex justify-content-center">
                                    <i
                                        className="fa-solid fa-user"
                                        style={{ fontSize: "8rem", marginBottom: "1rem" }}
                                    ></i>{" "}
                                </span>
                                <div className="card-footer d-flex gap-4 justify-content-center">
                                    <Link to={`/edit-contact/${id}`}>
                                        <i className="fa-regular fa-pen-to-square"
                                            style={{ fontSize: "2rem" }}></i>
                                    </Link>
                                    <i className="pe-auto fa-regular fa-trash-can align-self-center "
                                        style={{ color: "red", fontSize: "2rem" }} onClick={() => deleteContact(id)}></i>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-start">
                                <div className="card-title d-flex justify-content-arround gap-2">
                                    <h4 className="me-3">{name}</h4>
                                    <i className="fa-solid fa-user mx-3"
                                        style={{ fontSize: "2rem" }}></i>

                                </div>
                                <div className="card-text d-flex justify-content-arround gap-2 w-100">
                                    <h4 className="me-3">{address}</h4>
                                    <i className="fa-solid fa-location-dot mx-3"
                                        style={{ fontSize: "2rem" }}></i>

                                </div>
                                <div className="card-text d-flex justify-content-arround gap-2 w-100">
                                    <h4 className="me-3">{email}</h4>
                                    <i className="fa-solid fa-envelope mx-3"
                                        style={{ fontSize: "2rem" }}></i>

                                </div>
                                <div className="card-text d-flex justify-content-arround gap-2">
                                    <h4 className=" me-3">{phone}</h4>
                                    <i className="fa-solid fa-phone mx-3"
                                        style={{ fontSize: "2rem" }}></i>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
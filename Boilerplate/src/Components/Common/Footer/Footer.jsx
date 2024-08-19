import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NewsletterModal } from "../../Modal/NewsletterModal.jsx";

import style from "./FooterStyle.module.scss";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";

export const Footer = () => {
	//modal styring
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		// console.log(data);
		openModal();
		reset();
	};

	const openModal = () => {
		setModalIsOpen(true);
		// console.log("modal is open");
	};
	const closeModal = () => {
		setModalIsOpen(false);
	};

	// console.log(watch("email"));

	return (
		<footer className={style.footer}>
			<h2>tilmeld nyhedsbrev</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Indtast email"
					{...register("email", {
						required: true,
						pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
					})}></input>
				<button type="submit">Send</button>
			</form>
			<div>
				{errors.email && errors.email.type === "required" && (
					<span className="text-red-600 text-lg">Dette felt skal udfyldes</span>
				)}
				{errors.email && errors.email.type === "pattern" && (
					<span className="text-red-600 text-lg">
						Du skal indtaste en gyldig email
					</span>
				)}
			</div>

			<NewsletterModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className="Modal"
				overlayClassName="Overlay">
				<div>
					<h2>Tak for din tilmelding</h2>
					<p>Du er nu tilmeldt nyhedsbrevet</p>
					<button onClick={closeModal} className={globalStyle.buttonDark}>
						Luk
					</button>
				</div>
			</NewsletterModal>
		</footer>
	);
};

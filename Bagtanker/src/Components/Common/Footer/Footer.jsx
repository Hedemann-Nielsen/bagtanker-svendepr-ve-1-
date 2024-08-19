import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NewsletterModal } from "../../Modal/NewsletterModal.jsx";

import style from "./FooterStyle.module.scss";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import { StyledButton } from "../../../Styles/StyledComponents.jsx";

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
			<section>
				<h2>Bagtanker</h2>
				<ul>
					<li>Øster Uttrupvej 1</li>
					<li>9000 Aalborg</li>
				</ul>
				<ul>
					<li>Tlf: 12345678</li>
					<li>Email: info@bagtanker.dk</li>
				</ul>
			</section>
			<section></section>
			<h3 className={globalStyle.subtitle}>
				Tilmeld dig Bagtankers nyhedsbrev
			</h3>
			<p className={globalStyle.text}>
				Få vores nyheder direkte i din indbakke
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Indtast email"
					{...register("email", {
						required: true,
						pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
					})}></input>
				<StyledButton type="submit">Tilemld</StyledButton>
				<div>
					{errors.email && errors.email.type === "required" && (
						<span className="text-red-600 text-lg">
							Dette felt skal udfyldes
						</span>
					)}
					{errors.email && errors.email.type === "pattern" && (
						<span className="text-red-600 text-lg">
							Du skal indtaste en gyldig email
						</span>
					)}
				</div>
			</form>

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

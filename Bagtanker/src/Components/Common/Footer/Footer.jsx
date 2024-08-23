import { useState } from "react";
import { useForm } from "react-hook-form";
import { NewsletterModal } from "../../Modal/NewsletterModal.jsx";
import { useSupabase } from "../../../Providers/SupabaseProvider";

import style from "./FooterStyle.module.scss";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";

export const Footer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const { supabase } = useSupabase();
	const [message, setMessage] = useState("");

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	//sender data til newsletter_emails tabellen og tilføjer den indtastede e-mail
	const PostOnSubmit = async (data) => {
		const { error } = await supabase
			.from(`newsletter_emails`)
			.insert([{ email: data.email }]);

		//setter en besked, hvis der opstår en fejl.
		if (error) {
			setMessage(`fejl ved indesendelse af email:` + error.message);
			//hvis data blev sendt korrek til api åbner en modal med besked og formularen resettes
		} else {
			setMessage(`e-mail indsendt succesfuldt!`);
			openModal();
			reset();
		}
	};

	const openModal = () => {
		setModalIsOpen(true);
		console.log("modal is open");
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
			<section>
				<h3 className={globalStyle.subtitle}>
					Tilmeld dig Bagtankers nyhedsbrev
				</h3>
				<p className={globalStyle.text}>
					Få vores nyheder direkte i din indbakke
				</p>
				<form onSubmit={handleSubmit(PostOnSubmit)}>
					<input
						type="email"
						placeholder="Indtast email"
						{...register("email", {
							required: true,
							pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
						})}></input>
					<div>
						{errors.email && errors.email.type === "required" && (
							<span className={globalStyle.errorMessage}>
								Dette felt skal udfyldes
							</span>
						)}
						{errors.email && errors.email.type === "pattern" && (
							<span className={globalStyle.errorMessage}>
								Du skal indtaste en gyldig email
							</span>
						)}
					</div>
					<button type="submit" className={globalStyle.styledButton}>
						Tilemld
					</button>
				</form>
			</section>

			{/* modal indhold */}
			<NewsletterModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className="Modal"
				overlayClassName="Overlay">
				<div>
					<h2>Tak for din tilmelding</h2>
					<p>Du er nu tilmeldt nyhedsbrevet</p>
					<button></button>
					<button onClick={closeModal} className={globalStyle.goldButton}>
						Luk
					</button>
				</div>
			</NewsletterModal>
		</footer>
	);
};

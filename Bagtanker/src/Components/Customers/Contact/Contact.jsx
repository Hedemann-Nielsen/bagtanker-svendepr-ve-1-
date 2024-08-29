import { useState } from "react";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useForm } from "react-hook-form";
import { useSupabase } from "../../../Providers/SupabaseProvider";

import globalStyle from "../../../Styles/Globalstyles.module.scss";
import style from "./Contact.module.scss";

export const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { supabase } = useSupabase();
	const [message, setMessage] = useState(""); // Til fejlhåndtering og beskeder

	const updateContactMessage = async ({ name, email, message }) => {
		try {
			if (supabase) {
				const { data, error } = await supabase
					.from("messages") // Navn på tabellen der skal indsættes i
					.insert([{ name, email, message }]); // Indsætter beskeden i tabellen

				if (error) {
					//fejl håndtering, hvis der ikke kunne indsættes data i databasen
					console.error(
						"Fejl ved indsættelse af data i updateContactMessage:",
						error.message
					);
					return { success: false, message: error.message };
				} else {
					return { success: true, data };
				}
			}
			// Returnér generel fejlmeddelelse
		} catch (error) {
			console.error("Generel fejl:", error.message);
			return { success: false, message: error.message };
		}
	};

	const handleSendMessage = async (data) => {
		try {
			// Kalder updateContactMessage med data fra formularen
			const response = await updateContactMessage(data);

			if (response.success) {
				// Nulstil formen efter succesfuld indsendelse
				reset();
				// sender en alert boks til brugeren om at meddelelsen er sendt.
				alert("Beskeden er sendt!");
			} else {
				setMessage(response.message);
			}
			// Håndterer eventuelle fejl, der opstår under kaldet til
		} catch (error) {
			console.error("Der opstod en fejl:", error.message);
			alert("Der opstod en fejl. Prøv igen."); // Opdater beskeden
		}
	};

	return (
		<PageWrapper title="Kontakt os">
			<div className={style.contact}>
				<div className={style.contactForm}>
					<p>
						Udfyld og send formularen, så vil vi hurtigst muligt besvare dine
						spørgsmål.
					</p>
					<form
						className={style.form}
						onSubmit={handleSubmit(handleSendMessage)}>
						<input
							type="text"
							name="name"
							placeholder="Indtast dit navn"
							className={`${globalStyle.input} ${
								errors.name ? globalStyle.errorInput : ""
							}`}
							//validering af navn feltet, det skal være udfyldt, hvis ikke kommer der en besked
							{...register("name", { required: "Navn er påkrævet" })}
						/>
						{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}
						{errors.name && (
							<span className={globalStyle.errorMessage}>
								{errors.name.message}
							</span>
						)}

						<input
							type="email"
							placeholder="Indtast din email"
							className={`${globalStyle.input} ${
								errors.email ? globalStyle.errorInput : ""
							}`}
							//validering af email feltet, det skal være udfyldt, og med korekt email syntax, hvis ikke kommer der en besked
							{...register("email", {
								required: "Email er påkrævet",
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: "Ugyldig emailadresse",
								},
							})}
						/>
						{/* et element som kun vises hvis der skal skrives en fejl meddelse  */}

						{errors.email && (
							<span className={globalStyle.errorMessage}>
								{errors.email.message}
							</span>
						)}

						<textarea
							placeholder="Skriv en besked"
							className={`${globalStyle.input} ${
								errors.message ? globalStyle.errorInput : ""
							}`}
							{...register("message", { required: "Besked er påkrævet" })}
						/>
						{errors.message && (
							<span className={globalStyle.errorMessage}>
								{errors.message.message}
							</span>
						)}

						<div className={style.buttonWrapper}>
							<button type="submit" className={globalStyle.styledButton}>
								Send
							</button>
						</div>
					</form>
					{message && <p className={globalStyle.message}>{message}</p>}
				</div>
				<div className={style.cart}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.2112684775025!2d9.964887876742258!3d57.04792317359095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b6a2b7696b%3A0x861634f2bf524040!2s%C3%98ster%20Uttrup%20Vej%201%2C%209000%20Aalborg!5e0!3m2!1sda!2sdk!4v1724315316643!5m2!1sda!2sdk"
						width="100%"
						height="100%"></iframe>
				</div>
			</div>
		</PageWrapper>
	);
};

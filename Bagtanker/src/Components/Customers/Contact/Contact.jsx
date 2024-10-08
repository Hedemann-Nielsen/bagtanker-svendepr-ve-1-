import { useState } from "react";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";
import { useForm } from "react-hook-form";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import globalStyle from "../../../Styles/Globalstyles.module.scss";
import style from "./Contact.module.scss";

export const Contact = () => {
	const { register, handleSubmit, reset } = useForm();
	const { supabase } = useSupabase(); // Hent supabase instansen
	const [message, setMessage] = useState(""); // Til fejlhåndtering og beskeder

	const updateContactMessage = async ({ name, email, message }) => {
		try {
			if (supabase) {
				const { data, error } = await supabase
					.from("messages") // Navn på tabellen
					.insert([{ name, email, message }]); // Indsætter beskeden i tabellen

				if (error) {
					console.error(
						"Fejl ved indsættelse af data i updateContactMessage:",
						error.message
					);
					return { success: false, message: error.message }; // Returnér fejlmeddelelse
				} else {
					return { success: true, data }; // Returnér succes
				}
			}
		} catch (error) {
			console.error("Generel fejl:", error.message);
			return { success: false, message: error.message }; // Returnér generel fejlmeddelelse
		}
	};

	const handleSendMessage = async (e) => {
		e.preventDefault();

		try {
			// Kalder updateContactMessage med data fra formularen
			const response = await updateContactMessage(e);

			if (response.success) {
				// Nulstil formen efter succesfuld indsendelse
				reset();
				alert("Beskeden er sendt!");
			}
		} catch (error) {
			// Håndterer eventuelle fejl, der opstår under kaldet til updateContactMessage
			console.error("Der opstod en fejl:", error.message);
			alert("Der opstod en fejl. Prøv igen."); // Opdater besked
		}
	};

	return (
		<PageWrapper title="kontakt os">
			<div className={style.contact}>
				<div className={style.contactForm}>
					<p>
						Udfyld og send formularen og vi vil hurtigst muligt besvare dine
						spørgsmål.
					</p>
					<form
						className={style.form}
						onSubmit={handleSubmit(handleSendMessage)}>
						<input
							type="text"
							placeholder="Indtast dit navn"
							{...register("name", { required: true })}
						/>
						<input
							type="email"
							placeholder="Indtast din email"
							{...register("email", { required: true })}
						/>
						<textarea
							placeholder="Skriv en besked"
							{...register("message", { required: true })}
						/>
						<div className={style.buttonWrapper}>
							<button type="submit" className={globalStyle.styledButton}>
								Send
							</button>
						</div>
					</form>
					{message && <p className={globalStyle.message}>{message}</p>}{" "}
					{/* Vis besked */}
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

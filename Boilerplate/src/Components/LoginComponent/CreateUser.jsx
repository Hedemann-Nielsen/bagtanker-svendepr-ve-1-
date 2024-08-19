import { useForm } from "react-hook-form";
import { StyledButton } from "../../Styles/StyledComponents";
import { useSupabase } from "../../Providers/SupabaseProvider";
import { useNavigate } from "react-router-dom";
import globalStyle from "../../Styles/GlobalStyles.module.scss";
import style from "./Login.module.scss";
import { useState } from "react";
import { PageWrapper } from "../Common/Wrappers/PageWrapper";

export const CreateUser = () => {
	const { supabase } = useSupabase();
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	//tjekker om password og confirmPassword er det samme, hvis de er ens kan opret bruger køre
	const onSubmit = (data) => {
		const { password, confirmPassword, name, email } = data;
		if (password !== confirmPassword) {
			console.error("Passwords matcher ikke");
			return;
		}
		handleCreateUser({ password, name, email });
	};

	//opret bruger
	const handleCreateUser = async ({
		password,
		firstname,
		lastname,
		zipcode,
		city,
		email,
	}) => {
		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				firstname,
				lastname,
				zipcode,
				city,
			});
			if (error) {
				setErrorMessage("Der opstod en fejl: " + error.message);
				console.error("Kunne ikke oprette bruger:", error);
			} else {
				console.log("Bruger oprettet:", data);
				sessionStorage.setItem("supabase.auth.token", JSON.stringify(data));
				navigate("/login", {
					state: {
						userCreatedMessage: "Bruger blev oprettet, du kan nu logge ind.",
					},
				});
			}
		} catch (error) {
			setErrorMessage("Der opstod en fejl: " + error.message);
			console.error("Der opstod en fejl:", error);
		}
	};

	return (
		<PageWrapper title="Opret bruger">
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<p>Opret bruger</p>
				<input
					className={globalStyle.input}
					type="email"
					placeholder="Email"
					{...register("email", { required: true })}
				/>
				{errors.email && (
					<span className={style.errorMessage}>Dette felt er påkrævet</span>
				)}
				<input
					className={globalStyle.input}
					type="text"
					placeholder="Fornavn"
					{...register("firstname", { required: true })}
				/>
				{errors.firstname && (
					<span className={style.errorMessage}>Dette felt er påkrævet</span>
				)}
				<input
					className={globalStyle.input}
					type="text"
					placeholder="Efternavn"
					{...register("lastname", { required: true })}
				/>
				{errors.lastname && (
					<span className={style.errorMessage}>Dette felt er påkrævet</span>
				)}
				<input
					className={globalStyle.input}
					type="number"
					pattern="0-9"
					placeholder="Postnummer"
					{...register("zicode", { required: true })}
				/>
				{errors.zipcode && (
					<span className={style.errorMessage}>Dette felt er påkrævet</span>
				)}
				<input
					className={globalStyle.input}
					type="text"
					placeholder="By"
					{...register("city", { required: true })}
				/>
				{errors.city && (
					<span className={style.errorMessage}>Dette felt er påkrævet</span>
				)}
				<input
					className={globalStyle.input}
					type="password"
					placeholder="Password"
					{...register("password", { required: true })}
				/>
				{errors.password && (
					<span className={style.errorMessage}>Dette felt er påkrævet</span>
				)}
				<input
					className={globalStyle.input}
					type="password"
					placeholder="Bekræft Password"
					{...register("confirmPassword", { required: true })}
				/>
				{errors.confirmPassword && <span>Dette felt er påkrævet</span>}
				<div>
					{errorMessage && (
						<span className={style.errorMessage}>{errorMessage}</span>
					)}
				</div>

				<StyledButton type="submit">Opret bruger</StyledButton>
			</form>
		</PageWrapper>
	);
};

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { useAuth } from "../../../Providers/AuthProvider";
import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Login.module.scss";
import { useEffect, useState } from "react";
import { PageWrapper } from "../../Common/Wrappers/PageWrapper";

export const Login = () => {
	const { supabase } = useSupabase();
	const { loginData, setLoginData } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();
	const [errorMessage, setErrorMessage] = useState(""); // State til error message
	const [successMessage, setSuccessMessage] = useState(""); // State til success message

	// Asynkron funktion der håndterer login-processen
	const handleLogin = async ({ email, password }) => {
		// Forsøger at logge ind med den angivne email og adgangskode ved hjælp af Supabase
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		// Hvis der opstår en fejl under login, logges fejlen til konsollen
		if (error) {
			console.error("Error logging in:", error);
		} else {
			// Hvis login er succesfuldt, gemmes autentificeringstoken i sessionStorage og loginData opdateres med brugerdata
			sessionStorage.setItem("supabase.auth.token", JSON.stringify(data));
			setLoginData(data);
		}
	};
	// Funktion som håndtere log ud ved hjælp af supabase
	const handleLogout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			setLoginData("");
			sessionStorage.removeItem("supabase.auth.token");
			if (error) throw error;
		} catch (error) {
			console.error("Error logging out:", error.message);
		}
	};

	// Funktion som håndtere ændring af password ved hjælp af supabase
	const handleChangePassword = async ({ newPassword, confirmNewPassword }) => {
		//hvis newPassword og confirmNewPassword ikke matcher, vises der et error besked
		if (newPassword !== confirmNewPassword) {
			setErrorMessage("Passwords do not match");
			return;
		}

		try {
			setErrorMessage(""); // Sletter tidligere error beksed
			setSuccessMessage(""); // Sletter tidligere success beksed
			const { user, error } = await supabase.auth.updateUser({
				password: newPassword,
			});
			// Hvis der opstår en fejl under opdatering af password vises en fejlbesked og fejlen logges i konsolen
			if (error) {
				setErrorMessage(error.message);
				console.error("Error changing password:", error);
			} else {
				//hvis passwordskiftet lykkedes sættes der et en succes besked og beskeden logges i konsolen med brugerens information.

				setSuccessMessage("Password changed successfully");
				console.log("Password changed successfully for user:", user);
			}
			// Hvis der opstår en fejl i try-blokken, vises en fejlbesked og fejlen logges i konsollen		} catch (error) {
		} catch (error) {
			setErrorMessage(error.message); // Set error message
			console.error("Error changing password:", error.message);
		}
	};

	useEffect(() => {
		document.title = loginData ? "Velkommen" : "Login";
	}, [loginData]);

	return (
		<>
			{!loginData ? (
				<PageWrapper title="Login">
					<div className={style.loginWrapper}>
						<p>Indtast brugernavn og password for at logge ind.</p>
						{/* Når der klikkes på submit (login knappen) vil handleLogin blive kaldt */}
						<form className={style.form} onSubmit={handleSubmit(handleLogin)}>
							<input
								className={globalStyle.input}
								type="email"
								placeholder="e-mail"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<span className={globalStyle.errorMessage}>
									This field is required
								</span>
							)}
							<input
								className={globalStyle.input}
								type="password"
								placeholder="password"
								{...register("password", { required: true })}
							/>
							{errors.password && (
								<span className={globalStyle.errorMessage}>
									This field is required
								</span>
							)}
							<div className={style.buttonContainer}>
								<button className={globalStyle.styledButton} type="submit">
									Login
								</button>
							</div>
							<div className={style.link}>
								{/* sender brugeren videre til en ny side  */}
								<Link to="/login/createUser">Opret mig som bruger</Link>
							</div>
						</form>
					</div>
				</PageWrapper>
			) : (
				<PageWrapper title="Min side">
					<h2>Mine kommentare</h2>
					<table className={style.commentsTable}>
						<thead>
							<tr>
								<th>Title</th>
								<th>Dato</th>
								<th>Handling</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th>fantastisk oplelevse</th>
								<th>fantastisk oplelevse</th>
								<th>fantastisk oplelevse</th>
							</tr>
						</tbody>
					</table>
				</PageWrapper>
			)}
		</>
	);
};
// {/* <p>Du er logget ind som {loginData.user.email}</p>
// 				<div className={style.buttonContainer}>
// 					{/* Denne knap vil logge brugeren ud */}
// 					<button onClick={handleLogout} className={globalStyle.inputBtn}>
// 						Log ud
// 					</button>
// 				</div>
// 				<div className={style.passwordWrapper}>
// 					<h3 className={globalStyle.subtitle2} style={{ padding: "0" }}>
// 						Skift Password
// 					</h3>
// 					{/* Når der trykkes på knappen (password) kaldes handleChangePassword funktionen */}
// 					<form
// 						className={style.form}
// 						onSubmit={handleSubmit(handleChangePassword)}>
// 						<input
// 							className={globalStyle.input}
// 							type="password"
// 							placeholder="Nyt password"
// 							{...register("newPassword", { required: true })}
// 						/>
// 						{errors.newPassword && (
// 							<span className={globalStyle.errorMessage}>
// 								This field is required
// 							</span>
// 						)}
// 						<input
// 							className={globalStyle.input}
// 							type="password"
// 							placeholder="Bekræft nyt password"
// 							{...register("confirmNewPassword", {
// 								required: true,
// 								validate: (value) =>
// 									value === watch("newPassword") || "Passwords do not match",
// 							})}
// 						/>
// 						{errors.confirmNewPassword && (
// 							<span className={globalStyle.errorMessage}>
// 								{errors.confirmNewPassword.message}
// 							</span>
// 						)}
// 						{errorMessage && (
// 							<span className={style.errorMessage}>{errorMessage}</span>
// 						)}
// 						{successMessage && (
// 							<span className={style.successMessage}>{successMessage}</span>
// 						)}
// 						<div className={style.buttonContainer}>
// 							<button className={globalStyle.inputBtn} type="submit">
// 								Skift Password
// 							</button>
// 						</div>
// 					</form>
// 				</div> */}

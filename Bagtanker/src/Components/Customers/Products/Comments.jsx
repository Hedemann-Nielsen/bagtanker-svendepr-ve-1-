import { useAuth } from "../../../Providers/AuthProvider";
import UserPhoto from "../../../Assets/DeafultUserPhoto.png";
import { formatDate } from "../../Utils/DateUtils.jsx";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import globalStyle from "../../../Styles/GlobalStyles.module.scss";
import style from "./Comments.module.scss";

export const Comments = ({ productId }) => {
	const { loginData } = useAuth();
	const { supabase } = useSupabase();
	const [commentsData, setCommentsData] = useState([]);
	const [title, setTitle] = useState("");
	const [commentText, setCommentText] = useState("");

	useEffect(() => {
		const getCommentsData = async () => {
			try {
				if (supabase && productId) {
					const { data, error } = await supabase
						.from("user_comments") // Hent fra tabellen user_comments
						.select("title, comment, created_at") // Hent title, comment og created_at fra tabellen.
						.eq("product_id", productId)
						.order("created_at", { ascending: false });

					if (error) {
						console.error(
							"Fejl ved hentning af data fra user_comments:",
							error.message
						);
					} else {
						setCommentsData(data);
						// console.log("Hentede comment data:", data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getCommentsData();
	}, [supabase, productId]); // Tilføj productId til afhængigheder

	const handleUpdateMessage = async (message) => {
		// Hvis inputfelterne er tomme, skal vi ikke sende noget til databasen
		if (!title || !commentText) {
			console.error("Navn og kommentar kan ikke være tomme");
			alert("Navn og kommentar kan ikke være tomme");

			return;
		}
		try {
			if (supabase && loginData) {
				const { data, error } = await supabase
					.from("user_comments") // Navn på tabellen
					.insert([
						{
							title: title,
							comment: commentText,
							user_id: loginData.user.id,
							product_id: productId,
							is_active: true,
						},
					]);

				if (error) {
					console.error("Fejl ved indsættelse af kommentar:", error.message);
				} else {
					// Tilføj den nye kommentar til commentsData state
					setCommentsData((prevComments) => [
						...prevComments,
						{
							title: title,
							comment: commentText,
							created_at: new Date().toISOString(), // Indsæt nuværende dato
						},
					]);

					// Nulstil inputfelterne efter en succesfuld indsendelse
					setTitle("");
					setCommentText("");
					alert("Kommentar sendt!");
				}
			}
		} catch (error) {
			console.error("Generel fejl:", error.message);
		}
	};

	return (
		<>
			{!loginData ? (
				<p className={style.Comments}>
					Du skal være logget ind for at kunne se kommentare og skrive din egen
					kommentar.
					<Link to="/login">
						<button className={globalStyle.styledButton}>Login</button>
					</Link>
				</p>
			) : (
				<div className={style.Comments}>
					<h2>Kommentarer</h2>
					<details>
						<summary>Skriv kommentar</summary>
						<input
							type="text"
							placeholder="Indtast title"
							value={title}
							className={style.inputField}
							onChange={(e) => setTitle(e.target.value)} // Opdater title state
						/>
						<textarea
							placeholder="Indtast kommentar"
							value={commentText}
							onChange={(e) => setCommentText(e.target.value)} // Opdater commentText state
						/>
						<button
							onClick={handleUpdateMessage}
							className={globalStyle.styledButton}>
							Send kommentar
						</button>
					</details>

					{commentsData.length > 0 ? (
						<div>
							{commentsData.map((comment, index) => (
								<figure key={index} className={style.commentWrapper}>
									<img src={UserPhoto} alt="Default user photo" />
									<figcaption>
										<h3>{comment.title}</h3>
										<p>{formatDate(comment.created_at)}</p>
										<p>{comment.comment}</p>
									</figcaption>
								</figure>
							))}
						</div>
					) : (
						<p>Ingen kommentarer endnu.</p>
					)}
				</div>
			)}
		</>
	);
};

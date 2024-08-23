import { useAuth } from "../../../Providers/AuthProvider";
import UserPhoto from "../../../Assets/DeafultUserPhoto.png";
import style from "./Comments.module.scss";
import { formatDate } from "../../Utils/DateUtils.jsx";
import { useSupabase } from "../../../Providers/SupabaseProvider";
import { useEffect, useState } from "react";

export const Comments = ({ product_ID }) => {
	const { loginData } = useAuth();
	const { supabase } = useSupabase();
	const [commentsData, setCommentsData] = useState([]);

	useEffect(() => {
		const getCommentsData = async () => {
			try {
				if (supabase && product_ID) {
					const { data, error } = await supabase
						.from("user_comments") // Hent fra tabellen user_comments
						.select("*"); // Hent alt data
					// .eq("product_id", product_ID); // Filtrér efter product_ID

					if (error) {
						console.error(
							"Fejl ved hentning af data fra user_comments:",
							error.message
						);
					} else {
						setCommentsData(data);
						console.log("Hentede comment data:", data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		getCommentsData();
	}, [supabase, product_ID]); // Tilføj product_ID til afhængigheder

	console.log(commentsData, "comment data:");

	return (
		<>
			{!loginData ? (
				<div className={style.Comments}>
					<h2>Kommentarer</h2>
					<details>
						<summary>Skriv kommentar</summary>
						<input
							type="text"
							placeholder="Indtast navn"
							className={style.inputField}
						/>
						<textarea placeholder="Indtast kommentar" />
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
			) : (
				<p>Du skal være logget ind for at kunne skrive en kommentar.</p>
			)}
		</>
	);
};

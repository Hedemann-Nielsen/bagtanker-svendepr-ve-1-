import { useSupabase } from "../../Providers/SupabaseProvider";

export const useUpdateContactMessage = () => {
	const { supabase } = useSupabase();

	const updateContactMessage = async ({ name, email, message }) => {
		try {
			if (supabase) {
				const { data, error } = await supabase
					.from("messages") // Navn på tabellen
					.insert({ name, email, message }); // Indsæt beskeden i tabellen

				if (error) {
					console.error(
						"Fejl ved indsættelse af data i updateContactMessage:",
						error.message
					);
					return null; // Returnér null ved fejl
				} else {
					return data; // Returnér data ved succes
				}
			}
		} catch (error) {
			console.error("Generel fejl:", error.message);
			return null; // Returnér null ved generel fejl
		}
	};

	return { updateContactMessage };
};

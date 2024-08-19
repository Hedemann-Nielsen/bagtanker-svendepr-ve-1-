import { useState, useEffect } from "react";
import { useSupabase } from "../../Providers/SupabaseProvider.jsx";

export function useEventsData() {
	const [eventsData, setEventsData] = useState([]);
	const { supabase } = useSupabase();

	useEffect(() => {
		const fetchEventsData = async () => {
			try {
				if (supabase) {
					const { data, error } = await supabase
						.from("events")
						.select("*, images(filename, author), stages(name)");

					if (error) {
						console.error(
							"Fejl ved hentning af data fra events:",
							error.message
						);
					} else {
						setEventsData(data);
						console.log("Hentede events data:", data);
					}
				}
			} catch (error) {
				console.error("Generel fejl:", error.message);
			}
		};

		fetchEventsData();
	}, [supabase]);

	return { eventsData };
}

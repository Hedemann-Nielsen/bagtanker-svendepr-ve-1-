import React from "react";
import { Contact } from "../Components/Customers/Contact/contact";
import { PageWrapper } from "../Components/Common/Wrappers/PageWrapper";

export const ContactPage = () => {
	return (
		<>
			<PageWrapper title={"contact"}>
				<Contact />
			</PageWrapper>
		</>
	);
};

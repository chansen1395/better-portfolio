import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CardButton } from "./button";
import { TextArea } from "./textarea";
import { Input } from "./input";

const ContactUs: React.FC = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					"service_fhqjdrc",
					"template_491qt3h",
					form.current,
					"user_p4VhUBl1ScGc6JjFHUUFL"
				)
				.then(
					() => {
						console.log("SUCCESS!");
					},
					(error) => {
						console.error("FAILED...", error.text);
					}
				);
		} else {
			console.error("Form reference is undefined.");
		}
	};

	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<br></br>
			<Input type="text" name="user_name" />
			<br></br>
			<label>Email</label>
			<br></br>
			<Input type="email" name="user_email" />
			<br></br>
			<label>Message</label>
			<br></br>
			<TextArea
				name="message"
				placeholder="Your color palette is bad blah blah blah..."
			/>
			<br></br>
			<CardButton type="submit" value="Send">
				Send
			</CardButton>
		</form>
	);
};

export default ContactUs;

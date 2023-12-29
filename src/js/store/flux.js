const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contactDetails: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			createContact: async (name, email, address, phone) => {
				const agendaSlug = "joshemcr2";
				const newContact = {
					full_name: name,
					email: email,
					agenda_slug: agendaSlug,
					address: address,
					phone: phone,
				};
				console.log(name, email, address, phone);

				try {
					await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(newContact),
					})
						.then((response) => response.json())
						.then((data) => {
							setStore({ contacts: [...getStore().contacts, data] });

							console.log(data);
						});
				} catch (error) {
					console.error("Error:", error);
				}
			},
			getUserContacts: async () => {
				const requestOptions = {
					method: "GET",
				};

				try {
					const response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/agenda/joshemcr2",
						requestOptions
					);
					const result = await response.json();
					setStore({ contacts: result });
					console.log(result)

				} catch (error) {
					console.log("Error:", error);
				}
			},
			getContactInfo: async (id) => {
				const requestOptions = {
					method: "GET",
				};

				try {
					const response = await fetch(
						`https://playground.4geeks.com/apis/fake/contact/${id}`,
						requestOptions
					);
					const result = await response.json();
					console.log(result)
					setStore({ contactDetails: result });
				} catch (error) {
					console.log("Error:", error);
				}
			},

			editContact: async (id, name, email, address, phone) => {
				const agendaSlug = "joshemcr2";
				const updateContact = {
					full_name: name,
					email: email,
					agenda_slug: agendaSlug,
					address: address,
					phone: phone,
				};
				console.log(name, email, address, phone);

				try {
					await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(updateContact),
					})
						.then((response) => response.json())
						.then((data) => {
							setStore({ contacts: [...getStore().contacts, data] });

							console.log(data);
						});
				} catch (error) {
					console.error("Error:", error);
				}
			},
			deleteContact: async (id) => {
				const baseUrl = "https://playground.4geeks.com/apis/fake/contact/";
				const deleteUrl = `${baseUrl}${id}`;
				const contacts = getStore().contacts;

				const filteredContacts = contacts.filter(
					(contact) => contact.id !== id
				);

				await fetch(deleteUrl, { method: "DELETE" });
				setStore({ contacts: filteredContacts });
			},
		},
	};
};

export default getState;
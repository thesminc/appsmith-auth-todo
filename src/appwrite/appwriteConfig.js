import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6500ac50499578c4c75e");

// Subscribe to files channel
client.subscribe("users", (response) => {
  console.log(response.payload);
});

export const account = new Account(client);

//Database

export const databases = new Databases(client, "6500acb55862ac5ec9ad");

import readCookieValue from "./readCookieValue.js";

export default class Networking {
  async handleLoginAttempt(email, password) {
    const userLoginDetails = { email, password };

    const response = await fetch(
      `https://realworldhealth.herokuapp.com/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLoginDetails),
      }
    );
    const data = await response.json();
    if (data.response) return data.response;
    else if (data.error) return data;
  }

  async createAccount(email, password) {
    const newUser = { email, password };

    try {
      const response = await fetch(
        "https://realworldhealth.herokuapp.com/register",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      return await response.json();
    } catch (error) {
      return { error: "failed to fetch" };
    }
  }

  async logUserOut() {
    const sessionID = readCookieValue("sessionID");
    const response = await fetch(
      `https://safe-harbor-88927.herokuapp.com/logout?sessionID=${sessionID}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  }

  async verifyUserSession() {
    const sessionID = readCookieValue("sessionID");
    const response = await fetch(
      `https://realworldhealth.herokuapp.com/verify-session?sessionID=${sessionID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  }
}

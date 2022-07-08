export default class Networking {
  async handleLoginAttempt(email, password) {
    const userLoginDetails = { email, password };
    const response = await fetch(`/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginDetails),
    });
    const data = await response.json();
    return data;
  }

  async createAccount(username, password, passwordConfirmation) {
    const userRegistrationDetails = {
      username,
      password,
      passwordConfirmation,
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userRegistrationDetails),
    });
    const data = await response.json();
    return data;
  }
}

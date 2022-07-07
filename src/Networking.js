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
}

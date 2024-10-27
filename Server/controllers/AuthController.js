export const signup = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    console.log(
      email,
      password,
      "This is the email land password recived  form the front-end form"
    );
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .send("Internal Server Error From the Server Side !!!!!");
  }
};

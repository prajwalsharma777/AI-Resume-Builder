import User from "../models/Users";

// POST method : since we have to provide data
// Path : /api/users/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check is name,email & password is there:
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing Required fields." });
    }

    // check if user already exists
    const user = await User;
  } catch (error) {}
};

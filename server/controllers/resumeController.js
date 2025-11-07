import Resume from "../models/Resume.js";

// Controller for getting user Resume
// GET: /api/users/resumes
export const getUserResumes = async (req, res) => {
  try {
    // we will get userId by middleware "Protect"
    const userId = req.userId;

    const resumes = await Resume.find({ userId });
    return res.status(200).json({ resumes });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

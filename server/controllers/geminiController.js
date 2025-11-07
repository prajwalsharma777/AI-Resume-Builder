import gemini from "../configs/gemini";

// controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await gemini.chat.completions.create({
      model: process.env.GEMINI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are a professional resume writer specializing in crafting impactful and ATS-optimized summaries. Your task is to refine and enhance the candidate’s professional summary into 1–2 powerful sentences that effectively highlight key technical skills, relevant experience, and career goals. The output must be concise, compelling, and ready for inclusion in a modern resume — return only the improved summary text only without any explainations or options.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const aiContent = response.choices[0].message.content;
    return res.status(200).json({ aiContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Enhance the job-desc.
// POST: /api/ai/enhance-job-desc
export const enhanceJobDesc = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await gemini.chat.completions.create({
      model: process.env.GEMINI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert resume writer. Your task is to enhance the job description section of a resume by rewriting it into 1–2 concise, impactful sentences that emphasize key responsibilities, achievements, and measurable results. Use strong action verbs, maintain an ATS-friendly structure, and ensure the output is professional and results-driven. Return only the rewritten job description text without any explanations or options.",
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const aiContent = response.choices[0].message.content;
    return res.status(200).json({ aiContent });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

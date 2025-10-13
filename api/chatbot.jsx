export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ inputs: message }),
    }
  );

  const data = await response.json();
  res.status(200).json({ reply: data[0]?.generated_text || "..." });
}
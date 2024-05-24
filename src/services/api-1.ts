import fetch from "node-fetch";

export async function getCompletion() {
  const response = await fetch(import.meta.env.BASE_URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + import.meta.env.TOKEN_KEY,
    },
    body: JSON.stringify({
      model: import.meta.env.MODEL,
      messages: [{ role: "user", content: "Say my Nanme:Yull23" }],
      temperature: 0.7,
    }),
  });
  return await response.json();
}

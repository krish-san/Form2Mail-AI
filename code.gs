function onFormSubmit(e) {
  if (!e || !e.namedValues) {
    Logger.log("No event data received.");
    return;
  }

  const email = e.namedValues["Email id"]?.[0];
  const question = e.namedValues["Your Question"]?.[0];

  if (!email || !question) {
    Logger.log("Missing email or question.");
    return;
  }

  const apiKey = "YOUR_API_KEY";
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey;

  const payload = {
    contents: [{ parts: [{ text: question }] }]
  };

  const options = {
    method: "POST",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const raw = response.getContentText();
    Logger.log("Gemini response: " + raw);

    const json = JSON.parse(raw);
    const reply = json.candidates?.[0]?.content?.parts?.[0]?.text || "Gemini couldn't generate a reply. Please try again later.";

    MailApp.sendEmail({
      to: email,
      subject: "Reply for your question",
      body: reply
    });

    Logger.log("Email sent to " + email);
  } catch (err) {
    Logger.log("Gemini/API Error: " + err);
  }
}

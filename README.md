# Form2Mail - AI

This is a *completely unofficial* Google Form auto-reply system built just for fun and a dash of curiosity.

I’ve wired it up using Google Apps Script and Gemini 1.5 Flash to automatically send replies based on form responses.

I originally crafted it as a part of an application round , I’m sharing it here in case you’re  
 
 interested in how it works or just want to poke around🤓

## What it does

- Takes input from a Google Form 
- Sends that question to Gemini API   
- Emails a smart reply back to the user   
- All handled automatically using Apps Script   

## Technologies

- Google Forms + Apps Script  
- Gemini API (Gemini-1.5 or whatever you like)  
- Trigger-based automation  

##  How to Run This

### Step 1: Get Your Gemini API Key

1. Head over to [Google AI Studio](https://makersuite.google.com/app) and sign in with your Google account.
2. Click on your profile icon → **API Keys** → Generate a key.
3. In your `Code.gs` file, replace this line:

   ```javascript
   const apiKey = "YOUR_API_KEY";

### Step 2: Set Up Your Google Form

- Create a Google Form with:
  - **Your email** (short answer)
  - **Question** (paragraph)

- Click **Responses → View in Sheets**
- In the sheet, go to **Extensions → Apps Script**

---

### Step 3: Add the Script

- Replace everything in `Code.gs` with the provided script
- Save the script (`Ctrl+S`)

---

### Step 4: Set the Trigger

- Add a Trigger in App Script:
  - Function: `onFormSubmit`
  - Event type: `On form submit`
  - Source: `From spreadsheet`
- Save and allow permissions

---

### Step 5: Test It

- Fill out the form with your email and a question
- Check your inbox for the AI-generated reply

If no email shows up:
- Double-check the API key and trigger setup  
- Make sure you've enabled permissions

---

### 🔗 Try It Live

Here’s my test form (if it’s still up):   

**[Google Form Link](https://docs.google.com/forms/d/e/1FAIpQLScEhtGbsviD9IWFYXBHq6Qj_hNiKi-7bF8ja2jCHj5o1HXLBA/viewform?usp=dialog)**


---

Feel free to **fork**, **clone**, or just laugh at it 😄





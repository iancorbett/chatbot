# Semantic Search Chatbot (TensorFlow.js + USE)

A lightweight chatbot built with **TensorFlow.js** and Google’s **Universal Sentence Encoder (USE)**.  
It answers user questions by comparing them against a Knowledge Base (KB) of Q/A pairs using **semantic similarity** (cosine similarity on embeddings).  

---

<img width="1148" height="716" alt="Screenshot 2025-09-05 at 12 02 48 AM" src="https://github.com/user-attachments/assets/1341ca75-be00-4e42-bfd6-0d2a71d07ae4" />


##  Features
- **Semantic search** → understands meaning, not just keywords.  
- **Runs in the browser** → no server needed for basic FAQ bot.  
- **Fallbacks** → if similarity is too low, politely asks the user to rephrase.  
- **Easily extendable** → just add more Q/A pairs to the KB.  
- **Accessible** → includes reduced-motion support for the spinner.  

---

## 🛠️ Setup

1. Clone or download this repo.  
2. Open `index.html` directly in your browser.  

No build tools or Node.js required (all runs client-side). 

---

##  How It Works

1. **Knowledge Base (KB)**  
   Defined in `chatbot.js`:
   
   const KB = [
     { q: "hello", a: "Hey! 👋 How can I help today?" },
     { q: "how do i reset my password", a: "Click **Forgot Password** on login." },
     { q: "do you have a mobile app", a: "Yep — iOS and Android available." },
     // ...add more!
   ];

2. **Embedding the KB**

At load time, the Universal Sentence Encoder (USE) converts each q into a 512-dimensional vector.

These are stored in kbEmbeddings.

3. **User Input**

When the user types, the input is also embedded into a [1,512] vector.

4. **Cosine Similarity**

Each KB vector is compared to the input vector using cosine similarity.

The closest match above a threshold (default 0.47) is chosen.

If none are close enough → fallback response.

## Example:

User: how can i change my password

Embedding is closest to KB entry "how do i reset my password".

Bot: Click **Forgot Password** on login.

User: what’s your refund policy

Embedding matches KB entry "refund policy".

Bot: We offer a 14-day refund window for first-time subscriptions.

User: what’s the capital of mars?

No good match (low score).

Bot: I’m not totally sure 🤔 — can you rephrase?

## Customization

Edit KB in chatbot.js to add/remove Q&A pairs.

Adjust the similarity threshold in answer():

const THRESHOLD = 0.47;

Update styles in styles.css for branding (colors, fonts, etc).

## Learn More

TensorFlow.js Docs

Universal Sentence Encoder

Cosine Similarity

//knowledge base
const KB = [
    // Small talk
    { q: "hello", a: "Hey! 👋 How can I help today?" },
    { q: "hi there", a: "Yo! What’s up?" },
    { q: "who are you", a: "I’m a tiny TF.js semantic bot powered by Universal Sentence Encoder." },
    { q: "what can you do", a: "I answer questions I’ve been given examples for, using semantic similarity (no training)." },
  
    // App examples
    { q: "how do i reset my password", a: "From the login screen, click **Forgot Password** and follow the link we email you." },
    { q: "i can’t log in", a: "Double-check your email, then reset your password. If that fails, contact support@yourapp.com." },
    { q: "how do i change my email", a: "Go to **Settings → Account → Email**, enter the new address, and confirm via the verification link." },
    { q: "do you have a mobile app", a: "Yep—iOS and Android. Search for **YourApp** in the stores." },
  
    // Billing
    { q: "how much does it cost", a: "Starter is free. Pro is $12/mo. Teams available—DM sales for volume pricing." },
    { q: "how do i cancel", a: "Open **Billing → Plan**, hit **Cancel**. Your plan remains active until the cycle ends." },
    { q: "refund policy", a: "We offer a 14-day refund window for first-time subscriptions." },
  
    // Tech
    { q: "api access", a: "Yes. Create a key under **Settings → Developer**. See docs for rate limits and examples." },
    { q: "integrations", a: "We support Slack, Zapier, and webhooks. More coming soon." },
  ];

    const chatEl = document.getElementById("chat");
    const msgEl = document.getElementById("msg");
    const sendBtn = document.getElementById("send");
  
    function addMsg(text, who = "bot") {
        const row = document.createElement("div"); //This acts as the container row for the chat message
        row.className = "row";
        const bubble = document.createElement("div"); //This will hold the actual message text (the chat bubble)
        bubble.className = who === "me" ? "me" : "bot"; //This is how you get different styling for user vs bot messages
        bubble.innerText = text; //Sets the chat bubble’s visible text to whatever message you passed in
        row.appendChild(bubble); //Puts the bubble inside the row container
        chatEl.appendChild(row); //Adds the whole row (with bubble inside) to the chat log container
        chatEl.scrollTop = chatEl.scrollHeight; //Auto-scrolls the chat box to the bottom whenever a new message is added
      }

      function addSpinner() {
        const row = document.createElement("div"); //row container for the spinner
        row.className = "row system"; //assigns custom css styles
        row.id = "sysrow";
        const dot = document.createElement("div"); //This is the actual spinner circle
        dot.className = "spinner"; //aplies spinner class where we defined the spin animation
        row.appendChild(dot); //Puts the spinner div inside the row container
        chatEl.appendChild(row); //Inserts the whole row (with the spinner inside) into the chat log
        chatEl.scrollTop = chatEl.scrollHeight; //Auto-scrolls to the bottom so the spinner is visible, just like new messages
      }
      function removeSpinner() {
        const r = document.getElementById("sysrow");
        if (r) r.remove();
      }
      
      let useModel, kbEmbeddings;
      //useModel = the sentence encoder model (pretrained by Google)
      // kbEmbeddings = all your KB questions converted into semantic vectors (512-numbers each)
        async function loadModel() {
        addMsg("Loading brain… (first load ~5–10s)", "bot");
        // global "use" object comes from the CDN script in index.html
        useModel = await use.load(); // Load Universal Sentence Encoder
        const questions = KB.map(item => item.q);
        kbEmbeddings = await useModel.embed(questions); // Tensor shape: [N, 512]
        removeSpinner();
        addMsg("Ready! Ask me something 😎", "bot");
        }


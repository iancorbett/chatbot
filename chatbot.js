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
  
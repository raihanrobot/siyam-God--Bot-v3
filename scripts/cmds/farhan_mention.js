const fs = require("fs-extra");

module.exports = {
  config: {
    name: "farhan_mention",
    version: "7.0.0",
    author: "Farhan-Khan", // ⚠️ এটা change করলে bot বন্ধ হয়ে যাবে
    countDown: 0,
    role: 0,
    shortDescription: "Admin mention reply styled",
    category: "system"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {

    // 🔒 AUTHOR LOCK
    if (this.config.author !== "Farhan-Khan") {
      console.log("⚠️ Author changed! Module stopped.");
      return;
    }

    // 👑 ADMINS
    const admins = [
      {
        uid: "100082071614134",
        names: ["@RA IH AN"]
      },
      {
        uid: "100082071614134",
        names: ["@RA IH AN"]
      }
    ];

    const senderID = String(event.senderID);

    // ❌ Admin নিজে লিখলে reply দিবে না
    if (admins.some(a => a.uid === senderID)) return;

    const text = (event.body || "").toLowerCase().trim();
    const mentionedIDs = event.mentions ? Object.keys(event.mentions) : [];

    // 🔍 MENTION DETECT
    const isMentioning = admins.some(admin =>
      mentionedIDs.includes(admin.uid) ||
      text.includes(admin.uid) ||
      admin.names.some(name => text.includes(name.toLowerCase()))
    );

    if (!isMentioning) return;

    // 💬 RAW CAPTIONS
    const captions = [
      "Mantion_দিস না _রায়হান বস এর মন মন ভালো নেই আস্কে-!💔🥀",
      "- আমার বস রায়হান এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔",
      "👉আমার বস ♻️ রায়হান এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো 🪶 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒https://www.facebook.com/raihan.xaans",
      "বস রায়হান কে এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒",
      "বস রায়হান কে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨",
      "রায়হান বস এখন বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰",
      "রায়হান বস কে এতো মেনশন নাহ দিয়া বস কে একটা জি এফ দে 😒 😏",
      "Mantion_না দিয়ে বস রায়হান এর সাথে সিরিয়াস প্রেম করতে চাইলে ইনবক্স 🪶https://facebook.com/100082071614134",
      "বস রায়হান কে মেনশন দিসনা পারলে একটা জি এফ দে",
      " Mantion_দিস না বাল পাকনা রায়হান এখন প্রচুর বিজি 🥵🥀🤐",
      "চুমু খাওয়ার বয়স টা আমার বস রায়হান চকোলেট খেয়ে উড়িয়ে দিল🍫🍭"
    ];

    const formatCaption = (text) => {
      return `
━━━━━━━━━━━━━━━━━━━━
- ${text}
━━━━━━━━━━━━━━━━━━━━
   [>ʙᴏᴛ ᴏᴡɴᴇʀ:-RAIHAN-BBZ<]
━━━━━━━━━━━━━━━━━━━━
      `;
    };

    const rawCaption = captions[Math.floor(Math.random() * captions.length)];
    const styledCaption = formatCaption(rawCaption);

    try {
      await message.reply({
        body: styledCaption
      });
    } catch (err) {
      console.log("Error sending admin reply:", err);
    }
  }
};

"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Message sent!");
  }; {
  return (
    <main className="min-h-screen text-gray-200 p-10">
    
    {/*background image*/}
    <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/images/pngtree-serene-japanese-zen-garden-at-dawn-image_20196017.png')" }}
      />
        
    {/*Dark overlay*/}
    <div className="fixed inset-0 bg-black/40 -z-10" />


    
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4 px-20 py-10">
        <input
          className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
          placeholder="Your Name"
           onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
}
        />

        <input
          className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
          placeholder="Email"
           onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
}
        />

        <textarea
          className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
          rows="5"
          placeholder="Contact us and let's start your project"
           onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
}
        />

        <button className="px-6 py-3 rounded-xl bg-white/20 border border-white/30" type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}
}
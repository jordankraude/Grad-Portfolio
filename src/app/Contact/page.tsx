'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useToast } from '../../components/ToastProvider';

const messages = [
  { text: 'Are you going to send a message?', type: 'message' as const },
  { text: "C'mon send me a message already.", type: 'message' as const },
  { text: "What, you think I'm not good enough for you?!", type: 'message' as const },
  { text: 'Fine..', type: 'angry' as const },
  { text: 'Better watch yourself.', type: 'angry' as const },
  { text: 'Just kidding, cmon, send me a message, I need work!', type: 'message' as const },
  { text: "C'mon send it already..", type: 'message' as const },
  { text: "I'm a great worker I promise..", type: 'message' as const },
  { text: "Now I'm getting angry", type: 'angry' as const },
  { text: "Ooh you're getting the red messages now. Better send me a message...", type: 'angry' as const },
  { text: "I'll find you..", type: 'angry' as const },
  { text: "Fine, I didn't want to work with you anyway.", type: 'angry' as const },
  { text: "NO PLEASE... SEND ME A MESSAGE", type: 'message' as const },
  { text: "ARE YOU EVEN SEEING THESE?", type: 'message' as const },
  { text: "ARE YOU EVEN STILL THERE?", type: 'message' as const },
  { text: "Are you only on this page to keep reading these messages?", type: 'message' as const },
  { text: "I'll entertain you no more. Send me a message please.", type: 'message' as const },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [hasCycledMessages, setHasCycledMessages] = useState(false);
  const messageIndexRef = useRef(0); // Use ref to track message index
  const timerRef = useRef<NodeJS.Timeout | null>(null); // Timer ref for the initial delay
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Interval ref for cycling messages

  const { addToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    resetTimer(); // Reset timer on form change
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/Contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        addToast('Message sent successfully!', 'info');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.error || 'Failed to send message.');
        addToast(result.error || 'Failed to send message.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('An unexpected error occurred.');
      addToast('An unexpected error occurred.', 'error');
    }
  };

  const showNextMessage = () => {
    if (messageIndexRef.current < messages.length) {
      addToast(messages[messageIndexRef.current].text, messages[messageIndexRef.current].type);
      messageIndexRef.current += 1; // Increment ref index
    } else {
      // Stop cycling messages
      setHasCycledMessages(true);
    }
  };

  const resetTimer = () => {
    // Clear existing timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start the initial timer
    timerRef.current = setTimeout(() => {
      if (!hasCycledMessages) {
        showNextMessage(); // Show the first message immediately
        // Schedule next messages every 5 seconds
        intervalRef.current = setInterval(() => {
          if (!hasCycledMessages) {
            showNextMessage();
          }
        }, 12000); // Duration between messages
      }
    }, 10000); // Initial delay before starting messages
  };

  useEffect(() => {
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
      const delay = Math.random() * 10; // Random delay between 0 and 10 seconds
      const height = Math.random() * 3 + 1; // Random height between 1px and 4px
      const top = Math.random() * 100; // Random top position between 0% and 100%
      const width = Math.random() * 20 + 5; // Random width between 5vw and 25vw

      line.setAttribute('style', `
        animation-delay: ${delay}s;
        height: ${height}px;
        top: ${top}%;
        width: ${width}vw;
      `);
    });
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear any intervals on unmount
      }
    };
  }, [hasCycledMessages]); // Dependency on hasCycledMessages

  return (
    <div className="w-full max-w-4xl mx-auto p-5 overflow-hidden" onClick={() => {
      resetTimer(); // Reset timer on click
    }}>
      <div className='w-full overflow-hidden'>
        <div className="animate-lines w-screen overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="bg-white p-5 shadow-md rounded text-black">
        {status && <p className="mt-4 bg-[#B5D99C] text-center text-xl rounded-sm m-auto w-auto mb-4">{status}</p>}
        <label className="block mb-2 font-semibold">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
            required
          />
        </label>
        <label className="block mb-2 font-semibold">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
            required
          />
        </label>
        <label className="block mb-4 font-semibold">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
            rows={5}
            required
          ></textarea>
        </label>
        <button type="submit" className="font-semibold bg-[#B5D99C] text-black hover:bg-black hover:text-[#B5D99C] p-2 rounded">
          Send
        </button>
      </form>
      <div className="mt-10 bg-white p-5 shadow-md rounded text-black">
        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
        <p className="mb-2 font-semibold"><strong>Phone:</strong> <a href="tel:2094952253" className="text-[#B5D99C] hover:underline font-normal">209-495-2253</a></p>
        <p className="mb-2 font-semibold"><strong>Email:</strong> <a href="mailto:jordankraudetp@gmail.com" className="text-[#B5D99C] font-normal hover:underline">jordankraudetp@gmail.com</a></p>
        <p className="mb-2 font-semibold"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jordan-kraude" className="text-[#B5D99C] font-normal hover:underline">www.linkedin.com/in/jordan-kraude</a></p>
      </div>
    </div>
  );
}

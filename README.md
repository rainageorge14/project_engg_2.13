# Assignment Explainer AI

## The Problem
I often receive long and complex assignment questions during coursework that are hard to understand at first glance. I end up spending around 15–20 minutes just figuring out what the question is asking before I can even begin solving it. This becomes frustrating, especially when multiple assignments are given together. Other students working on similar coursework also face this issue of wasting time decoding questions instead of solving them.

## What It Does
The user pastes an assignment or question into the input box. The AI processes the text and transforms it into a simplified explanation, a step-by-step breakdown, and highlights key concepts required to solve it. This allows the user to immediately understand the problem and start working on it without wasting time interpreting the instructions.

## AI Integration
**API:** OpenRouter  
**Model:** openai/gpt-4o-mini  
**Location:** `backend/server.js` → `/explain` route  
**What the AI does:** Converts complex assignment text into a clear, structured, and easy-to-understand explanation  

## What I Intentionally Excluded
- **User authentication (login/signup):** Not required for solving the core problem and would increase development complexity  
- **Saving past results/history:** The tool is designed for quick usage, not long-term storage  
- **File upload (PDF/DOCX support):** Text input is sufficient for now and avoids adding file parsing complexity  

## Monthly Cost Calculation

Model: openai/gpt-4o-mini  

Input: $0.15 per 1M tokens  
Output: $0.60 per 1M tokens  

Avg tokens per call: ~800 input + ~300 output  

Cost per call:  
(800 / 1,000,000 × $0.15) + (300 / 1,000,000 × $0.60)  
= $0.00012 + $0.00018  
= $0.00030  

Expected calls/month: 200  

**Monthly total: 200 × $0.00030 = $0.06**

## Live Deployment
**Frontend:** https://musical-raindrop-d3bc5b.netlify.app/  
**Backend:** https://project-engg-2-13.onrender.com  

Updated PR content
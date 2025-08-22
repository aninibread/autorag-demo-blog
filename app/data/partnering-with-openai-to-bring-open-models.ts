import type { BlogPost } from './blog-posts';

export const partneringWithOpenaiToBringOpenModels: BlogPost = {
  id: "partnering-with-openai-to-bring-open-models",
  title: "Partnering with OpenAI to bring their new open models onto Cloudflare Workers AI",
  excerpt: "OpenAI has just announced their latest open-weight models — and we are excited to share that we are working with them as a Day 0 launch partner to make these models available in Cloudflare's Workers AI.",
  content: `OpenAI has just announced their latest open-weight models — and we are excited to share that we are working with them as a Day 0 launch partner to make these models available in Cloudflare's Workers AI. Cloudflare developers can now access OpenAI's first open model, leveraging these powerful new capabilities on our platform. The new models are available starting today at @cf/openai/gpt-oss-120b and @cf/openai/gpt-oss-20b.

![OpenAI Partnership](/images/openai-partnership.svg)

Workers AI has always been a champion for open models and we're thrilled to bring OpenAI's new open models to our platform today. Developers who want transparency, customizability, and deployment flexibility can rely on Workers AI as a place to deliver AI services. Enterprises that need the ability to run open models to ensure complete data security and privacy can also deploy with Workers AI. We are excited to join OpenAI in fulfilling their mission of making the benefits of AI broadly accessible to builders of any size.

## The technical model specs

The OpenAI models have been released in two sizes: a 120 billion parameter model and a 20 billion parameter model. Both of them are Mixture-of-Experts models – a popular architecture for recent model releases – that allow relevant experts to be called for a query instead of running through all the parameters of the model. Interestingly, these models run natively at an FP4 quantization, which means that they have a smaller GPU memory footprint than a 120 billion parameter model at FP16. Given the quantization and the MoE architecture, the new models are able to run faster and more efficiently than more traditional dense models of that size.

These models are text-only; however, they have reasoning capabilities, tool calling, and two new exciting features with Code Interpreter and Web Search (support coming soon). We've implemented Code Interpreter on top of Cloudflare Containers in a novel way that allows for stateful code execution (read on below).

## The model on Workers AI

We're landing these new models with a few tweaks: supporting the new Responses API format as well as the historical Chat Completions API format (coming soon). The Responses API format is recommended by OpenAI to interact with their models, and we're excited to support that on Workers AI.

If you call the model through:

Workers Binding, it will accept/return Responses API – env.AI.run("@cf/openai/gpt-oss-120b")

REST API on /run endpoint, it will accept/return Responses API – https://api.cloudflare.com/client/v4/accounts/<account_id>/ai/run/@cf/openai/gpt-oss-120b

REST API on new /responses endpoint, it will accept/return Responses API – https://api.cloudflare.com/client/v4/accounts/<account_id>/ai/v1/responses

REST API for OpenAI Compatible endpoint, it will return Chat Completions (coming soon)– https://api.cloudflare.com/client/v4/accounts/<account_id>/ai/v1/chat/completions

\`\`\`bash
curl https://api.cloudflare.com/client/v4/accounts/<account_id>/ai/v1/responses \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $CLOUDFLARE_API_KEY" \\
  -d '{
    "model": "@cf/openai/gpt-oss-120b",
    "reasoning": {"effort": "medium"},
    "input": [
      {
        "role": "user",
        "content": "What are the benefits of open-source models?"
      }
    ]
  }'
\`\`\`

## Code Interpreter + Cloudflare Sandboxes = the perfect fit

To effectively answer user queries, Large Language Models (LLMs) often struggle with logical tasks such as mathematics or coding. Instead of attempting to reason through these problems, LLMs typically utilize a tool call to execute AI-generated code that solves these problems. OpenAI's new models are specifically trained for stateful Python code execution and include a built-in feature called Code Interpreter, designed to address this challenge.

We're particularly excited about this. Cloudflare not only has an inference platform (Workers AI), but we also have an ecosystem of compute and storage products that allow people to build full applications on top of our Developer Platform. This means that we are uniquely suited to support the model's Code Interpreter capabilities, not only for one-time code execution, but for stateful code execution as well.

We've built support for Code Interpreter on top of Cloudflare's Sandbox product that allows for a secure environment to run AI-generated code. The Sandbox SDK is built on our latest Containers product and Code Interpreter is the perfect use case to bring all these products together. When you use Code Interpreter, we spin up a Sandbox container scoped to your session that stays alive for 20 minutes, so the code can be edited for subsequent queries to the model. We've also pre-warmed Sandboxes for Code Interpreter to ensure the fastest start up times.

We'll be publishing an example of how you can use the gpt-oss model on Workers AI and Sandboxes with the OpenAI SDK to make calls to Code Interpreter on our Developer Docs.

## Give it a try!

We're beyond excited for OpenAI's new open models, and we hope you are too. Super grateful to our friends from vLLM and HuggingFace for supporting efficient model serving on launch day. Read up on the Developer Docs to learn more about the details and how to get started on building with these new models and capabilities.`,
  author: {
    name: "Michelle Chen & Ashish Datta",
    role: "Product Team"
  },
  publishedAt: "2025-08-05",
  readTime: "3 min read",
  tags: ["OpenAI", "Workers AI", "Machine Learning", "AI", "Open Source", "Code Interpreter", "Developers"],
  featured: false
};
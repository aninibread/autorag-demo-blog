import type { BlogPost } from './blog-posts';

export const thirteenNewMcpServersFromCloudflare: BlogPost = {
  id: "thirteen-new-mcp-servers-from-cloudflare",
  title: "Thirteen new MCP servers from Cloudflare you can use today",
  excerpt: "You can now connect to Cloudflare's first publicly available remote Model Context Protocol (MCP) servers from Claude.ai and other MCP clients like Cursor, Windsurf, or our own AI Playground.",
  content: `You can now connect to Cloudflare's first publicly available remote Model Context Protocol (MCP) servers from Claude.ai (now supporting remote MCP connections!) and other MCP clients like Cursor, Windsurf, or our own AI Playground. Unlock Cloudflare tools, resources, and real time information through our new suite of MCP servers including:

**Server** | **Description**
--- | ---
Cloudflare Documentation server | Get up to date reference information from Cloudflare Developer Documentation
Workers Bindings server | Build Workers applications with storage, AI, and compute primitives
Workers Observability server | Debug and get insight into your Workers application's logs and analytics
Container server | Spin up a sandbox development environment
Browser rendering server | Fetch web pages, convert them to markdown and take screenshots
Radar server | Get global Internet traffic insights, trends, URL scans, and other utilities
Logpush server | Get quick summaries for Logpush job health
AI Gateway server | Search your logs, get details about the prompts and responses
AutoRAG server | List and search documents on your AutoRAGs
Audit Logs server | Query audit logs and generate reports for review
DNS Analytics server | Optimize DNS performance and debug issues based on current set up
Digital Experience Monitoring server | Get quick insight on critical applications for your organization
Cloudflare One CASB server | Quickly identify any security misconfigurations for SaaS applications to safeguard applications, users, and data

… all through a natural language interface!

Today, we also announced our collaboration with Anthropic to bring remote MCP to Claude users, and showcased how other leading companies such as Atlassian, PayPal, Sentry, and Webflow have built remote MCP servers on Cloudflare to extend their service to their users. We've also been using the same infrastructure and tooling to build out our own suite of remote servers, and today we're excited to show customers what's ready for use and share what we've learned along the way.

## Cloudflare's MCP servers available today:

These MCP servers allow your MCP Client to read configurations from your account, process information, make suggestions based on data, and even make those suggested changes for you. All of these actions can happen across Cloudflare's many services including application development, security, and performance.

### Cloudflare Documentation Server: Get up-to-date reference information on Cloudflare

Our Cloudflare Documentation server enables any MCP Client to access up-to-date documentation in real-time, rather than relying on potentially outdated information from the model's training data. If you're new to building with Cloudflare, this server synthesizes information right from our documentation and exposes it to your MCP Client, so you can get reliable, up-to-date responses to any complex question like "Search Cloudflare for the best way to build an AI Agent".

### Workers Bindings server: Build with developer resources

Connecting to the Bindings MCP server lets you leverage application development primitives like D1 databases, R2 object storage and Key Value stores on the fly as you build out a Workers application. If you're leveraging your MCP Client to generate code, the bindings server provides access to read existing resources from your account or create fresh resources to implement in your application. In combination with our base prompt designed to help you build robust Workers applications, you can add the Bindings MCP server to give your client all it needs to start generating full stack applications from natural language.

### Workers Observability server: Debug your application

The Workers Observability MCP server integrates with Workers Logs to browse invocation logs and errors, compute statistics across invocations, and find specific invocations matching specific criteria. By querying logs across all of your Workers, this MCP server can help isolate errors and trends quickly. The telemetry data that the MCP server returns can also be used to create new visualizations and improve observability.

### Container server: Spin up a development environment

The Container MCP server provides any MCP client with access to a secure, isolated execution environment running on Cloudflare's network where it can run and test code if your MCP client does not have a built in development environment (e.g. claude.ai). When building and generating application code, this lets the AI run its own commands and validate its assumptions in real time.

### Browser Rendering server: Fetch and convert web pages, take screenshots

The Browser Rendering MCP server provides AI friendly tools from our RESTful interface for common browser actions such as capturing screenshots, extracting HTML content, and converting pages to Markdown. These are particularly useful when building agents that require interacting with a web browser.

### Radar server: Ask questions about how we see the Internet and Scan URLs

The Cloudflare Radar MCP server exposes tools that allow any MCP client to explore our aggregated HTTP traffic data, get information on Autonomous Systems (AS) and IP addresses, list traffic anomalies from our Outage Center, get trending domains, and domain rank information. It can even create charts. Here's a chat where we ask "show me the HTTP traffic from Portugal for the last week".

### Logpush server: Get quick summaries for Logpush job health

Logpush jobs deliver comprehensive logs to your destination of choice, allowing near real-time information processing. The Logpush MCP server can help you analyze your Logpush job results and understand your job health at a high level, allowing you to filter and narrow down for jobs or scenarios you care about. For example, you can ask "provide me with a list of recently failed jobs." Now, you can quickly find out which jobs are failing with which error message and when, summarized in a human-readable format.

### AI Gateway server: Check out your AI Gateway logs

Use this MCP server to inspect your AI Gateway logs and get details about the data from your prompts and the AI models responses. In this example we ask our agent "What is my average latency for my AI Gateway logs in the Cloudflare Radar account?"

### AutoRAG server: List and search documents on your AutoRAGs

Having AutoRAG RAGs available to query as MCP tools greatly expands the typical static one-shot retrieval​ and opens doors to use cases where the agent can dynamically decide if and when to retrieve information from one or more RAGs, combine them with other tools and APIs, cross-check information and generate a much more rich and complete final answer.

Here we have a RAG that has a few blog posts that talk about retrocomputers. If we ask "tell me about restoring an amiga 1000 using the blog-celso autorag" the agent will go into a sequence of reasoning steps:

"Now that I have some information about Amiga 1000 restoration from blog-celso, let me search for more specific details."

"Let me get more specific information about hardware upgrades and fixes for the Amiga 1000."

"Let me get more information about the DiagROM and other tools used in the restoration."

"Let me search for information about GBA1000 and other expansions mentioned in the blog."

And finally, "Based on the comprehensive information I've gathered from the blog-celso AutoRAG, I can now provide you with a detailed guide on restoring an Amiga 1000."

And at the end, it generates a very detailed answer based on all the data from all the queries.

### Audit Logs server: Query audit logs and generate reports for review

Audit Logs record detailed information about actions and events within a system, providing a transparent history of all activity. However, because these logs can be large and complex, it may take effort to query and reconstruct a clear sequence of events. The Audit Logs MCP server helps by allowing you to query audit logs and generate reports. Common queries include if anything notable happened in a Cloudflare account under a user around a particular time of the day, or identifying whether any users used API keys to perform actions on the account. For example, you can ask "Were there any suspicious changes made to my Cloudflare account yesterday around lunchtime?" and obtain the following response.

### DNS Analytics server: Optimize DNS performance and debug issues based on current set up

Cloudflare's DNS Analytics provides detailed insights into DNS traffic, which helps you monitor, analyze, and troubleshoot DNS performance and security across your domains. With Cloudflare's DNS Analytics MCP server, you can review DNS configurations across all domains in your account, access comprehensive DNS performance reports, and receive recommendations for performance improvements. By leveraging documentation, the MCP server can help identify opportunities for improving performance.

### Digital Experience Monitoring server: Get quick insight on critical applications for your organization

Cloudflare Digital Experience Monitoring (DEM) was built to help network professionals understand the performance and availability of their critical applications from self-hosted applications like Jira and Bitbucket to SaaS applications like Figma or Salesforce. The Digital Experience Monitoring MCP server fetches DEM test results to surface performance and availability trends within your Cloudflare One deployment, providing quick insights on users, applications, and the networks they are connected to. You can ask questions like: Which users had the worst experience? What times of the day were applications most and least performant? When do I see the most HTTP status errors? When do I see the shortest, longest, or most instability in the network path?

### CASB server: Insights from SaaS Integrations

Cloudflare CASB provides the ability to integrate with your organization's SaaS and cloud applications to discover assets and surface any security misconfigurations that may be present. A core task is helping security teams understand information about users, files, and other assets they care about that transcends any one SaaS application. The CASB MCP server can explore across users, files, and the many other asset categories to help understand relationships from data that can exist across many different integrations. A common query may include "Tell me about "Frank Meszaros" and what SaaS tools they appear to have accessed".

## Get started with our MCP servers

You can start using our Cloudflare MCP servers today! If you'd like to read more about specific tools available in each server, you can find them in our public GitHub repository. Each server is deployed to a server URL, such as

https://observability.mcp.cloudflare.com/sse.

If your MCP client has first class support for remote MCP servers, the client will provide a way to accept the server URL directly within its interface. For example, if you are using claude.ai, you can:

Navigate to your settings and add a new "Integration" by entering the URL of your MCP server

Authenticate with Cloudflare

Select the tools you'd like claude.ai to be able to call

If your client does not yet support remote MCP servers, you will need to set up its respective configuration file (mcp_config.json) using mcp-remote to specify which servers your client can access.

\`\`\`json
{
    "mcpServers": {
        "cloudflare-observability": {
            "command": "npx",
            "args": ["mcp-remote", "https://observability.mcp.cloudflare.com/sse"]
        },
        "cloudflare-bindings": {
            "command": "npx",
            "args": ["mcp-remote", "https://bindings.mcp.cloudflare.com/sse"]
        }
    }
}
\`\`\`

## Have feedback on our servers?

While we're launching with these initial 13 MCP servers, we are just getting started! We want to hear your feedback as we shape existing and build out more Cloudflare MCP servers that unlock the most value for your teams leveraging AI in their daily workflows. If you'd like to provide feedback, request a new MCP server, or report bugs, please raise an issue on our GitHub repository.

## Building your own MCP server?

If you're interested in building your own servers, we've discovered valuable best practices that we're excited to share with you as we've been building ours. While MCP is really starting to gain momentum and many organizations are just beginning to build their own servers, these principals should help guide you as you start building out MCP servers for your customers.

**An MCP server is not our entire API schema:** Our goal isn't to build a large wrapper around all of Cloudflare's API schema, but instead focus on optimizing for specific jobs to be done and reliability of the outcome. This means while one tool from our MCP server may map to one API, another tool may map to many. We've found that fewer but more powerful tools may be better for the agent with smaller context windows, less costs, a faster output, and likely more valid answers from LLMs. Our MCP servers were created directly by the product teams who are responsible for each of these areas of Cloudflare – application development, security and performance – and are designed with user stories in mind. This is a pattern you will continue to see us use as we build out more Cloudflare servers.

**Specialize permissions with multiple servers:** We built out several specialized servers rather than one for a critical reason: security through precise permission scoping. Each MCP server operates with exactly the permissions needed for its specific task – nothing more. By separating capabilities across multiple servers, each with its own authentication scope, we prevent the common security pitfall of over-privileged access.

**Add robust server descriptions within parameters:** Tool descriptions were core to providing helpful context to the agent. We've found that more detailed descriptions help the agent understand not just the expected data type, but also the parameter's purpose, acceptable value ranges, and impact on server behavior. This context allows agents to make intelligent decisions about parameter values rather than providing arbitrary and potentially problematic inputs, allowing your natural language to go further with the agent.

**Using evals at each iteration:** For each server, we implemented evaluation tests or "evals" to assess the model's ability to follow instructions, select appropriate tools, and provide correct arguments to those tools. This gave us a programmatic way to understand if any regressions occurred through each iteration, especially when tweaking tool descriptions.

Ready to start building? Click the button below to deploy your first remote MCP server to production:

Deploy to Cloudflare

Or check out our documentation to learn more! If you have any questions or feedback for us, you can reach us via email at 1800-mcp@cloudflare.com or join the chatter in the Cloudflare Developers Discord.`,
  author: {
    name: "Nevi Shah, Maximo Guk & Christian Sparks",
    role: "Engineering Team"
  },
  publishedAt: "2025-05-01",
  readTime: "9 min read",
  tags: ["Model Context Protocol", "Cloudflare Workers", "Agents", "Open Source", "MCP", "Developers", "Developer Platform"]
};
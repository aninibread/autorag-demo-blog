import type { BlogPost } from './blog-posts';

export const announcingCloudflareBrowserDeveloperProgram: BlogPost = {
  id: "announcing-cloudflare-browser-developer-program",
  title: "Announcing the Cloudflare Browser Developer Program",
  excerpt: "Today, we are announcing Cloudflare's Browser Developer Program, a collaborative initiative to strengthen partnership between Cloudflare and browser development teams.",
  content: `Today, we are announcing Cloudflare's Browser Developer Program, a collaborative initiative to strengthen partnership between Cloudflare and browser development teams.

Browser developers can apply to join here.

At Cloudflare, we aim to help build a better Internet. One way we achieve this is by providing website owners with the tools to detect and block unwanted traffic from bots through Cloudflare Challenges or Turnstile. As both bots and our detection systems become more sophisticated, the security checks required to validate human traffic become more complicated. While we aim to strike the right balance, we recognize these security measures can sometimes cause issues for legitimate browsers and their users.

## Building a better web together

A core objective of the program is to provide a space for intentional collaboration where we can work directly with browser developers to ensure that both accessibility and security can co-exist. We aim to support the evolving browser landscape, while upholding our responsibility to our customers to deliver the best security products. This program provides a dedicated channel for browser teams to share feedback, report issues, and help ensure that Cloudflare's Challenges and Turnstile work seamlessly with all browsers.

## What the program includes

Browser developers in the program will benefit from:

A two-way communication channel to Cloudflare's team dedicated to addressing browser-specific concerns, feedback, and issues.

Best practices for building and testing against Cloudflare Challenges and Turnstile.

A private community forum for updates, questions, and discussion between browser developers and Cloudflare engineers.

Early visibility into updates or changes to that may impact how your browser handles Cloudflare Challenges.

(If applicable) Testing integration where we will incorporate your browser into our testing pipeline and monitor its performance with our releases.

This program is designed as a partnership where Cloudflare will, with our best effort, ensure our security products work properly with all browsers, while giving browser developers a voice in how these systems evolve. As an output of this program, we expect to publish clear browser requirements to run Cloudflare Challenges while striking the balance between openness and security.

For end users browsing the web, we continue to support a wide range of browsers. We will continue to update this list based on the insights and collaborations from the Browser Developer Program. We are also committed to ensuring our Challenge interstitial pages and Turnstile provide clear, actionable UI/UX for any error or failed states, making it easier for you to understand and resolve issues you may encounter.

## How to apply

If you are working on a browser and want to ensure your users have a seamless experience with Cloudflare-protected websites, we encourage you to apply here.

We'll ask for basic information about your project and ask you to sign our Browser Developer Program Agreement. In addition, we expect participants to adhere to our Community Code of Conduct and commit to constructive engagement.

Once you're accepted, you'll be invited to a private space in the Cloudflare Community where you can engage directly with our team.

## Why is this important?

Cloudflare Challenges, a security mechanism to verify whether a visitor is a human or a bot, serve a wide variety of browsers in the world today. Chrome leads with 68.0%, Safari at 8.7%, Firefox at 6.3%, Edge at 4.8%, and Opera at 6.2%. However, the very long tail of browsers that collectively make up the remaining traffic, each representing less than 1% individually but together painting a picture of an incredibly diverse web ecosystem.

Browser traffic distribution, with 100+ browsers comprising the 'Other' category

This diversity spans a wide range of environments, each with unique constraints and capabilities:

Emerging and experimental browsers pushing the boundaries of web technology

Privacy-focused browsers such as DuckDuckGo that prioritize user data protection

Embedded browsers inside social media apps like Facebook, Instagram, and TikTok

WebViews used by mobile applications

Gaming and VR browsers such as Oculus for headsets and gaming consoles

Smart device browsers built into classroom displays and home appliances

Supporting this level of diversity poses real engineering challenges. Many of these browsers deviate from standard assumptions. Some lack full support for modern Web APIs, others operate under more stringent data privacy policies, and some are optimized for environments where our script to verify visitors may be hindered or blocked from running properly. These browsers are not bad or malicious. But their behavior may fall outside the typical patterns observed in mainstream browsers, which can lead to problematic or failed Challenge flows which we would like to avoid.

From an engineering perspective, our job is to strike a difficult balance. If our logic is too rigid that it expects only the behaviors of the majority, we risk excluding legitimate users on less conventional platforms. But if we relax our standards too much, we increase the attack surface for abuse. We cannot overfit to the top 5 browsers, nor can we afford to treat all clients as equal in capability or trustworthiness.

The Browser Developer Program is one way to close this gap. By working directly with browser teams, especially those building for niche or emerging environments, we can better understand the constraints they operate under and collaborate to make each of our systems more compatible and resilient.

## Join us!

This program is free to join, and is open to any browser developer, no matter the size or the lifecycle stage. Our goal is to listen, learn, and collaborate with browser developers to create a better experience for everyone.

We believe this program will ultimately benefit end users the most. By joining this program, you will help us build solutions that prioritize both the security needs of businesses as well as the diverse ways people access the Internet.

We look forward to your participation!

Cloudflare's connectivity cloud protects entire corporate networks, helps customers build Internet-scale applications efficiently, accelerates any website or Internet application, wards off DDoS attacks, keeps hackers at bay, and can help you on your journey to Zero Trust.

Visit 1.1.1.1 from any device to get started with our free app that makes your Internet faster and safer.

To learn more about our mission to help build a better Internet, start here. If you're looking for a new career direction, check out our open positions.`,
  author: {
    name: "Sally Lee & Oliver Payne",
    role: "Product Team"
  },
  publishedAt: "2025-08-18",
  readTime: "4 min read",
  tags: ["Turnstile", "Bots", "Security", "Developers", "Developer Platform", "Challenge Page"]
};
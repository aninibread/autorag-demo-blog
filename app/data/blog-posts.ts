export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

import { introducingAutoragOnCloudflare } from './introducing-autorag-on-cloudflare';
import { howWeBuiltAiFaceCroppingForImages } from './how-we-built-ai-face-cropping-for-images';
import { announcingCloudflareBrowserDeveloperProgram } from './announcing-cloudflare-browser-developer-program';
import { thirteenNewMcpServersFromCloudflare } from './thirteen-new-mcp-servers-from-cloudflare';
import { partneringWithOpenaiToBringOpenModels } from './partnering-with-openai-to-bring-open-models';
import { theWhiteHouseAiActionPlan } from './the-white-house-ai-action-plan';
import { cloudflare111IncidentJuly142025 } from './cloudflare-111-incident-july-14-2025';

export const blogPosts: BlogPost[] = [
  introducingAutoragOnCloudflare,
  howWeBuiltAiFaceCroppingForImages,
  announcingCloudflareBrowserDeveloperProgram,
  thirteenNewMcpServersFromCloudflare,
  partneringWithOpenaiToBringOpenModels,
  theWhiteHouseAiActionPlan,
  cloudflare111IncidentJuly142025
];

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/blog.tsx"),
  route("blog/:postId", "routes/blog.$postId.tsx"),
  route("welcome", "routes/home.tsx"),
] satisfies RouteConfig;

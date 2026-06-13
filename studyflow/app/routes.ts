import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("login","routes/login.tsx"),
    route("register","routes/register.tsx"),
    route("profile","routes/profile.tsx"),
    route("subjects","routes/subjects.tsx"),
    route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;

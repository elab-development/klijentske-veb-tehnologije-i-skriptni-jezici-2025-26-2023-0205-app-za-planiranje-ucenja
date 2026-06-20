import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useLocation, useNavigate } from "react-router";



import {Header} from "./commonComponents/Header"
import {Footer} from "./commonComponents/Footer"
import { TimerProvider } from "./dashboard/TimerContext";

import type { Route } from "./+types/root";
import "./app.css";

import { useEffect } from "react";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const chatWidgetAttributes: Record<string, string> = {
  src: "https://ai-chatbot-platform.fly.dev/widget/index.js",

  "data-agent-name": "Assistant",
  "data-agent-description": "Ask about your study planning",
  "data-chat-header-title-font-size": "1.3rem",
  "data-chat-header-description-font-size": "0.72rem",

  "data-privacy-url": "https://optiflowz.com/privacy-policy",
  "data-questions": "[\"Help me organize my subjects\",\"How should I plan my study session?\"]",

  "data-chat-desktop-width": "410px",
  "data-chat-desktop-height": "550px",

  "data-chat-primary": "#0F172A",
  "data-chat-secondary": "#334155",
  "data-blue-accent1": "#0F172A",
  "data-blue-accent2": "#1D293B",
  "data-blue-accent3": "#64748B",

  "data-chat-border-radius": "18px",
  "data-chat-border": "1px solid #E2E8F0",

  "data-blue-button-gradient": "linear-gradient(135deg, #0F172A, #334155)",
  "data-chat-main-gradient": "linear-gradient(135deg, #0F172A, #334155)",
  "data-chat-open-button-background": "linear-gradient(135deg, #0F172A, #334155)",
  "data-chat-open-button-border": "none",
  "data-chat-open-button-icon-color": "#FFFFFF",
  "data-chat-message-open-border-radius": "50%",

  "data-chat-header-gradient": "linear-gradient(135deg, #0F172A, #1D293B)",
  "data-chat-header-text-color": "#FFFFFF",
  "data-chat-header-bottom-border": "none",
  "data-chat-header-button-background": "#FFFFFF",
  "data-chat-header-button-svg-fill": "#0F172A",

  "data-chat-body-border-radius": "0px",
  "data-chat-chat-background": "#F7F9FB",

  "data-chat-message-font-size": "1rem",
  "data-chat-message-line-height": "1.35",
  "data-chat-message-box-shadow": "none",
  "data-chat-message-border": "1px solid #E2E8F0",
  "data-chat-message-border-radius": "12px",
  "data-chat-link-color": "#0F172A",

  "data-chat-bot-message-background": "#FFFFFF",
  "data-chat-bot-message-color": "#45474C",
  "data-chat-bot-message-link-color": "#0F172A",
  "data-chat-typing-indicator-color": "#64748B",

  "data-chat-user-message-background": "#0F172A",
  "data-chat-user-message-text-color": "#FFFFFF",
  "data-chat-user-message-link-color": "#FFFFFF",
  "data-chat-user-message-border": "none",

  "data-chat-question-background": "#F8FAFC",
  "data-chat-question-text-color": "#0F172A",
  "data-chat-question-border-color": "#CBD5E1",
  "data-chat-question-hover-outline": "2px solid #0F172A",

  "data-chat-input-background": "#FFFFFF",
  "data-chat-input-text-color": "#0F172A",
  "data-chat-input-outline": "2px solid #0F172A",
  "data-chat-input-border": "1px solid #CBD5E1",
  "data-chat-input-border-radius": "12px",
  "data-chat-input-send-button-background": "#0F172A",
  "data-chat-input-send-button-disabled-background": "#CBD5E1",
  "data-chat-input-send-button-border-radius": "10px",
  "data-chat-input-send-button-svg-fill": "#FFFFFF",
  "data-chat-input-text-area-placeholder-color": "#8590A6",
  "data-chat-input-text-area-padding-top": "9px",

  "data-chat-rating-card-background": "#FFFFFF",
  "data-chat-rating-card-border": "1px solid #E2E8F0",
  "data-chat-rating-secondary-button-text-color": "#0F172A",
  "data-chat-rating-secondary-button-border": "1px solid #CBD5E1",
  "data-chat-rating-primary-button-text-color": "#FFFFFF",
  "data-chat-rating-primary-button-border": "none",
  "data-chat-rating-option-text-color": "#0F172A",
  "data-chat-rating-option-border": "1px solid #E2E8F0",

  "data-chat-modal-secondary-button-text-color": "#0F172A",
  "data-chat-modal-secondary-button-border": "1px solid #CBD5E1",
  "data-chat-modal-error-button-background": "#F1F5F9",
  "data-chat-modal-error-button-border": "1px solid #CBD5E1",
  "data-chat-modal-error-button-text-color": "#0F172A",
};

function ChatWidgetScript() {
  useEffect(() => {
    const scriptId = "optiflowz-chat-widget-script";
    if (document.getElementById(scriptId)) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.defer = true;

      Object.entries(chatWidgetAttributes).forEach(([name, value]) => {
        script.setAttribute(name, value);
      });

      document.body.appendChild(script);
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChatWidgetScript />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token && !isAuthPage) {
      navigate("/login", { replace: true });
    }
  }, [isAuthPage, navigate]);

  return (
     <TimerProvider>
      {!isAuthPage && <Header />}
      <Outlet />
      {!isAuthPage && <Footer />}
    </TimerProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
    let isNotFound = false;

  if (isRouteErrorResponse(error)) {
      isNotFound = error.status === 404;
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  if (isNotFound) {
  return (
    <main className="notFoundPage">
      <h1>Page not found</h1>
      
      <div
        className="notFoundSvg"
        dangerouslySetInnerHTML={{ __html: `` }}
      />
      <p>The page you are looking for does not exist or has been moved.</p>
    </main>
  );
}

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

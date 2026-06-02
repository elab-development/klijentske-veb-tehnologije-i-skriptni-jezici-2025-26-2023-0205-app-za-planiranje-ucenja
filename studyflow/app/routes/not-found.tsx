export default function NotFound() {
  return (
    <main className="notFoundPage">
      <h1>Page not found</h1>

      <div
        className="notFoundSvg"
        dangerouslySetInnerHTML={{
          __html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="760" height="420" viewBox="0 0 760 420" fill="none">
                <defs>
                    <clipPath id="bb8BodyClip404">
                    <circle cx="150" cy="262" r="44"/>
                    </clipPath>
                    <linearGradient id="beamGrad404" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#64748B" stop-opacity="0.32"/>
                    <stop offset="100%" stop-color="#64748B" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="panelGlow404" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1D293B" stop-opacity="0.20"/>
                    <stop offset="100%" stop-color="#64748B" stop-opacity="0.12"/>
                    </linearGradient>
                    <linearGradient id="screenShine404" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#1D293B"/>
                    <stop offset="100%" stop-color="#0F172A"/>
                    </linearGradient>
                </defs>

                <style>
                    .droid-track {
                    animation: droidTrack404 7.4s ease-in-out infinite;
                    }

                    .droid-bob {
                    animation: droidBob404 2.1s ease-in-out infinite;
                    transform-origin: 150px 262px;
                    }

                    .body-roll {
                    animation: bodyRoll404 7.4s ease-in-out infinite;
                    transform-origin: 150px 262px;
                    }

                    .head-look {
                    animation: headLook404 7.4s ease-in-out infinite;
                    transform-origin: 150px 196px;
                    }

                    .antenna-wobble {
                    animation: antennaWobble404 1.35s ease-in-out infinite;
                    transform-origin: 130px 178px;
                    }

                    .lamp-carrier {
                    animation: lampCarry404 7.4s linear infinite;
                    }

                    .lamp-tilt {
                    animation: lampTilt404 7.4s ease-in-out infinite;
                    transform-origin: 0px 0px;
                    }

                    .beam {
                    animation: beamSweep404 7.4s ease-in-out infinite;
                    transform-origin: 21px -8px;
                    opacity: 0;
                    }

                    .sign-group {
                    animation: signWiggle404 7.4s ease-in-out infinite;
                    transform-origin: 515px 174px;
                    }

                    .question-pop {
                    animation: questionPop404 7.4s ease-in-out infinite;
                    transform-origin: 600px 120px;
                    opacity: 0;
                    }

                    .question-pop-2 {
                    animation: questionPop404b 7.4s ease-in-out infinite;
                    transform-origin: 625px 145px;
                    opacity: 0;
                    }

                    .blink {
                    animation: blink404 4.8s infinite;
                    transform-origin: center;
                    }

                    @keyframes droidTrack404 {
                    0%, 100% { transform: translateX(0px); }
                    18% { transform: translateX(155px); }
                    32% { transform: translateX(155px); }
                    40% { transform: translateX(120px); }
                    54% { transform: translateX(160px); }
                    70% { transform: translateX(160px); }
                    82% { transform: translateX(130px); }
                    }

                    @keyframes droidBob404 {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-4px); }
                    }

                    @keyframes bodyRoll404 {
                    0%   { transform: rotate(0deg); }
                    18%  { transform: rotate(202deg); }
                    32%  { transform: rotate(202deg); }
                    40%  { transform: rotate(160deg); }
                    54%  { transform: rotate(210deg); }
                    70%  { transform: rotate(210deg); }
                    82%  { transform: rotate(170deg); }
                    100% { transform: rotate(0deg); }
                    }

                    @keyframes headLook404 {
                    0%, 100% { transform: rotate(4deg) translateY(0px); }
                    18% { transform: rotate(0deg) translateY(0px); }
                    26% { transform: rotate(-7deg) translateY(-1px); }
                    34% { transform: rotate(-11deg) translateY(0px); }
                    44% { transform: rotate(7deg) translateY(-1px); }
                    58% { transform: rotate(-4deg) translateY(0px); }
                    70% { transform: rotate(-9deg) translateY(0px); }
                    84% { transform: rotate(3deg) translateY(0px); }
                    }

                    @keyframes antennaWobble404 {
                    0%, 100% { transform: rotate(-2deg); }
                    25% { transform: rotate(8deg); }
                    50% { transform: rotate(-7deg); }
                    75% { transform: rotate(4deg); }
                    }

                    @keyframes lampCarry404 {
                    0%, 100% { transform: translate(214px, 252px); }
                    18% { transform: translate(214px, 252px); }
                    26% { transform: translate(220px, 252px); }
                    34% { transform: translate(214px, 252px); }
                    44% { transform: translate(214px, 252px); }
                    54% { transform: translate(214px, 252px); }
                    66% { transform: translate(222px, 252px); }
                    74% { transform: translate(214px, 252px); }
                    }

                    @keyframes lampTilt404 {
                    0%, 16%, 100% { transform: rotate(0deg); }
                    22% { transform: rotate(10deg); }
                    30% { transform: rotate(-14deg); }
                    38% { transform: rotate(4deg); }
                    46% { transform: rotate(12deg); }
                    56% { transform: rotate(-10deg); }
                    68% { transform: rotate(6deg); }
                    76% { transform: rotate(0deg); }
                    }

                    @keyframes beamSweep404 {
                    0%, 17%, 100% { opacity: 0; transform: scaleX(0.95); }
                    18% { opacity: 1; transform: scaleX(1); }
                    24% { opacity: 1; transform: scaleX(1.04); }
                    30% { opacity: 1; transform: scaleX(0.98); }
                    36% { opacity: 1; transform: scaleX(1.02); }
                    42% { opacity: 0; transform: scaleX(1); }
                    52% { opacity: 1; transform: scaleX(1.02); }
                    60% { opacity: 1; transform: scaleX(0.98); }
                    68% { opacity: 1; transform: scaleX(1.03); }
                    74% { opacity: 0; transform: scaleX(1); }
                    }

                    @keyframes signWiggle404 {
                    0%, 100% { transform: rotate(0deg); }
                    31% { transform: rotate(0deg); }
                    34% { transform: rotate(1.3deg); }
                    38% { transform: rotate(-0.8deg); }
                    42% { transform: rotate(0deg); }
                    67% { transform: rotate(0deg); }
                    70% { transform: rotate(1deg); }
                    74% { transform: rotate(-0.7deg); }
                    78% { transform: rotate(0deg); }
                    }

                    @keyframes questionPop404 {
                    0%, 25%, 100% { opacity: 0; transform: translateY(0px) scale(0.7); }
                    30% { opacity: 1; transform: translateY(-6px) scale(1); }
                    36% { opacity: 0.95; transform: translateY(-12px) scale(1.08); }
                    44% { opacity: 0; transform: translateY(-18px) scale(0.9); }
                    }

                    @keyframes questionPop404b {
                    0%, 54%, 100% { opacity: 0; transform: translateY(0px) scale(0.7); }
                    60% { opacity: 1; transform: translateY(-6px) scale(1); }
                    66% { opacity: 0.95; transform: translateY(-12px) scale(1.08); }
                    74% { opacity: 0; transform: translateY(-18px) scale(0.9); }
                    }

                    @keyframes blink404 {
                    0%, 44%, 48%, 100% { transform: scaleY(1); }
                    46% { transform: scaleY(0.12); }
                    }
                </style>

                <rect width="760" height="420" rx="28" fill="#F8FAFC"/>
                <ellipse cx="380" cy="350" rx="235" ry="18" fill="#0F172A" opacity="0.07"/>

                <!-- prettier floating 404 screen -->
                <g class="sign-group">
                    <rect x="434" y="124" width="162" height="104" rx="24" fill="url(#panelGlow404)" opacity="0.55"/>
                    <rect x="440" y="126" width="150" height="98" rx="22" fill="#FFFFFF" stroke="#1D293B" stroke-width="4"/>
                    <rect x="453" y="139" width="124" height="72" rx="16" fill="url(#screenShine404)"/>

                    <circle cx="468" cy="150" r="3.5" fill="#64748B"/>
                    <circle cx="480" cy="150" r="3.5" fill="#1D293B" opacity="0.35"/>
                    <circle cx="492" cy="150" r="3.5" fill="#1D293B" opacity="0.2"/>

                    <text x="515" y="182" text-anchor="middle" font-family="Arial, sans-serif" font-size="38" font-weight="700" fill="#64748B">404</text>

                    <rect x="480" y="191" width="70" height="12" rx="6" fill="#1D293B" opacity="0.25"/>
                    <rect x="489" y="193" width="52" height="8" rx="4" fill="#FFFFFF" opacity="0.16"/>
                </g>

                <g class="question-pop">
                    <text x="600" y="120" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#64748B">?</text>
                </g>
                <g class="question-pop-2">
                    <text x="625" y="145" font-family="Arial, sans-serif" font-size="15" font-weight="700" fill="#1D293B">?</text>
                </g>

                <g class="droid-track">
                    <g class="droid-bob">
                    <ellipse cx="150" cy="324" rx="48" ry="10" fill="#0F172A" opacity="0.08"/>

                    <circle cx="150" cy="262" r="44" fill="#FFFFFF" stroke="#1D293B" stroke-width="4"/>

                    <g class="body-roll" clip-path="url(#bb8BodyClip404)">
                        <circle cx="150" cy="262" r="44" fill="#FFFFFF"/>
                        <circle cx="150" cy="262" r="18" fill="none" stroke="#64748B" stroke-width="6"/>
                        <circle cx="150" cy="262" r="7" fill="#1D293B"/>

                        <circle cx="123" cy="247" r="10" fill="none" stroke="#64748B" stroke-width="5"/>
                        <circle cx="123" cy="247" r="3.5" fill="#1D293B"/>

                        <circle cx="177" cy="280" r="10" fill="none" stroke="#64748B" stroke-width="5"/>
                        <circle cx="177" cy="280" r="3.5" fill="#1D293B"/>

                        <path d="M117 278 C129 284, 137 288, 149 290" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
                        <path d="M164 236 C173 238, 180 242, 185 248" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
                    </g>

                    <circle cx="150" cy="262" r="44" fill="none" stroke="#1D293B" stroke-width="4"/>

                    <g class="head-look">
                        <path d="M115 209                  C115 189, 131 176, 150 176                  C169 176, 185 189, 185 209                  L185 218                  L115 218 Z" fill="#FFFFFF" stroke="#1D293B" stroke-width="4" stroke-linejoin="round"/>

                        <g class="antenna-wobble">
                        <rect x="129" y="162" width="2.5" height="18" rx="1.25" fill="#1D293B"/>
                        <circle cx="130.25" cy="159.5" r="3.5" fill="#64748B"/>
                        <circle cx="130.25" cy="180" r="2.2" fill="#1D293B"/>
                        </g>

                        <path d="M123 195 H177" stroke="#64748B" stroke-width="5" stroke-linecap="round"/>
                        <path d="M129 204 H171" stroke="#1D293B" stroke-width="3.5" stroke-linecap="round" opacity="0.35"/>

                        <circle cx="151" cy="200" r="11" fill="#0F172A"/>
                        <circle cx="151" cy="200" r="4" fill="#FFFFFF" opacity="0.95"/>

                        <g class="blink">
                        <circle cx="171" cy="208" r="4.5" fill="#0F172A"/>
                        </g>
                    </g>

                    <!-- classic flashlight -->
                    <g class="lamp-carrier">
                        <g class="lamp-tilt">
                        <circle cx="0" cy="0" r="6.5" fill="#1D293B"/>

                        <rect x="-10" y="-12" width="18" height="8" rx="3" fill="#45474C"/>
                        <rect x="-6" y="-10.8" width="6" height="1.8" rx="0.9" fill="#8590A6" opacity="0.9"/>

                        <path d="M8 -12 L18 -15 L18 -1 L8 -4 Z" fill="#45474C"/>

                        <path class="beam" d="M19 -13 L128 -40 L128 24 L19 -3 Z" fill="url(#beamGrad404)"/>
                        </g>
                    </g>
                    </g>
                </g>
                </svg>
          `,
        }}
      />

      <p>The page you are looking for does not exist or has been moved.</p>
    </main>
  );
}
function HeadphonesIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 40V34C12 20.7452 22.7452 10 36 10C49.2548 10 60 20.7452 60 34V40"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="8"
        y="38"
        width="12"
        height="18"
        rx="6"
        stroke="white"
        strokeWidth="2.5"
      />
      <rect
        x="52"
        y="38"
        width="12"
        height="18"
        rx="6"
        stroke="white"
        strokeWidth="2.5"
      />
    </svg>
  )
}

function OnboardingPage({ onGetStarted }) {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center max-w-md">
        <HeadphonesIcon />

        <p className="mt-6 text-xs font-semibold tracking-[0.3em] text-white">
          SOUND STREAM
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white">
          Your music,
          <br />
          anywhere you go.
        </h1>

        <p className="mt-4 text-sm text-gray-400 max-w-xs">
          Stream millions of songs, curated playlists, and podcasts on any
          device.
        </p>

        <button
          type="button"
          onClick={onGetStarted}
          className="mt-8 rounded-full bg-teal-600 hover:bg-teal-500 transition-colors px-8 py-3 text-xs font-semibold tracking-[0.15em] text-white"
        >
          GET STARTED
        </button>
      </div>
    </div>
  )
}

export default OnboardingPage
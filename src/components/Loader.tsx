const Loader = () => {
    return (
        <div className="min-h-screen min-w-screen grid-background flex items-center justify-center">
            <main className="text-center">
                <svg
                    className="animate-spin h-10 w-10 text-blue-500 mb-4 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
                <h1 className="text-2xl font-bold">Loading...</h1>
            </main>
        </div>
    );
}

export default Loader;
import React, { useEffect, useState } from 'react';

const ThemeToggle = ({ className = '', showLabel = true, floating = false }) => {
    // Initialize dark mode from localStorage, default to true
    // We use a custom event to sync state across components if needed, or just rely on localStorage events
    // For simplicity in React without Context/Redux, we'll read from localStorage on mount
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('examPageDarkMode');
        return saved !== null ? JSON.parse(saved) : true;
    });

    useEffect(() => {
        localStorage.setItem('examPageDarkMode', JSON.stringify(isDarkMode));
        // Dispatch a custom event so other instances can update if they listen (optional enhancement)
        window.dispatchEvent(new Event('theme-change'));
    }, [isDarkMode]);

    // Listen for storage changes (cross-tab) or custom events (same-tab)
    useEffect(() => {
        const handleStorageChange = () => {
            const saved = localStorage.getItem('examPageDarkMode');
            if (saved !== null) {
                setIsDarkMode(JSON.parse(saved));
            }
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('theme-change', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('theme-change', handleStorageChange);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const buttonClasses = isDarkMode
        ? "bg-[#27272a] hover:bg-[#3f3f46] text-white border border-[#27272a] hover:border-[#00ff9d] transition-all duration-300"
        : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-blue-500 shadow-sm transition-all duration-300";

    const floatingClasses = floating
        ? `fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 ${isDarkMode
            ? "bg-[#27272a]/80 text-white hover:bg-[#3f3f46] border border-[#3f3f46]"
            : "bg-white/80 text-gray-900 hover:bg-gray-100 border border-gray-200"
        }`
        : `px-2 md:px-4 py-2 rounded-lg text-xs md:text-sm font-mono flex items-center gap-1 md:gap-2 ${buttonClasses} ${className}`;

    return (
        <button
            onClick={toggleTheme}
            className={floatingClasses}
            title={isDarkMode ? "切换到浅色模式" : "切换到深色模式"}
        >
            <span className={floating ? "text-xl" : ""}>{isDarkMode ? "☀" : "🌙"}</span>
            {showLabel && !floating && (
                <span className="hidden lg:inline">{isDarkMode ? "Light" : "Dark"}</span>
            )}
        </button>
    );
};

export default ThemeToggle;

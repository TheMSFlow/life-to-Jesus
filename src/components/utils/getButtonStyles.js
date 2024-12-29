
const sharedStyles = 'flex flex-row gap-2 py-3 px-8 justify-center items-center text-sm w-full rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-outline focus-visible:outline-offset-4 transition-all ease-in-out duration-300';

    const getButtonStyles = (type, state, icon) => {
    // Base styles for each button type
    const baseStyles = {
        primary: 'bg-primary hover:bg-primary-hover text-fair-black active:scale-95',
        secondary: 'bg-transparent text-secondary border hover:text-secondary-hover active:scale-95',
        tertiary: 'underline text-tertiary hover:text-tertiary-hover active:scale-95',
    };

    // Additional styles for default and disabled states
    const stateStyles = {
        default: '',
        disabled: 'opacity-50 cursor-not-allowed',
    };

    // Combine all styles with sharedStyles, type, and state
    return `${sharedStyles} ${baseStyles[type]} ${stateStyles[state]}`;
};

export default getButtonStyles;
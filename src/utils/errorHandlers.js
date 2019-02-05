export function handleGlobalError(error) {
    if (process.env.NODE_ENV === 'development') {
        console.error(`Grover Widget error: ${error.message}`);
    }
}

export const getTheme = (...props) => ({theme}) => props.reduce((t, p) => t[p], theme);

export const theme = {
    white: '#f4f4f4',
    grays: {
        light: '#eee',
        medium: '#999',
        dark: '#333'
    }
};
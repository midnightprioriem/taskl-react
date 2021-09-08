import styled from 'styled-components';

export const StyledButton = styled.button `
    font-family: ${props => props.theme.paragraphFontFamily};
    margin: .5em;
    padding: 0.75em 1.25em;
    border-radius: 5px;
    background-color: ${props.theme.color.accent3};
    border: 0px;
`;
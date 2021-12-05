export default function cssVariables(node, variables) {
    setCssVariables(node, variables);

    return {
        update(variables) {
            setCssVariables(node, variables);
        },
    };
}

function setCssVariables(node, variables) {
    for (const name in variables) {
        node.style.setProperty(`--${name}`, variables[name]);
    }
}
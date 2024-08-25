function customRender(reactElement , mainContainer) {
    //way 01
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href" , reactElement.props.herf)
    domElement.setAttribute("target" , reactElement.props.target)
    mainContainer.appendChild(domElement)
    */
   //way 02
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop , reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
    
}



const reactElement = {
    type: "a",
    props: {
        href: "https://google.com", 
        target: "_blank"
    },
    children: "Click me to visit Google"
};


const mainContainer = document.querySelector("#root")

customRender (reactElement , mainContainer)
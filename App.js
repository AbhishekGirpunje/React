// const heading = document.createElement("h1");

// heading.innerHTML = "Do it"

// const root = document.getElementById("root");

// root.appendChild(heading)

// const header  = React.createElement(
        //     "h1",
        // {
        //     id:"title"
        // },
        //     "UR Best");

        const heading1 = React.createElement(
            "h1",
            {
                id:"title"
             },
            "Heading1"
        )
        const heading2 = React.createElement(
            "h2",
            {
                id:"title"
             },
            "Heading2"
        )

        const container = React.createElement("div",{
            id:"container",
        },[heading1,heading2])

        const root = ReactDOM.createRoot(document.getElementById("root"));
        
        //passing the react element into the root
        root.render(container)

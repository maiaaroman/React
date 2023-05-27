const Page = ({children, title}) => {
    return (
        <div>
            <div></div>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default Page;
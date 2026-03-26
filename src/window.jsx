import { useState, useEffect } from 'react'

function WindowResize(){
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth)
        })
        console.log('EVENT LISTENER ADDED')

        return () => {
            window.removeEventListener('resize', () => {
                setHeight(window.innerHeight);
                setWidth(window.innerWidth)
            })
            console.log('EVENT LISTENER REMOVED')
        }   
    }, [])

    useEffect(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

        document.title = `${width} x ${height}`
    })

    return (
        <div>
            <h1>Window width: {width}px</h1>
            <h1>Window height: {height}px</h1>
        </div>
    )
}

export default WindowResize
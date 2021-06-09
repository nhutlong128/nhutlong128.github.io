import React  from 'react';

const YoutubeInLine = ({ children, ...props }) => {
    console.log(children)
    console.log(props)
    let video_url = props.href
    if (video_url.includes('youtube.com')){
        const id_video_pattern = /watch\?v=(\w+)/
        const id_found = id_video_pattern.exec(video_url)
        if (id_found === null) return null
        const video_found = id_found[1]
        const title_video = children[0]
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src = {`https://www.youtube.com/embed/${video_found}`} title={title_video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        )
    }
    
}

export default YoutubeInLine;
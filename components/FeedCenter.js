import React from 'react'
import Stories from '../components/stories';
import Upload from '../components/upload';



const FeedCenter = () => {
    return (
        <>
             {/* Story Icon */}
                <Stories />

            {/* Post Upload Div */}
                <Upload />

            {/* AllPosts Div */}
        </>
    )
}

export default FeedCenter;;
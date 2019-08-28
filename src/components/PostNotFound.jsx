import React from 'react'
import OnePost from './OnePost';

export default ()=>{
                const post={
                    title:"Post Not Found",
                    description:"Im Sorry but there was a problem fetching the post, it is posible that doesn`t exists",
                    tags:[]}
            return <OnePost
                    post={post}
                    image={"https://uxdworld.files.wordpress.com/2019/01/404-banner.jpg?w=656"}
                    />}
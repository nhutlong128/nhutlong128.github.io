import React  from 'react';
import { GatsbyImage } from "gatsby-plugin-image"

const ImageInLine = ({ children, ...props }) => {
    let image_strapi_src = props.src
    let src_pattern = /uploads\/(\w+.\w+)/  //new RegExp('/uploads/(w+)')
    let src_found = src_pattern.exec(image_strapi_src)[1]
    let src_regex = new RegExp(src_found)
    let image_list = props.ImageList.allImageSharp.nodes
    let selected_image = image_list.filter((node) => src_regex.exec(node.gatsbyImageData.images.fallback.src) !== null)[0]
    return (<GatsbyImage image={selected_image.gatsbyImageData} alt={src_found}/>)
}

export default ImageInLine;
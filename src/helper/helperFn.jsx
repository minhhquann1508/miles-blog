import { icons } from "../utils/icons";

export const renderStar = (number) => {
    const isIntergerNum = Number.isInteger(number);
    const html = [];
    if (isIntergerNum) {
        for (let i = 0; i < number; i++) {
            html.push(<span key={i}><icons.IoStarSharp size={12} color='#f69c08' /></span>)
        }
        for (let i = 5; i > number; i--) {
            html.push(<span key={i}><icons.IoStarOutline size={12} color='#f69c08' /></span>)
        }
    } else {
        const intNum = Math.floor(number);
        for (let j = 0; j < intNum; j++) {
            html.push(<span key={j}><icons.IoStarSharp size={12} color='#f69c08' /></span>)
        }
        html.push(<span key={Date.now()}><icons.IoStarHalfSharp size={12} color='#f69c08' /></span>)
        for (let i = 5; i > Math.floor(number + 1); i--) {
            html.push(<span key={i}><icons.IoStarOutline size={12} color='#f69c08' /></span>)
        }
    }
    return html;
}
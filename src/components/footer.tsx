import { useState } from "react";

export default function({tema}:any){
    const Tema = useState(tema);
    return (
        <>
        <footer>
            <div style={{ textAlign:'center'}}>
        
            </div>
            <div className="footer">
                <a href="https://www.instagram.com/mariannevalerion/" target="_blank"> <img srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png 300w, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png 600w" sizes="(max-width: 700px) 4px, 6px" alt=""/> </a> 
                <a href="https://www.instagram.com/mariannevalerion/"  target="_blank"> @mariannevalerion  </a>
                |
                <a href="https://github.com/Marianne10" target="_blank" style={{ paddingLeft: "5px"}} > <img srcSet="https://cdn-icons-png.flaticon.com/512/25/25231.png 70w, https://cdn-icons-png.flaticon.com/512/25/25231.png 140w" sizes="(max-width: 700px) 4px, 6px" alt=""/> </a>
                <a href="https://github.com/Marianne10" target="_blank"> @Marianne10</a>
                |
                <a href="https://www.linkedin.com/in/marianne-val%C3%A9rio-nunes-701568292/" style={{ paddingLeft: "5px"}} target="_blank"> <img srcSet="https://cdn-icons-png.flaticon.com/512/174/174857.png 70w, https://cdn-icons-png.flaticon.com/512/174/174857.png 140w" sizes="(max-width: 700px) 4px, 6px" alt=""/></a>
                <a href="https://www.linkedin.com/in/marianne-val%C3%A9rio-nunes-701568292/" target="_blank"> @Marianne </a>
            </div>
        </footer>
        </>
        )
}
import React from 'react'

function ImgComp ({src,alt}) {
   
    return (
        <div className= {`img-wrapper center`} >
              <img src={src} alt = {alt}/>
            </div>
    )

}
export default ImgComp;
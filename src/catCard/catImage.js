import React from 'react'


function catImage({image1}) {
const {image, title, description, question, image2, title1, question1, description1} = image1;
  return (
    <>
    <div className="flex1">
      <img className="img1" src={ image } alt="image1" />
      <div className="algn">
        { title }
        <br />
        { description }
        <div>
          { question }
        </div>
        <input type="text" name="type message" id="msg" placeholder="type message..." />
      </div>
    </div>
    <div className="flex1">
        <img className="img1" src={ image2 } alt="image1" />
        <div className="algn1">
          { title1 }
          <br />
          { description1 }
          <div>
            { question1 }
          </div>
          <input type="text" name="type message" id="msg" placeholder="type message..." />
        </div>
      </div>
      </>
  )
}

export default catImage

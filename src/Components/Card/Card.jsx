import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className='grid'>
            {[...Array(1)].map((_, index)=>(
                <div key={index}>
                   <div >
                        <h2 >Card {index+1} </h2>
                        <p>This is a card with Tailwind CSS. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam harum necessitatibus, nemo sunt, ipsam consectetur esse cumque modi deleniti, non eligendi debitis facere quidem minima exercitationem iusto tenetur omnis corrupti.
                        Perspiciatis ex inventore distinctio pariatur sit vero odio minus, corrupti tenetur aspernatur aperiam ducimus illum? Dolorum molestias atque ipsa eaque doloribus enim? Tenetur cupiditate, repellat totam atque quam ducimus autem. </p>

                   </div>
                </div>
            ))}
            
        </div>
    )
}

export default Card
import React from 'react'
import InstagramSlider from './InstagramSlider'

const InstagramContent = () => {
  return (
    <div>
      
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Instagram</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Lab-grown diamonds, also known as synthetic diamonds or cultured diamonds, are created through advanced technological processes that mimic the natural conditions in which diamonds are formed. They possess the same physical, chemical, and optical properties as their naturally occurring counterparts, making them visually identical and equally durable.
        </p>
      </div>

      <InstagramSlider/>
    </div>
  )
}

export default InstagramContent

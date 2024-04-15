import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
        <div className='flex gap-4 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'> 
                The old oak tree stood tall in the meadow, its branches swaying gently in the breeze. 
                A chorus of birdsong filled the air, as sunlight filtered through the leaves, dappling 
                the ground below. Nearby, a small brook gurgled softly, its clear waters reflecting 
                the sky above. It was a tranquil scene, untouched by the passage of time, a sanctuary 
                of peace and quiet in the midst of nature's embrace.
            </p>
            <p className='text-sm'>
                The morning sun cast long shadows across the dewy grass as the world slowly woke. 
                Birds chirped in the trees, greeting the dawn with their cheerful songs. A gentle breeze 
                rustled the leaves, carrying the scent of blooming flowers. It was a peaceful moment, 
                a quiet beginning to a new day.
            </p>
        </div>
    </div>
  )
}

export default ProductDescription
import { useParams } from 'react-router'

function ProductDetail() {
  const params = useParams()
  const productId = params.id!

  return (
    <div className='container m-auto flex gap-4'>
      <figure className='size-96'>
        <img src={'/no-image.jpg'} alt='Product Image' className='size-full' />
      </figure>

      <div className='flex max-w-96 flex-1 flex-col gap-4'>
        <span className='font-light'>Product ID {productId}</span>
        <h1 className='text-5xl font-medium'>Product Name</h1>
        <p>
          <span className='font-semibold'>5/5 -&nbsp;</span>
          <span className='text-sm text-neutral-500'>412 reviews</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          praesentium aperiam culpa esse dignissimos aspernatur consectetur
          sequi cum assumenda tempora, voluptate eos perspiciatis illum quasi
          quam labore veritatis ullam quos!
        </p>
      </div>
    </div>
  )
}

export default ProductDetail

import cardImg1 from '../assets/images/card-img.png'
import cardImg2 from '../assets/images/services.png'
import cardImg3 from '../assets/images/active.png'


const PromotionalTag = () => {
  return (
    <main className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <section className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Professional Service</p>
                <p className='px-2'>Quality Treatment</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImg1} alt="/" />
        </section>

        {/* Cards */}
        <section className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Call to Action</p>
                <p className='px-2'>Instant Delivery</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImg2} alt="/" />
        </section>

        {/* Cards */}
        <section className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Online Consultancy</p>
                <p className='px-2'>24/7 Support</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={cardImg3} alt="/" />
        </section>
    </main>
  )
}

export default PromotionalTag
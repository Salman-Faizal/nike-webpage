import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section id='contact-us' className='max-container flex items-center justify-between max-lg:flex-col gap-10 '>
      <h2 className='text-4xl font-palanquin leading-[68px] font-bold lg:max-w-md'>
        Sign Up for <span className="text-coral-red"> Updates </span> and Newsletter
      </h2>
      <div className="w-full lg:max-w-[40%] flex justify-between items-center sm:border sm:border-slate-gray p-2.5 rounded-full max-sm:flex-col gap-5">
        <input type="email" placeholder="subscribe@nike.com" className="input" />
        <div className='flex max-sm:justify-end items-center max-sm:full-width'>
          <Button 
            label="Sign Up"
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
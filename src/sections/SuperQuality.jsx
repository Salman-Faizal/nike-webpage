import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 width-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We provide you 
          <span className="text-coral-red"> Super Quality</span> shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum saepe mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam nostrum officiis, ratione rem quam dolores consequatur autem!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="mt-11">
          <Button
            label="Shop Now"
          />
        </div>
      </div>
      
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Super Quality"
          height={570}
          width={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
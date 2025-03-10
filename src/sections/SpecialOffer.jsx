import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex items-center flex-wrap max-lg:flex-col-reverse gap-10 max-container">

      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain"/>
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg"> 
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum saepe mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas magnam nostrum officiis, ratione rem quam dolores consequatur autem!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa.
        </p>
        <div className="mt-11 flex gap-4 flex-wrap">
          <Button
            label="Shop Now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
      
    </section>
  )
}

export default SpecialOffer
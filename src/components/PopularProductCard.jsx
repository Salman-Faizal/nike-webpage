import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full">
      <img src={imgURL} alt={name} className="width-[280px] height-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal ">
        {name}
      </h3>
      <p className="mt-2 text-coral-red font-montserrat font-semibold leading-normal">
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard
import { star } from "../assets/icons"

const ReviewCard = ({customerName, feedback, review, imgURL}) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <img src={imgURL} alt={customerName}
        width={25}
        height={25}
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="mt-6 text-center max-w-sm info-text">
        {feedback}
      </p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <img src={star} alt="review" width={24} height={24}
        className="object-contain m-0"/>
        <p className="info-text">({review})</p>
      </div>
      <h3 className="font-palanquin font-semibold text-3xl mt-1 text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
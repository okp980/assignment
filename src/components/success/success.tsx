import thank_you_icon from "../../assets/images/icon-thank-you.svg"

type Props = {}

const Success = (props: Props) => {
  return (
    <div className="lg:mt-36 lg:text-3x">
      <div className="flex justify-center mb-8">
        <img src={thank_you_icon} alt="success" />
      </div>
      <h1 className="text-heading text-2xl font-bold text-center mb-4 l">
        Thank you
      </h1>
      <p className="text-body text-center lg:text-lg">
        Thanks for confirming your subcription! We hope you have fun using our
        platform. If ou ever need support, please feel free to email us at
        support@oremgaming.com
      </p>
    </div>
  )
}

export default Success

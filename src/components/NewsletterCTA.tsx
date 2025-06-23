import { TfiEmail } from "react-icons/tfi";
import Button from "./Button";
import Input from "./Input";

export default function NewsletterCTA() {
  return (
    <div className="bg-primary gap-10 text-primary-foreground flex flex-col sm:flex-row justify-between items-center py-6 md:py-8 px-6 md:px-10 rounded-xl">
      <h4 className="font-integralcf font-bold text-primary-foreground text-3xl md:text-4xl">
        Stay upto date about <br /> our latest offers
      </h4>
      <form className="space-y-4 w-full sm:w-1/2 md:w-1/3">
        <Input
          className="placeholder:text-body"
          icon={<TfiEmail />}
          placeholder="Enter your email address"
        />
        <Button type="submit" display="block" variant="secondary">
          Subscribe to Newsletter
        </Button>
      </form>
    </div>
  );
}

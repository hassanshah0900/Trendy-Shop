import { TfiEmail } from "react-icons/tfi";
import Button from "./Button";
import Input from "./Input";

export default function NewsletterCTA() {
  return (
    <div className="bg-primary text-primary-foreground flex justify-between items-center py-8 px-10 rounded-xl">
      <h4 className="font-integralcf font-bold text-primary-foreground text-4xl">
        Stay upto date about <br /> our latest offers
      </h4>
      <form className="space-y-4 w-1/4">
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

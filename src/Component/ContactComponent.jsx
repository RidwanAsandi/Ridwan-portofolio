import { Label, TextInput, Textarea } from "flowbite-react";

function ContactComponent() {
  return (
    <div className="contact mt-5" id="contact">
      <div className="bg-slate-900 pt-5 pb-8">
        <div className="text-center text-white font-semibold text-2xl">
          <h1>Contact Saya</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="nama min-w-full md:pr-40 md:pl-40 ">
            <div className="px-14">
              <Label htmlFor="name" value="Your name" />
              <TextInput id="name" placeholder="Name" required />
            </div>
            <div className="px-14">
              <Label htmlFor="email" value="Your Mail" />
              <TextInput
                id="email"
                type="email"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="px-14">
              <Label htmlFor="comment" value="Your message" />
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
          </div>
        </div>
        <div>
          <a className="flex justify-center items-center pt-4" href="">
            <button className="text-white rounded-2xl bg-slate-600 hover:bg-slate-700 py-2 px-7">
              Submit
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;

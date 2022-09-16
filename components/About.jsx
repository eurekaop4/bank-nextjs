import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am ?</h2>
          <p className="py-2 text-gray-600">// I am not a normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            maxime corrupti officiis perferendis at voluptates explicabo
            architecto tempore nisi. Et, inventore, itaque velit maxime nam
            veniam ducimus culpa, deserunt excepturi harum possimus tempora
            dolores? Deleniti laboriosam ut numquam minima! Quas.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            blanditiis ullam. Accusantium itaque sunt saepe magnam nulla eveniet
            dolores nisi quaerat incidunt ipsam, repellat possimus sit ea.
            Quidem, fugiat error eligendi ex qui adipisci quod dolor autem.
            Sequi, dicta dolores.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

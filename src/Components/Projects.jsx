import React, { forwardRef } from "react";
import Port from "../assets/projects/Portfolio.png";
import store from '../assets/projects/Store.png'
import qr from '../assets/projects/QR-generator.png'
import rock from '../assets/projects/Rock-paper.png'
import currency from '../assets/projects/Currency.png'






const Projects = () => {
  return (
    <div className="mt-40">
      <div  className="container px-4 mt-30 mx-4">
        <div className="mb-4 mt-30">
          <h1   className="font-bold text-3xl bg-gradient-to-t from-blue-200 to-cyan-700 text-transparent bg-clip-text ">
            Projects
          </h1>
        </div>

        <div className="font-semibold my-10 text-center text-lg"><h1>Here is some of my work that I have done in my Past.</h1></div>

        <div className="flex mt-8 mx-auto items-center justify-evenly gap-y-12 flex-wrap
        
        
        md:flex-row">

          <div>
            <div class="max-w-lg rounded overflow-hidden border p-8 shadow-lg">
              <img class="w-full" src={store} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">E-Commerce Store</div>
                <p class=" text-base ">
                  <ul className="list-disc text-gray-500">
                    <li>
                      Built Online sample store that helps user to buy the prducts.
                    </li>
                    <li>
                      Here i use fake api to feth the data . And mange them on the Cards.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex justify-evenly items-center">
                <button className=" p-2 bg-gradient-to-t md:w-[25%] w-[35%] from-blue-700 rounded-full to-cyan-400 hover:from-blue-500 hover:to-cyan-400">
                  <a href="https://simple-e-commerce-store.netlify.app/">Live Preview</a>
                </button>
                <button className="border bg-gradient-to-t w-[40%] hover:from-blue-700 hover:to-cyan-200 rounded-full p-2">
                <a href="https://github.com/Rashid-56/Sample---E-commerce-Website">GitHub Code</a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="max-w-lg rounded overflow-hidden border p-8 shadow-lg">
              <img class="w-full" src={Port} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Portfolio</div>
                <p class=" text-base ">
                  <ul className="list-disc text-gray-500">
                    <li>
                      Its my portfolio , here i use the different concepts of react js and tailwind css.
                    </li>
                    <li>
                      By practicing , i taught many topics of React js like
                      Routing, State Mangement etc.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex justify-evenly items-center">
                <button className="rounded-full md:w-[25%] w-[35%] p-2 bg-gradient-to-t from-blue-700 to-cyan-400 hover:from-blue-500 hover:to-cyan-400">
                  <a href="">Live Preview</a>
                </button>
                <button className="border bg-gradient-to-t hover:from-blue-700 hover:to-cyan-200 rounded-full w-[40%] p-2">
                  <a href="">GitHub Code</a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="max-w-lg rounded overflow-hidden border p-8 shadow-lg">
              <img class="w-full" src={currency} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Currency-Converter</div>
                <p class=" text-base ">
                  <ul className="list-disc text-gray-500">
                    <li>
                      Its a JavaScript project where you can convert your currency to any other currency.
                    </li>
                    <li>
                      Here i alse use the flags api to change the flags of those countries whose you equip on the screen.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex justify-evenly items-center">
                <button className="rounded-full md:w-[25%] w-[35%] p-2 bg-gradient-to-t from-blue-700 to-cyan-400 hover:from-blue-500 hover:to-cyan-400">
                  <a href="https://currency-converter-chi-teal.vercel.app/">Live Preview</a>
                </button>
                <button className="border w-[40%] bg-gradient-to-t hover:from-blue-700 hover:to-cyan-200 rounded-full p-2">
                  <a href="https://github.com/Rashid-56/Currency-converter">GitHub Code</a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="max-w-lg rounded overflow-hidden border p-8 shadow-lg">
              <img class="w-full" src={qr} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">QR-Generator</div>
                <p class=" text-base ">
                  <ul className="list-disc text-gray-500">
                    <li>
                     Its a very useful project to generate different kind of passwords. Including strings, integers etc.
                    </li>
                    <li>
                      In that Project, i use react js where i manage the state and store the password . I alse use the usecontext state to copy this code.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex justify-evenly items-center">
                <button className="rounded-full md:w-[25%] w-[35%] p-2 bg-gradient-to-t from-blue-700 to-cyan-400 hover:from-blue-500 hover:to-cyan-400">
                  <a href="https://qr-generater-lovat.vercel.app/">Live Preview</a>
                </button>
                <button className="border bg-gradient-to-t hover:from-blue-700 hover:to-cyan-200 rounded-full w-[40%] p-2">
                  <a href="https://github.com/Rashid-56/QR-Generater">GitHub Code</a>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="max-w-lg rounded overflow-hidden border p-8 shadow-lg">
              <img class="w-full" src={rock} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Rock-Paper & Scissor Game</div>
                <p class=" text-base ">
                  <ul className="list-disc text-gray-500">
                    <li>
                      Its a game where i use logical parts of JavaScript and show's the result on screen.
                    </li>
                    <li>
                      Here you chose your randomly move and the other side robot will chose also and then result will show.
                    </li>
                  </ul>
                </p>
              </div>
              <div class="flex justify-evenly items-center">
                <button className="rounded-full p-2 bg-gradient-to-t md:w-[25%] w-[35%] from-blue-700 to-cyan-400 hover:from-blue-500 hover:to-cyan-400">
                  <a href="https://rock-paper-scissor-game-ivory.vercel.app/">Live Preview</a>
                </button>
                <button className="border bg-gradient-to-t hover:from-blue-700 hover:to-cyan-200 rounded-full w-[40%] p-2">
                  <a href="https://github.com/Rashid-56/Rock-Paper-Scissor-Game">GitHub Code</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;

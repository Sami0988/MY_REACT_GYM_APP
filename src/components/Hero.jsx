import { useTheme } from "../Theme/Themecontext";
import background from "../assets/Hero.png";
import mainImage from "../assets/main.png";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center brightness-75"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#332F64] to-transparent z-10"></div>

      {/* Content */}

      <div className="relative z-20 flex flex-col-reverse md:flex-row md:justify-around items-center justify-center px-4 md:px-16 gap-6 md:gap-12">
        <div className="flex flex-col space-y-6">
          <div className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span className="block">Start a better</span>
            <span className="block">shape of you!</span>
            <span className="block text-[#FFFF7D]">Come Join Us!</span>
          </div>
          <div>
            <button className="bg-[#FFFADF] text-black hover:bg-amber-100 px-6 py-3 rounded-full transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src={mainImage}
            alt="Main Image"
            className="w-[300px] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

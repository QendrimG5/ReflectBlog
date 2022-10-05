import SignUpForm from "./components/SignUpForm";
import { logoIcon } from "./assets";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-primary">
        <SignUpForm />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white">
        <div className="w-80 h-80 animate-bounce">
          <img src={logoIcon} alt="" />
        </div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default App;

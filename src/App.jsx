import "./App.css";
import {
  Header,
  RatingsPill,
  Tag,
  Ad,
  Toggle,
  IconButton,
  GirlsRate,
  GuysRate,
  Sidebar,
  ImageToRate,
  PopupSignIn,
} from "./components/index";

// Sets the logged in status to true or false to optinally dispaly the right elements
const LoggedInStatus = true;

function App() {
  return (
    <>
      {/* <PopupSignIn /> */}
      <Header isLoggedIn={LoggedInStatus} />
      <div className="xl:max-w-[1280px] h-fill mx-auto px-4 flex justify-between gap-x-4">
        <Sidebar isLoggedIn={LoggedInStatus} />
        <ImageToRate />
        <Ad />
      </div>
      {/* <GirlsRate />
      <GuysRate />
      <Toggle />
      <IconButton />
      <Tag />
      <RatingsPill /> */}
    </>
  );
}

export default App;

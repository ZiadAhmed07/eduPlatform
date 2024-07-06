import BackGround from "./_component/background/BackGround";
import Loader from "./_component/loader/loader";


export default function Loading() {

    return (
        <div className="bg-gray-200">
          <BackGround/>
          <Loader/>
        </div>
        
    )
  }
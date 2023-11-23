import Image from "next/image";
import Heart from "../Icons/Heart";
import Share from "../Icons/Share";

export default function Card({ tab }: { tab: string }) {
  return (
    <div className="flex justify-between rounded-lg border-2 border-gray-400 dark:border-gray-300 bg-gray-200 p-2 mt-2">
      <div>
        <Image src={"/logoNew.png"} width={250} height={100} alt="card" />
        <div className="flex py-2">
          <Heart /> <span className="ml-1 mr-4">0</span>
          <Share /> <span className="ml-1">0</span>
        </div>
        Hosted by <b>Prepr</b>
      </div>
      <div className="w-full ml-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-black text-blue-500 capitalize">
            {tab} card
          </h1>
          <button className="ml-2 px-2 py-1 bg-blue-400 rounded text-white">
            + Follow
          </button>
        </div>
        <h4 className="text-md">
          <b>Public Lab</b> · Last update: <b>1 year ago</b> · Members:{" "}
          <b>35</b> · Duration: <b>None</b> · Level: <b>None</b>
        </h4>
        <h4 className="py-2">
          If you're here then you're a passionate employment service provider
          who’s constantly looking for new tools and concepts. We've prepared a
          series of Challenges just for you! The Challenges in this Lab are
          designed to help you learn how you can get the most out of our
          platform, get started today!
        </h4>
      </div>
    </div>
  );
}

import { useState } from "react";
import Access from "../Icons/Access";
import Switch from "./Switch";
import Option from "./Option";

export default function Accessibility() {
  const [show, setShow] = useState(false);

  const accessibility = [
    {
      title: "Seizure Safe Profile",
      description: "Clear flashes & reduces color",
    },
    {
      title: "Vision Impaired Profile",
      description: "Enhances website's visuals",
    },
    {
      title: "ADHD Friendly Profile",
      description: "More focus & fewer distractions",
    },
    {
      title: "Cognitive Disability Profile",
      description: "Assists with reading & focusing",
    },
    {
      title: "Keyboard Navigation (Motor)",
      description: "Use website with the keyboard",
    },
    {
      title: "Blind Users (Screen Reader)",
      description: "Optimize website for screen-readers",
    },
  ];

  return (
    <>
      <button
        className="fixed mt-8 right-8 p-2 rounded-full bg-green-500"
        onClick={() => setShow(!show)}
      >
        <Access />
      </button>
      {show && (
        <div className="p-2 fixed top-0 left-4 h-screen w-2/5">
          <div className="bg-green-500 rounded h-full text-white px-4 py-2 text-center overflow-y-auto">
            <div className="flex justify-between mb-6">
              <button onClick={() => setShow(false)}>X</button>
              <div>
                <select className="bg-green-500">
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>
            </div>

            <h2 className="text-2xl mb-6">Accessibility Abjustments</h2>

            <div className="flex justify-around mb-6">
              <button className="rounded-full bg-white text-green-500 px-2 py-1 basis-1/4">
                Reset Settings
              </button>
              <button className="rounded-full bg-white text-green-500 px-2 py-1 basis-1/4">
                Statement
              </button>
              <button className="rounded-full bg-white text-green-500 px-2 py-1 basis-1/4">
                Hide Interface
              </button>
            </div>

            <input
              className="rounded-full px-4 py-2 text-white bg-green-700 focus:outline-none w-full mb-6"
              placeholder="Unclear content? Search in dictionary..."
            />

            <div className="bg-white w-full px-4 py-2 text-black text-left rounded mb-6">
              <h2>Choose the right accessibility profile for you</h2>

              {accessibility.map((a) => (
                <div className="flex items-center p-2" key={a.title}>
                  <Switch />
                  <div className="ml-6">
                    <h3>{a.title}</h3>
                    <h5>{a.description}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white w-full px-4 py-2 text-black text-left rounded mb-6">
              <h2>Content Adjustments</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-2 flex-wrap">
                <Option>Readable Font</Option>
                <Option>Highlight Titles</Option>
                <Option>Highlight Links</Option>

                <Option>Align Left</Option>
                <Option>Align Center</Option>
                <Option>Align Right</Option>
              </div>
            </div>

            <div className="bg-white w-full px-4 py-2 text-black text-left rounded mb-6">
              <h2>Color Adjustments</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-2 flex-wrap">
                <Option>Dark Constrast</Option>
                <Option>Light Contrast</Option>
                <Option>High Contrast</Option>

                <Option>Low Saturation</Option>
                <Option>Monochrome</Option>
                <Option>High Saturation</Option>
              </div>
            </div>

            <div className="bg-white w-full px-4 py-2 text-black text-left rounded mb-2">
              <h2>Orientation Adjustments</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-2 flex-wrap">
                <Option>Mute Sounds</Option>
                <Option>Hide Images</Option>
                <Option>Read Mode</Option>

                <Option>Reading Guide</Option>
                <Option>Stop Animations</Option>
                <Option>Reading Mask</Option>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

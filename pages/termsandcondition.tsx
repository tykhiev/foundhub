import { FunctionComponent } from "react";
import Image from "next/image";

interface TermsAndConditionsProps {}

const TermsAndConditions: FunctionComponent<TermsAndConditionsProps> = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-max bg-[#E6FCFF] px-5 py-5 flex flex-col md:flex-row items-start rounded-2xl">
        <div className="font-league-spartan bg-[#E6FCFF] px-5 py-5 flex flex-col justify-center items-center my-auto mx-auto space-x-2 w-6/12">
          <h1 className="font-league-spartan text-4xl font-bold text-center">
            Terms and Conditions
          </h1>
          <div className="text-xl font-league-spartan text-justify">
            <p>
              Please read these terms and conditions carefully before using
              FoundHub.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
              placerat sem. Vivamus scelerisque nulla at nunc faucibus dapibus.
              Mauris nec purus justo. Integer ut ex sit amet neque faucibus
              facilisis. Aliquam erat volutpat. Mauris sit amet justo vitae
              sapien pellentesque elementum. Aliquam ullamcorper purus mauris,
              vitae congue arcu dignissim eget.
            </p>
            <p>
              Proin cursus, lectus at eleifend ultricies, nisl urna finibus
              arcu, sed tristique nisi mauris in urna. Ut dignissim nisl sit
              amet pellentesque ultricies. Morbi aliquam nulla neque, eu cursus
              ligula vestibulum id. Aliquam ac diam consectetur, lobortis odio
              ut, euismod tellus. Suspendisse potenti. Fusce cursus faucibus
              turpis, eu dapibus ligula malesuada eu.
            </p>
            <p>
              Sed laoreet nisi nec risus auctor, eget malesuada tortor faucibus.
              Nulla sed nunc id tortor tincidunt vestibulum. Fusce mollis purus
              vitae tellus aliquam lobortis. Quisque auctor dui sed consequat
              mollis. Curabitur eu ultricies nunc. In commodo libero in leo
              lacinia, non hendrerit arcu ullamcorper.
            </p>
            <p>
              Donec consectetur diam in vehicula venenatis. Nullam vehicula
              lectus sit amet elit fringilla, ut condimentum sem lobortis. Nam
              euismod ex ut sem volutpat scelerisque. Proin vel purus vel eros
              suscipit consequat in vitae nulla. Mauris id tincidunt felis.
              Nullam eu egestas sem. Sed sit amet risus at justo pharetra
              scelerisque nec sit amet ante. Sed efficitur orci ut metus
              molestie, eu bibendum nunc placerat. Vivamus id posuere nunc. Sed
              rhoncus efficitur magna, eget feugiat orci eleifend vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

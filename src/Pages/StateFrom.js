import BasicTimeLine from "../Components/Timeline";

export default function UrlParamsFrom() {

  const links = [
    {path: "/StateTo", state: {tabNum: 0}, label: "One"},
    {path: "/StateTo", state: {tabNum: 1}, label: "Two"},
    {path: "/StateTo", state: {tabNum: 2}, label: "Three"}
  ];

  return (
    <div>
      <BasicTimeLine links={links} />
    </div>
  );
}
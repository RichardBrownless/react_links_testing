import BasicTimeLine from "../Components/Timeline";

export default function UrlParamsFrom() {

  const links = [
    {path: "/UrlParametersTo/0", label: "One"},
    {path: "/UrlParametersTo/1", label: "Two"},
    {path: "/UrlParametersTo/2", label: "Three"}
  ];

  return (
    <div>
      <BasicTimeLine links={links}/>
    </div>
  );
}
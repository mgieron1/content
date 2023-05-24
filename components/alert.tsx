import Container from "./container";
import cn from "classnames";

const Alert = () => {
  const preview = false;
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container></Container>
    </div>
  );
};

export default Alert;

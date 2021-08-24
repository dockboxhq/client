import { StyledText } from "components/Common/common";
import { Folder } from "react-feather";
import { ListGroup } from "reactstrap";

const Row = ({ text }: { text: string }) => {
  return (
    <div className="d-flex mt-3">
      <Folder color="orange" style={{ marginLeft: "10px" }} />
      <span style={{ color: "white", fontSize: "1rem" }} className="flex-fill ms-2">
        {text}
      </span>
    </div>
  );
};
const FileTree = ({ className = "" }) => {
  return (
    <div
      className={`${className} pt-2 p-1`}
      style={{ height: "70%", background: "#2B2929", margin: "2rem", color: "white" }}>
      <StyledText style={{ fontSize: "1.5rem" }}>Coming Soon!</StyledText>
      <StyledText style={{ fontSize: "1rem" }}>File system UI</StyledText>
      <ListGroup>
        <Row text="Sample Folder" />
        <Row text="Sample Folder 2" />
      </ListGroup>
    </div>
  );
};

export default FileTree;

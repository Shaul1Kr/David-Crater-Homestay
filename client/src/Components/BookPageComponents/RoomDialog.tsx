import styled from "styled-components";

const RoomDialogContainer = styled.dialog`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

interface RoomDialogProps {
  dialogState: boolean;
}

const RoomDialog = ({ dialogState }: RoomDialogProps) => {
  return <RoomDialogContainer open={dialogState}></RoomDialogContainer>;
};

export default RoomDialog;

import {
  Dialog as OriginalDialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { PropTypes } from "prop-types";
import { StyledIconButton } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

export const Dialog = ({ open, onClose, title, children }) => {
  return (
    <OriginalDialog onClose={onClose} open={open}>
      <DialogTitle>
        {title}
        {onClose ? (
          <StyledIconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </StyledIconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </OriginalDialog>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Dialog;

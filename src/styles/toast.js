import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: var(--color-grey-2) !important;
  }
`;

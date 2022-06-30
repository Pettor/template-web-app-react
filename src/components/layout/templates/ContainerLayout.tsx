import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import LogoFull, { LogoFullSize } from "../../common/logo/LogoFull";

type Props = {
  logoSize?: LogoFullSize;
  children: JSX.Element | JSX.Element[];
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

const ContainerLayout = ({ logoSize = "large", children }: Props) => {
  return (
    <StyledBox>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LogoFull size={logoSize} />
          <Box component="main" sx={{ mt: 4, width: "100%" }}>
            {children}
          </Box>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default ContainerLayout;

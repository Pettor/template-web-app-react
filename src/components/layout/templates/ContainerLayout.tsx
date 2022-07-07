import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { SxProps, styled } from "@mui/material/styles";

type Props = {
  sx?: SxProps;
  children: JSX.Element | JSX.Element[];
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default,
}));

const ContainerLayout = ({ sx, children }: Props) => {
  return (
    <StyledBox>
      <Container maxWidth="xs" sx={sx}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="main" sx={{ mt: 4, width: "100%" }}>
            {children}
          </Box>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default ContainerLayout;

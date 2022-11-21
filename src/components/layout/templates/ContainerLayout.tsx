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

const ContentBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(2),
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(0),
  },
}));

function ContainerLayout({ sx, children }: Props) {
  return (
    <StyledBox>
      <Container maxWidth="xs" sx={sx}>
        <ContentBox>
          <Box component="main" sx={{ mt: 4, width: "100%" }}>
            {children}
          </Box>
        </ContentBox>
      </Container>
    </StyledBox>
  );
}

export default ContainerLayout;

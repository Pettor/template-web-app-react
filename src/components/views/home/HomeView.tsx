import { useIntl } from "react-intl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import HeaderLayout, { IHeaderLayout } from "../../layout/templates/HeaderLayout";

const GridItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = IHeaderLayout;

const HomeView = (headerLayoutProps: Props) => {
  const intl = useIntl();
  return (
    <HeaderLayout headerOptions={{ label: "Home" }} {...headerLayoutProps}>
      <Box>
        {intl.formatMessage({
          description: "Homne: Content text",
          defaultMessage: "This is content",
          id: "ib9CVb",
        })}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <GridItem>xs=2</GridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </HeaderLayout>
  );
};

export default HomeView;
